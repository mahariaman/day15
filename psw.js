function psw(str) {
    let num = '1234567890'
    let abcB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let abcK = 'abcdefghijklmnopqrstuvwxyz'
    let countB=0
    let countK =0
    let countN =0
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < abcB.length; j++) {
            if (str[i] === abcB[j]) {
                countB++
                if(countB > 1){
                    countB -=1
                    break
                }
            }
            else if (str[i] === abcK[j]) {
                countK++
                if(countK > 1){
                    countK -=1
                    break
                }
            }
        }
        for (k = 0; k < num.length; k++) {
            if (str[i] === num[k]) {
                countN++
                if(countN > 1){
                    countN -=1
                    break
                }
            }
        }
    }
    let sum = countB+countK+countN
    return sum===3? "STRONG!": sum ===2 ? 'MEDIUM': sum ===1 ? 'WEAK!':'gak ada otak password mu'
}
console.log(psw('Mah1'))
console.log(psw('maha1'))
console.log(psw('Maha'))
console.log(psw('maha'))
console.log(psw('111111'))
console.log(psw('AAAAA'))
console.log(psw(''))

