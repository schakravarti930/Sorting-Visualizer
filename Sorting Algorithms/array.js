// console.log(arr);

const animationSpeedNode = document.getElementById("animationSpeed")

const arraySizeNode = document.getElementById("arraySize")
arraySizeNode.oninput = () => createNewArray()

var bars = document.getElementById('bars-container');

var divArr

function createNewArray(){
    
    const arraySize = parseInt(document.getElementById("arraySize").value)
    while(bars.hasChildNodes()){
        bars.removeChild(bars.firstChild);
    }

    divArr = []
    var i = 0;
    var arr = Array.from({length:arraySize}, () => Math.floor(Math.random()*90) + 10);
    arr.forEach(element => {
        const bar = document.createElement("div");
        divArr[i] = bar;
        i++;
        bar.style.height = (element)+"%";
        bar.className = "bar";
        bars.appendChild(bar);
    })
    //bubbleSort(divArr);
    //console.log(arraySize);
}

createNewArray();

const newButton = document.getElementById('new-array');
newButton.addEventListener('click',createNewArray);

const bubble = document.getElementById("bubble")
bubble.onclick = () => bubbleSort(divArr,parseInt(animationSpeedNode.value))