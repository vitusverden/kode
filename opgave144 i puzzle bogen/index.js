for (let x = 0; x < 100; x++) {
    successfuldivisors = 0        
    for (let i = 1; i < (x / 2); i++) {
        if ((x % i) == 0) {
            successfuldivisors++
        }
    }
    if (successfuldivisors < 2) {
        var temp = String(successfuldivisors).split("")
        for (let i = 0; i < temp.length; i++) {
            const element = temp[i];
            
        }
    }
}