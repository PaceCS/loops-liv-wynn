// The input to sum35For is a number.
// The function outputs the sum of all multiples of 3 and 5 that are less than that number.

function sum35For(N) {
    sum = 0
    multiples = 0
    for (let counter = 1; counter <  N; counter += 1){

    if (counter % 3 == 0) {
        div3 = true;
    } else {
        div3 = false;
    }

    if (counter % 5 == 0) {
        div5 = true;
    } else {
        div5 = false;
    }

if (div3) {
    multiples = multiples + 1
    sum = sum + counter;
} else if (div5) {
    multiples = multiples + 1;
    sum = sum + counter;
}
}
console.log( 'There are ' + multiples + ' multiples of 3 and 5 that are less than ' + N+ '.')
/*There are 8 multiples of 3 and 5 that are less than 20.
Their sum is 78.*/
console.log('Their sum is ' + sum + '.')
}

//Try out your function here.
sum35For(6);
sum35For(20);
sum35For(1000);
























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
const out = [];
console.log = function log(d) {
    out.push(d);
};
const N = 30;
sum35For(N);
printme('\nTesting...');
printme(`\t did you print the proper number of multiples?\t ${out[0] == 'There are 13 multiples of 3 and 5 that are less than 30.'} `);
printme(`\t did you print the proper sum?\t ${out[1] == 'Their sum is 195.'} `);
