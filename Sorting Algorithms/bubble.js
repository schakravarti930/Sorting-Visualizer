function swap(arr,ei,ej){
    var temp = arr[ei].style.height;
    arr[ei].style.height = arr[ej].style.height;
    arr[ej].style.height = temp;
}

async function bubbleSort(arr){
    for(let i = 0;i<arr.length-1;i++)
    {
        for(let j = 0;j<arr.length-i-1;j++)
        {
            arr[j].style.background = compareColor
            arr[j+1].style.background = compareColor

            //await new Promise(resolve => {setTimeout(resolve,animationSpeed)});
            await delay()

            if(parseFloat(arr[j].style.height) > parseFloat(arr[j+1].style.height))
            {
                //console.log(arr[j].style.height + " " + arr[j+1].style.height);
                swap(arr,j,j+1);
            }
                
            
            //await new Promise(resolve => {setTimeout(resolve,5000)});
            arr[j].style.background = defaultColor
            arr[j+1].style.background = defaultColor
        }
        arr[arr.length-i-1].style.background = defaultColor
    }
    arr[0].style.background = defaultColor
}

