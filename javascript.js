const height = window.innerHeight;
const width = window. innerWidth;

const container = document.querySelector(".container");

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
    return size;
}

function createPage(){
    container.replaceChildren();
    let size = getSize();
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
