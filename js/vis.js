let theImage = document.querySelector('#theImage');
let scene = "";
let onWallTile = document.querySelector('.imageContainer');
let home = document.querySelector('.home');
// let return = document.querySelector('#return');

const changeScene = (sceneArg) => {
    if(sceneArg == 'onwall'){
        theImage.src = `images/${sceneArg}/${sceneArg}_default.png`;
    }
    else if(sceneArg != '') {
        theImage.src = `images/${sceneArg}/${sceneArg}_default.jpg`;
    }
    console.log(theImage.src);
    scene = sceneArg;
    home.style.display = "none";
}
const changeImage = (imageName) => {
    if(scene == 'onwall'){
        onWallTile.style.backgroundImage = "url('/Ceras/onwall/" + imageName + ".jpg')"
    }
    else if(scene != ""){
        theImage.src = `${scene}/${scene}_${imageName}.jpg`;
    }
    else {
        theImage.src = "#";
    }
}