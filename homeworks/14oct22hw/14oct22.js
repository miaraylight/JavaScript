let getDigitsSum = function(digits){
    let sum = 0;
    res = String(digits);

    for (let i = 0; i < res.length; i++) {
  
        sum = sum + Number(res[i]);
        
    }
    return sum;
}


console.log(getDigitsSum(146));