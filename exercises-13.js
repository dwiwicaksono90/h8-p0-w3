function targetTerdekat(arr) {
  var posisio = [];
  var posisix = [];
  var hasil = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === 'o'){
      posisio.push(i)
    } else if (arr[i] === 'x'){
      posisix.push(i)
    }
  }
if (posisio.length === 0|| posisix.length === 0){
  return hasil = 0;
}
 hasil = posisix[0] - posisio[0];
 hasil = Math.abs(hasil);
for (var j = 1; j < posisix.length; j++){
  if (hasil > posisix[j] - posisio[0]){
    hasil = posisix[j] - posisio[0];
    hasil = Math.abs(hasil);
  }
}
return hasil;
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
