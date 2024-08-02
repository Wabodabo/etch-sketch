const height = window.innerHeight;
const width = window. innerWidth;

const container = document.querySelector(".container");

let size = 50;

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

function randomInt(max){
    return Math.floor(Math.random()*(max+1));
}
function randomRGB(){  
    let r = randomInt(255);
    let g = randomInt(255);
    let b = randomInt(255);

    return `rgb(${r}, ${g}, ${b})`;

}

container.addEventListener("mousemove", (event)=>{
        let target = event.target;

        if(target.className != 'container'){
            let color = randomRGB();    
            target.style.backgroundColor = color;
            target.style.opacity = String(Number(target.style.opacity)+0.3);
            
        }
    });
