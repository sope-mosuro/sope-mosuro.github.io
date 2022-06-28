let theImage = document.querySelector('#theImage');
let scene = "";
let onWallTile = document.querySelector('.imageContainer');

const changeScene = (sceneArg) => {
    if(sceneArg == 'onwall'){
        theImage.src = sceneArg + "/" + sceneArg + "_default.png";
    }
    else if(sceneArg != '') {
        theImage.src = sceneArg + "/" + sceneArg + "_default.jpg";
    }
    console.log(theImage.src);
    scene = sceneArg;
}
const changeImage = (imageName) => {
    if(scene == 'onwall'){
        onWallTile.style.backgroundImage = "url('/Ceras/onwall/" + imageName + ".jpg')"
    }
    else if(scene != ""){
        theImage.src = scene + "/" + scene + "_" + imageName + ".jpg";
    }
    else {
        theImage.src = "#"
    }
}