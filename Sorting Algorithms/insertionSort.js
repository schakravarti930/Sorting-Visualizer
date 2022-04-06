async function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 0; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            let currentHeight = inputArr[i].style.height
            current.style.background = "red"
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (currentHeight < inputArr[j].style.height)) {
                inputArr[j].style.background = "turquoise"
                inputArr[j+1].style.height = inputArr[j].style.height;
                await delay()
                inputArr[j].style.background = "green"
                j--;

            }
            inputArr[j+1].style.height = currentHeight;
            current.style.background = "green"
        }
    //return inputArr;
}