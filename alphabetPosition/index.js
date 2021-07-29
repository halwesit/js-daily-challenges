function alphabetPosition(text) {
    txtArr = [...text]
    alphabet = {'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26}
    alphabetArr = []
    txtArr.forEach(char => {
        Object.keys(alphabet).forEach(function(key) {
            if (key === char.toLowerCase()) {
              alphabetArr.push(alphabet[char.toLowerCase()])
            }
          });
    });
    return alphabetArr.join(' ');
  }
 
  
console.log(alphabetPosition("The narwhal bacons at midnight."))
//  "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")
