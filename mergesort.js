const split = (wholeArray) => {
  if (wholeArray.length < 2){
    return wholeArray
  }
  const middleElIdx = Math.floor(wholeArray.length/2)
  const firstHalf = wholeArray.slice(0, middleElIdx)
  const secondHalf = wholeArray.slice(middleElIdx)
  return [firstHalf, secondHalf];
}

const merge = (arr1, arr2) => {
  const resultArray = []
  let lowArray = arr1.length < arr2.length ? arr1 : arr2
  let highArray = arr1.length > arr2.length ? arr1 : arr2
  while (highArray.length > 0) {
    if (lowArray[0] < highArray[0]){
      resultArray.push(lowArray[0])
      lowArray = lowArray.slice(1)
    } else {
      resultArray.push(highArray[0])
      highArray = highArray.slice(1)
    }
  }
  if (lowArray.length > 0){
    return [...resultArray, ...lowArray]
  }
  return resultArray
}

function mergeSort(array) {
  debugger;
  if (array.length > 1){
    return mergeSort(split(array))
  }
}