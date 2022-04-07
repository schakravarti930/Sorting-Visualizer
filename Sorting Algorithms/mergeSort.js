async function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1); 
    
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
    {
        L[i] = arr[l + i].style.height;
        
        // arr[l+1].style.background = compareColor
        // await new Promise(resolve => {setTimeout(resolve,300)});
        // arr[l+1].style.background = defaultColor
    }
        
    for (var j = 0; j < n2; j++)
    {
        R[j] = arr[m + 1 + j].style.height;
        
        // arr[m+1+j].style.background = compareColor
        // await new Promise(resolve => {setTimeout(resolve,300)});
        // arr[m+1+j].style.background = defaultColor
    }
        
    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        arr[l+i].style.background = compareColor
        arr[m+1+j].style.background = compareColor

        if (L[i] <= R[j]) {
            
            
            arr[k].style.height = L[i]
            await delay()
            
            arr[l+i].style.background = defaultColor
            arr[m+1+j].style.background = defaultColor
            arr[k].style.background = defaultColor
            i++;
            
        }
        else {

            arr[k].style.height = R[j]
            
            await delay()
            
            arr[l+i].style.background = defaultColor
            arr[m+1+j].style.background = defaultColor
            
            arr[k].style.background = defaultColor
            j++;
            
        }
        k++;
    }

    
    while (i < n1) {
        arr[l+i].style.background = compareColor
        
        arr[k].style.height = L[i]
        
        await delay()
        
        arr[l+i].style.background = defaultColor
        arr[k].style.background = defaultColor
        
        i++;
        k++;
        
    }

    
    while (j < n2) {
        
        arr[m+1+j].style.background = compareColor
        arr[k].style.height = R[j]
        
        await delay()
        
        arr[k].style.background = defaultColor
        
        j++;
        k++;
        
    }
}

async function mergeSort(arr,l, r){
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    await mergeSort(arr,l,m);
    //await new Promise(resolve => {setTimeout(resolve,1)});
    await mergeSort(arr,m+1,r);
    await merge(arr,l,m,r);
}
