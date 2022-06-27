var q = "";
var linkKey = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBK73HewkhHBVVs9nI98-HY_N7cZM_kdjE" 
var zoom = 14;
var defaultLoc = "ikoyi, Lagos"

//Get users geolocation
if (navigator.geolocation) {
    q = navigator.geolocation.getCurrentPosition(handleGetCurrentPosition, onError);

    function handleGetCurrentPosition(location) {
        location.coords.latitude;
        location.coords.longitude;
    }

    function onError() {
        q = defaultLoc;
    }
}

//Set initial map based on user geolocation or NY, NY
var srcContent = linkKey + "&q=" + q + "&zoom=" + zoom;
$("#map-canvas").attr("src", srcContent);

//Change map based on user input in textbox and a click or enter key submission. 
$(function () {
    $('#submit').on('keypress click', function (e) {
        if ($('#address').val().length === 0) {
            q = defaultLoc;
        }
        else {
            q = $('#address').val();
        }
        srcContent = linkKey + "&q=" + q + "&zoom=" + zoom;
        if (e.which === 13 || e.type === 'click') {
            $("#map-canvas").attr("src", srcContent);
        }
    });
});