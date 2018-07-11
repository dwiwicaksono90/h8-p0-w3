function pasanganTerbesar(num) {
  var numArr = [];

  var numString = String(num);
  for (var i = 0; i < numString.length -1 ; i++){
    numArr.push(numString[i] + '' + numString[i+1]);
  }
  var numTerbesar = Number(numArr[0]);
  for (var j = 1; j < numArr.length; j++){

    if (numTerbesar < Number(numArr[j])){
     numTerbesar = Number(numArr[j]);
    }
  }
  return numTerbesar;
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
