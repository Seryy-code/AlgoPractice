let array = [13, 65, 47, 53, 82, 4, 8, 21, 33, 55, 44, 11];

let array2 = [
  "ArrA",
  "oRRo",
  "RARA",
  "RARA",
  "Bob",
  "Bob",
  "ARRA",
  "QWE",
  "TOM",
  "KAMIL",
  "tab",
  11,
];
let array3 = [1, 5, 99, 68, 46, 23, 12, 55, 4, 3, 2, -50];

function MaxIndex(arr) {
  let iMax = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (iMax < arr[i]) {
      iMax = arr[i];
    }
  }
  console.log("max index in array - " + iMax);
}

function MinIndex(arr) {
  let iMin = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (iMin > arr[i]) {
      iMin = arr[i];
    }
  }
  console.log("min index in array - " + iMin);
}

function SumAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("sum indexs in array - " + sum);
}

function HowIndex(arr) {
  console.log("array length - " + arr.length);
}

function thisParams(arr) {
  var reverse_i = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j > -1; j--) {
      reverse_i += arr[i][j];
    }
    if (arr[i] == reverse_i) {
      console.log(arr[i] + " - " + true);
    } else {
      console.log(arr[i] + " - " + false);
    }
    reverse_i = "";
  }
}

function getCountChar(str) {
  let objSym = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (objSym[char]) {
      objSym[char]++;
    } else {
      objSym[char] = 1;
    }
  }
  console.log(objSym);
}

function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  console.log(revStr);
}

function getFactorial(n) {
  let num = 1;
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= num;

    num++;
  }
  console.log(res);
}

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  console.log(fibonacci(n - 1) + fibonacci(n - 2));
}

// function bubleSort(arr) {
//   console.log(arr);

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i - 1; arr[i] > arr[j]; ) {
//       console.log(
//         "arr[" + i + "]" + arr[i] + "<->" + "arr[" + j + "]" + arr[j]
//       );
//       [arr[i], arr[j]] = [arr[j], arr[i]];

//       i = 0;
//     }
//   }
//   console.log(arr);
// }

function bubleSortWithDebug(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(
          " swap \narr[" +
            j +
            "]" +
            arr[j] +
            "<->" +
            "arr[" +
            (j + 1) +
            "]" +
            arr[j + 1] +
            ""
        );
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        continue;
      } else if (arr[j] < arr[j + 1]) {
        console.log(
          " -skip- \narr[" +
            j +
            "]" +
            arr[j] +
            " < " +
            "arr[" +
            (j + 1) +
            "]" +
            arr[j + 1]
        );
      }
    }
    console.log(arr);
  }
  return arr;
}
function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        continue;
      }
    }
  }
  return arr;
}

function searchElement(arr, el) {
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (el == arr[i]) {
      console.log("index - " + i);
      return i;
    }
  }
  console.log(-1);
  return -1;
}

function primeNumber(num) {}

function selectionSortWithDebug(arr) {
  console.log(arr);
  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        console.log("set min :" + " arr[" + j + "] " + arr[j]);
        min = j;
        continue;
      } else {
        console.log(
          "arr[min] - " +
            "arr[" +
            min +
            "] " +
            arr[min] +
            "\n\nnow - " +
            "arr[" +
            j +
            "] " +
            arr[j]
        );
      }
    }

    [arr[i], arr[min]] = [arr[min], arr[i]];
    console.log(arr);
  }
  return arr;
}
function selectionSort(arr) {
  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
        continue;
      }
    }

    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

function mergeSortedArrays(arr, arr2) {
  let sortedArr = selectionSort(arr);
  let sortedArr2 = selectionSort(arr2);

  let res = [].concat(sortedArr, sortedArr2);
  console.log(res);

  res = bubleSort(res);
  console.log(res);
}
function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2 + 1; i++) {
    console.log(arr);

    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
}

function deleteDublicate(arr) {
  console.log(arr);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        console.log("delete - " + arr[i] + "/" + arr[j]);

        arr.splice(j, 1);
      }
    }
  }
  console.log(arr);
}

function findSecondMax(arr) {
  console.log(arr);
  let max = 0;
  let smax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[max] < arr[i]) {
      max = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[max]) {
      continue;
    } else if (arr[smax] < arr[i]) {
      smax = i;
    }
  }
  console.log(arr[smax]);
}

// MaxIndex(array);
// MinIndex(array);
// SumAll(array);
// HowIndex(array);
// thisParams(array2);
// getCountChar("HELLO EVRYNIA!!!");
// reverseString("Hello!");
// getFactorial(10);
// fibonacci(5);                  //списал
// bubleSortWithDebug(array);
// searchElement(array, 4);
// primeNumber(3);                //не сделано
// getHOD                         //не сделано
// getHOK                         //не сделано
// selectionSortWithDebug(array);
// mergeSortedArrays(array, array3);
// reverseArray(array2);
// deleteDublicate(array2);
// findSecondMax(array3);

// isBalancedBrackets()           //не сделано
