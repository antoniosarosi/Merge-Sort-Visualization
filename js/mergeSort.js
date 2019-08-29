function merge(arr1, arr2) {
    let arr3 = [];
    let i1 = 0, i2 = 0;
    while (i1 < arr1.length && i2 < arr2.length) {
        if (arr1[i1] < arr2[i2])
            arr3.push(arr1[i1++]);
        else 
            arr3.push(arr2[i2++]);
        console.log(arr3);
    }
    while (i1 < arr1.length) 
        arr3.push(arr1[i1++]);
    while (i2 < arr2.length) 
        arr3.push(arr2[i2++]);

        console.log(arr3);
    return arr3;
}

function sort(arr) {
    if (arr.length > 1) {
        let middle = Math.floor(arr.length / 2);
        let half1 = arr.slice(0, middle);
        let half2 = arr.slice(middle, arr.length);

        sort(half1);
        sort(half2);

        let merged = merge(half1, half2);
        for (let i = 0; i < arr.length; i++)
            arr[i] = merged[i];
    }
}


