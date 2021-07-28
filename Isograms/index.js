function isIsogram(str){
    str = str.toLowerCase()
    duplicates =  [...str].filter((item, index) => [...str].indexOf(item) != index)
    return duplicates.length? false: true
}

console.log(isIsogram("Dermatoglyphics"))
//  -> true
console.log(isIsogram("aba"))
// -> false