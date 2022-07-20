let compteurIdOfDiv = 0;
let compteurIdOfImage = 0;
let compteurIdOfChildDiv = 0


function getCanvasXSize() {
    const canvas = document.getElementById('canvas');
    const width = canvas.offsetWidth / 2;
    return {width}
}

function getCanvasYSize() {
    const canvas = document.getElementById('canvas');
    const height = canvas.offsetHeight / 2;
    return {height}
}

function addDiv(){
    compteurIdOfDiv++;
    const div = document.createElement('div');
    var divId = "frame" + compteurIdOfDiv;
    div.setAttribute('id', divId);
    var divClass = "divClass";
    div.setAttribute('class', divClass);
    document.getElementById('canvas').appendChild(div);
    div.appendChild(addImage(divId));
    placeDiv(getCanvasXSize(), getCanvasYSize(), divId);
    $(div).draggable();
    div.height=120;
    div.width=120;
    addAnotherDiv(divId)
}

function placeDiv(x_pos,y_pos,id){
    const div = document.getElementById(id);
    div.style.position = "absolute";
    div.style.left = x_pos.width + "px";
    div.style.top = y_pos.height + "px";
}

function addImage(id){
    compteurIdOfImage++;
    const image = document.createElement('img');
    image.src = "..\\images\\Winnie.png";
    image.height = 120;
    image.width = 100;
    let id_name = "winnie";
    image.setAttribute('id', "stickers" + compteurIdOfImage);
    let class_name = "foo";
    image.setAttribute('class', class_name);
    image.style.position = "relative";

    return image;
}


function addAnotherDiv(divIdParent){
compteurIdOfChildDiv++;
const div = document.createElement('div');
var divId = "actions" + compteurIdOfChildDiv;
div.setAttribute('id', divId);
var divClass = "divClass";
div.setAttribute('class', divClass);
document.getElementById(divIdParent).appendChild(div);
actions(divId, divIdParent);
}


function actions(id,id_parent){
            var buttonRemove = document.createElement('button');
            buttonRemove.setAttribute("class", "action-remove");
            document.getElementById(id).appendChild(buttonRemove);
            buttonRemove.addEventListener('click', function() {
                const divToDelete = document.getElementById(id_parent);
                divToDelete.remove(divToDelete);
            }
            )
        
            var buttonZoomin = document.createElement('button');
            buttonZoomin.setAttribute("class", "action-zoomIn");
            document.getElementById(id).appendChild(buttonZoomin);
            buttonZoomin.addEventListener('click', function() {
                const divToZoomIn = document.getElementById(this.parentNode.parentNode.firstChild.id);
                const frame = divToZoomIn.parentElement;
                const frameRect = frame.getBoundingClientRect();
                const imgRect = divToZoomIn.getBoundingClientRect();
                const x = imgRect.left - frameRect.left;
                const y = imgRect.top - frameRect.top;
                const width = imgRect.width;
                const height = imgRect.height;
                const newWidth = width * 1.1;
                const newHeight = height * 1.1;
                const newX = x - (newWidth - width) / 2;
                const newY = y - (newHeight - height) / 2;
                divToZoomIn.style.width = newWidth + 'px';
                divToZoomIn.style.height = newHeight + 'px';
                divToZoomIn.style.top = newY + 'px';
                divToZoomIn.style.left = newX + 'px';

            }
            )
        
            var buttonZoomout = document.createElement('button');
            buttonZoomout.setAttribute("class", "action-zoomOut");
            document.getElementById(id).appendChild(buttonZoomout);
            buttonZoomout.addEventListener('click', function() {
                const divToZoomout = document.getElementById(this.parentNode.parentNode.firstChild.id);
                const frame = divToZoomout.parentElement;
                const frameRect = frame.getBoundingClientRect();
                const imgRect = divToZoomout.getBoundingClientRect();
                const x = imgRect.left - frameRect.left;
                const y = imgRect.top - frameRect.top;
                const width = imgRect.width;
                const height = imgRect.height;
                const newWidth = width / 1.1;
                const newHeight = height / 1.1;
                const newX = x + (width - newWidth) / 2;
                const newY = y + (height - newHeight) / 2;
                divToZoomout.style.width = newWidth + 'px';
                divToZoomout.style.height = newHeight + 'px';
                divToZoomout.style.top = newY + 'px';
                divToZoomout.style.left = newX + 'px';
            }
            )
        
            var buttonMoveCloser = document.createElement('button');
            buttonMoveCloser.setAttribute("class", "action-moveCloser");
            document.getElementById(id).appendChild(buttonMoveCloser);
            buttonMoveCloser.addEventListener('click', function() {
                const divToMoveCloser = document.getElementById(this.parentNode.parentNode.firstChild.id);
                divToMoveCloser.style.zIndex = "1";

            }
            )
        
            var buttonMoveAway = document.createElement('button');
            buttonMoveAway.setAttribute("class", "action-moveAway");
            document.getElementById(id).appendChild(buttonMoveAway);
            buttonMoveAway.addEventListener('click', function() {
                const divToMoveAway = document.getElementById(this.parentNode.parentNode.firstChild.id);
                divToMoveAway.style.zIndex = "-1";
            }
            )
        
            var buttonMirror = document.createElement('button');
            buttonMirror.setAttribute("class", "action-mirror");
            document.getElementById(id).appendChild(buttonMirror);
            buttonMirror.addEventListener('click', function () {
                        const img = document.getElementById(this.parentNode.parentNode.firstChild.id);
                        if(img.classList.contains('mirror')){
                            img.style.transform = 'scale(1)';
                            img.classList.remove('mirror');
                        } else {
                            img.style.transform = 'scale(-1,1)';
                            img.classList.add('mirror');
                        }
                        
                    }
                    );

}