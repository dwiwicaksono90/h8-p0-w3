function groupAnimals(animals) {
  var alfabet = 'abcdefghijklmnopqrstuvwxyz'
  var alfabetSplit = alfabet.split('')
  // console.log(alfabetSplit)
  var result =[]

  for (var i = 0; i < alfabet.length; i++){
    var temp = []
    for (var j = 0; j < animals.length; j++){
      if (alfabetSplit[i] === animals[j][0])
      temp.push(animals[j])
    }
    if (temp.length !== 0){
      result.push(temp)
    }
  }
  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
