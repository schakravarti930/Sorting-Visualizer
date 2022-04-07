async function partition(arr, low, high)
{
    let temp;
    let pivot = arr[high].style.height;
    arr[high].style.background = pivotColor

    // index of smaller element
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        arr[j].style.background = compareColor
        await delay()
        // If current element is
        // smaller than or
        // equal to pivot
        if (arr[j].style.height <= pivot) {
            i++;

            // swap arr[i] and arr[j]
            arr[i].style.background = compareColor
            await delay()
            temp = arr[i].style.height;
            arr[i].style.height = arr[j].style.height;
            arr[j].style.height = temp;
        }
        arr[j].style.background = defaultColor
        console.log(low,high,i)
        i != -1 ? arr[i].style.background = defaultColor:""
    }

    // swap arr[i+1] and arr[high]
    // (or pivot)
    arr[i+1].style.background = pivotColor
    temp = arr[i + 1].style.height;
    arr[i + 1].style.height = arr[high].style.height;
    arr[high].style.height = temp;
    //arr[i+1].style.background = defaultColor
    arr[high].style.background = defaultColor

    return i + 1;
}

    /* The main function that implements
    QuickSort() arr[] --> Array to be
    sorted,
    low --> Starting index,
    high --> Ending index */
async function qSort(arr, low, high)
{
    if (low <= high) {
        /* pi is partitioning index,
        arr[pi] is now at right place */
        let pi = await partition(arr, low, high);
        arr[pi].style.background = defaultColor
        // Recursively sort elements
        // before partition and after
        // partition
        await qSort(arr, low, pi - 1);
        await qSort(arr, pi + 1, high);
    }
    //arr[high].style.background = "green"
}