var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];
function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = [...array]
  newArray.unshift(element);
  return newArray;
}
function addElementToEndOfArray(array, element){
  newArray = [...array];
  newArray.push(element);
  return newArray;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
