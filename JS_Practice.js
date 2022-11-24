class Clock{
    constructor(){
        const date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
    }


    printTime(){
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick(){
        setInterval(()=>
            {this.seconds += 1
            this.printTime()},1000);
    }
}

const clock = new Clock();
//clock._tick();

//addNumbers function

// const readline = require('readline');

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback){
    if(numsLeft > 0){
        reader.question("Give me a number:", function(answer){
            const num = parseInt(answer);
            sum += num;
            numsLeft--;
            console.log(sum)
            addNumbers(sum, numsLeft, completionCallback)
         })
    } else if (numsLeft === 0) {
        completionCallback(sum)
        reader.close();
    }
}
//addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(context){
    let that = this;
    return () =>{
        return that.apply(context);
    }
}

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
   reader.question(`Is ${el1} greater than ${el2}? `, function(answer){
        if (answer === 'yes' || answer === 'Yes' || answer === "y"){
            callback(true)
        } else if (answer === 'no' || answer === 'n'){
            callback(false);
        } else{
            console.log('please try again with a valid input')
        }
   })
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
}
//askIfGreaterThan(10,15, (bool) => {console.log(bool)})
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1){
   return outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i+1], (bool) => {
        if(bool === true){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            madeAnySwaps = true;
           return innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        }else{
            madeAnySwaps = false;
            return innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        }
    });
  }
}

function outerPlaceHolder(swaps) {
    console.log(`${swaps} outer bubble sort`);
}

// innerBubbleSortLoop([3, 1, 5], 0, false, outerPlaceHolder);


// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
     if(madeAnySwaps===true){
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else {
        sortCompletionCallback(arr)
    }
  }
  outerBubbleSortLoop(true);
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1, 10, 8], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
