//PROBLEM: Pair of arrays with equal sum after removing exactly one element from each.

//Given K arrays of different size. The task is to check if there exist any two arrays which have the same sum of elements after removing exactly one element from each of them. (Any element can be removed, but exactly one has to be removed). Print the indices of the array and the index of the removed elements if such pairs exist. If there are multiple pairs, print any one of them. If no such pairs exist, print -1.


var arrays = [
    [1, 2],
    [0, 2, 3],
    [3, 4]
];


//For every array
for (var i = 0; i < arrays.length; i++) {
    //add all the elements
    var sum1 = arrays[i].reduce((a, b) => a + b, 0);
    arrays[i].forEach((element) => {
        //then, subtract each elements from the sum   
        var sub = sum1 - element;
        //For each element removed/subtracted, repeat the above logic for subequent arrays 
        for (var j = i + 1; j < arrays.length; j++) {
            var sum2 = arrays[j].reduce((a, b) => a + b, 0);
            arrays[j].forEach((jElement) => {
                sub2 = sum2 - jElement;
                //If match, print the indices and quit
                if (sub == sub2) {
                    console.log(
                        //"The indices of the pair of first matched arrays are " + i + " and " + j +
                        "The index of removed elements are " + arrays[i].indexOf(element) + " from array #" + i + " and " + arrays[j].indexOf(jElement) + " from array #" + j
                    );
                    process.exit(1);
                }
            });
        }
    });
}

//If no such pairs, print -1
console.log("-1");