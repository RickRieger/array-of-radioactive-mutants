/******************
 * YOUR CODE HERE *
 ******************/

function addMeToEnd(array){
  array.push('Colin')
}

function addMeToStart(array){
  array.unshift('Colin')
}

function changeLast(array, value){

array[array.length - 1] = value

}

function changeAllValuesTo(array, value){
for (i = 0; i<array.length; i++){
     array[i] = value
}
}

function oddOrEven(array){
  for (i=0;i<array.length;i++){
    if (array[i] % 2 === 0){
      array[i]='even'
    }
    else{
      array[i] ='odd'
    }
  }
}


function changeNextThreeToValue(num,array,givenValue){
  let num2 = num + 3
  for (let i=num;i< num2 ;i++){
    array[i] = givenValue
  }
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
