var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles" ];
function addElementToBeginningOfArray(array, element){
  newArray = [...array];
  newArray.unshift(element);
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
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
