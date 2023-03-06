// disable rubberband effect on mobile devices
document.getElementById('glcanvas').addEventListener('touchmove', (e)=>{ e.preventDefault(); }, false);


function patchInitialized(patch) {
    // You can now access the patch object (patch), register variable watchers and so on
}

function patchFinishedLoading(patch) {
    // The patch is ready now, all assets have been loaded
}

document.addEventListener('CABLES.jsLoaded', function (event) {
    CABLES.patch = new CABLES.Patch({
        patch: CABLES.exportedPatch,
        "prefixAssetPath": "",
        "assetPath": "assets/",
        "jsPath": "js/",
        "glCanvasId": "glcanvas",
        "glCanvasResizeToWindow": true,
        "onPatchLoaded": patchInitialized,
        "onFinishedLoading": patchFinishedLoading,
        "canvas":{"alpha":true,"premultipliedAlpha":true} // make canvas transparent
    });
});


// landing page stylings
const lineWrappers = document.getElementsByClassName('outer-box');
const lines = document.getElementsByClassName('line');
const texts = document.getElementsByClassName('text');

console.log(lineWrappers);
for (let index = 0; index < lineWrappers.length; index++) {
    lineWrappers[index].addEventListener('mouseover', function(event){
        indexControllers(index, lineWrappers, event)
    });
    lineWrappers[index].addEventListener('mouseout', function(){
        indexControllers(index, lineWrappers, event)
    });
}

function indexControllers(index, arr, event){
    if(event.type == 'mouseover'){
        switch (index) {
            case 0:
                lines[index + 1].style.width = '20px';
                lines[index].style.width = '35px';
                break;

            case (arr.length - 1):
                lines[index - 1].style.width = '20px';
                lines[index].style.width = '35px';
                break;
        
            default:
                lines[index - 1].style.width = '20px';
                lines[index].style.width = '35px';
                texts[index].style.opacity = 1;
                lines[index + 1].style.width = '20px';
                break;
        }
    }
    else{
        switch (index) {
            case 0:
                lines[index + 1].style.width = '10px';
                lines[index].style.width = '15px';
                break;

            case (arr.length - 1):
                lines[index - 1].style.width = '10px';
                lines[index].style.width = '10px';
                break;
        
            default:
                lines[index - 1].style.width = '10px';
                lines[index].style.width = '10px';
                texts[index].style.opacity = 0;
                lines[index + 1].style.width = '10px';
                break;
        }
    }
}

