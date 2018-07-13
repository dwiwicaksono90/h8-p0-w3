function groupAnimals(animals) {
  var animalsSort = animals.sort()
  var temp = []
  var hasil = []

  for (var i = 0; i < animalsSort.length; i++){
    if (i !== animalsSort.length-1 && animalsSort[i][0] === animalsSort[i+1][0]){
      temp.push(animalsSort[i])
    } else{
      temp.push(animalsSort[i])
      hasil.push(temp)
      temp = []
    }
  }
return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
