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
        
        // arr[l+1].style.background = "red"
        // await new Promise(resolve => {setTimeout(resolve,300)});
        // arr[l+1].style.background = "yellow"
    }
        
    for (var j = 0; j < n2; j++)
    {
        R[j] = arr[m + 1 + j].style.height;
        
        // arr[m+1+j].style.background = "red"
        // await new Promise(resolve => {setTimeout(resolve,300)});
        // arr[m+1+j].style.background = "yellow"
    }
        
    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            //console.log(L[i])
            arr[l+i].style.background = "red"
            arr[m+1+j].style.background = "red"
            arr[k].style.height = L[i]
            await new Promise(resolve => {setTimeout(resolve,20)});
            //window.setTimeout(10);
           // arr[l+i].style.background = "yellow"
            arr[m+1+j].style.background = "yellow"
            arr[k].style.background = "yellow"
            i++;
            //await new Promise(resolve => {setTimeout(resolve,1)});
        }
        else {
            arr[l+i].style.background = "red"
            arr[m+1+j].style.background = "red"
            arr[k].style.height = R[j]
            await new Promise(resolve => {setTimeout(resolve,20)});
            //window.setTimeout(10);
            arr[l+i].style.background = "yellow"
            //arr[m+1+j].style.background = "yellow"
            //arr[k].style.background = "green"
            arr[k].style.background = "yellow"
            j++;
            //await new Promise(resolve => {setTimeout(resolve,1)});
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[l+i].style.background = "red"
        //arr[m+1+j].style.background = "red"
        arr[k].style.height = L[i]
        await new Promise(resolve => {setTimeout(resolve,20)});
        //window.setTimeout(10);
        ///arr[l+i].style.background = "yellow"
        arr[k].style.background = "yellow"
        //await new Promise(resolve => {setTimeout(resolve,1)});
        //window.setTimeout(10);
        //arr[k].style.background = "green"
        i++;
        k++;
        //await new Promise(resolve => {setTimeout(resolve,1)});
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        //arr[l+i].style.background = "red"
        arr[m+1+j].style.background = "red"
        arr[k].style.height = R[j]
        await new Promise(resolve => {setTimeout(resolve,20)});
        //window.setTimeout(10);
        //arr[m+1+j].style.background = "yellow"
        arr[k].style.background = "yellow"
        //await new Promise(resolve => {setTimeout(resolve,1)});
        // window.setTimeout(10);
        //arr[k].style.background = "green"
        j++;
        k++;
        //await new Promise(resolve => {setTimeout(resolve,1)});
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
