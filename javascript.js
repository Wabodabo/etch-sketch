const height = window.innerHeight;
const width = window. innerWidth;

const container = document.querySelector(".container");

let size;

function draw(size){
    
    let row;
    let div;

    for(i=0;i<size;i++){
        row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(j=0;j<size;j++){
            div = document.createElement("div");
            div.classList.add("square-div");    
            row.appendChild(div);
        }
    }
}

function getSize(){
    let size = prompt("Please enter the size of the grid:");
    if(size >100){
        size = prompt("This is too large, please enter a number 100 or below");
    }
    return size;
}

function createPage(){
    container.replaceChildren();
    size = getSize();
    draw(size);
}

function cleanPage(){
    container.replaceChildren();
    draw(size);
}

container.addEventListener("mousemove", (event)=>{
        let target = event.target;

        if(target.className != 'container'){
            target.style.backgroundColor = 'red';
        }
    });
