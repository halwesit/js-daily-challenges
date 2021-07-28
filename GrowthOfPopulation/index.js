function nbYear(p0, percent, aug, p) {
    let inhabitants = p0
    let iterator = 0
    while (inhabitants < p) {
        inhabitants = inhabitants + (inhabitants * (percent/100)) + aug
        iterator++
    }
    return iterator
}

// Examples:
console.log(nbYear(1500, 5, 100, 5000)) 
// -> 15

console.log(nbYear(1500000, 2.5, 10000, 2000000))
// -> 10