//Buttons
const buttonGroup = document.querySelector(".button-group");
const bubbleButton = document.getElementById("bubble")
const mergeButton = document.getElementById("merge")
const insertionButton = document.getElementById("insertion")
const quickButton = document.getElementById("quick")
const newButton = document.getElementById('new-array')


const disableButtonGroup = (buttonGroup) => {
    for(let i = 0;i<4;i++){
        console.log(buttonGroup.children[i]);
        buttonGroup.children[i].disabled = true;
    }
}
const enableButtonGroup = (buttonGroup) => {
    for(let i = 0;i<4;i++){
        console.log(buttonGroup.children[i]);
        buttonGroup.children[i].disabled = false;
    }
}

//Colors defined for animation
defaultColor = "yellow"
compareColor = "red"
pivotColor = "pink"

//Event listeners on button
bubbleButton.onclick = async() => {
    //console.log('clicked')
    disableButtonGroup(buttonGroup);
    await bubbleSort(divArr);
    enableButtonGroup(buttonGroup);
}

mergeButton.onclick = async() => {
    disableButtonGroup(buttonGroup);
    await mergeSort(divArr,0,divArr.length-1);
    disableButtonGroup(buttonGroup);
}

insertionButton.onclick = async() => {
    disableButtonGroup(buttonGroup);
    await insertionSort(divArr);
    enableButtonGroup(buttonGroup);
}
let arr = [2,3,12,4,52,65,2,5,43]

quickButton.onclick = async() => {
    disableButtonGroup(buttonGroup);
    await qSort(divArr,0,divArr.length-1);
    enableButtonGroup(buttonGroup);
    //console.log(arr)
}

newButton.addEventListener('click',createNewArray);

const animationSpeedNode = document.getElementById("animationSpeed")

const arraySizeNode = document.getElementById("arraySize")
arraySizeNode.oninput = () => createNewArray()

const bars = document.getElementById('bars-container');

let divArr

function createNewArray(){
    
    const arraySize = parseInt(document.getElementById("arraySize").value)
    while(bars.hasChildNodes()){
        bars.removeChild(bars.firstChild);
    }

    divArr = []
    let i = 0;
    const arr = Array.from({length:arraySize}, () => Math.floor(Math.random()*90) + 10);
    arr.forEach(element => {
        const bar = document.createElement("div");
        divArr[i] = bar;
        i++;
        bar.style.height = (element)+"%";
        bar.style.backgroundColor = defaultColor;
        bar.className = "bar";
        bars.appendChild(bar);
    })
    //bubbleSort(divArr);
    //console.log(arraySize);
}

createNewArray();

async function delay(){
    await new Promise(resolve => {setTimeout(resolve,parseInt(animationSpeedNode.value))});
}




// mergeSort([2,2])
// var arr = [2,1,5,2,4,4,92,2]
// mergeSort(divArr,0,divArr.length-1)
// console.log(arr)


