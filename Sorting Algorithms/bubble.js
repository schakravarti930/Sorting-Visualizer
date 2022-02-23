function swap(arr,ei,ej){
    var temp = arr[ei].style.height;
    arr[ei].style.height = arr[ej].style.height;
    arr[ej].style.height = temp;
}

async function bubbleSort(arr,animationSpeed){
    for(let i = 0;i<arr.length-1;i++)
    {
        for(let j = 0;j<arr.length-i-1;j++)
        {
            arr[j].style.background = "red"
            arr[j+1].style.background = "red"

            await new Promise(resolve => {setTimeout(resolve,animationSpeed)});

            if(parseFloat(arr[j].style.height) > parseFloat(arr[j+1].style.height))
            {
                //console.log(arr[j].style.height + " " + arr[j+1].style.height);
                swap(arr,j,j+1);
            }
                
            
            //await new Promise(resolve => {setTimeout(resolve,5000)});
            arr[j].style.background = "yellow"
            arr[j+1].style.background = "yellow"
        }
        arr[arr.length-i-1].style.background = "green"
    }
    arr[0].style.background = "green"
}

