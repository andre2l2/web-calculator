function stringToNumber(num) {

    const calcArray = new Array();
    let val = '';

    for (id in num) {
        if (num[id] == '+') {
            calcArray.push(Number(val));
            calcArray.push('+');
            val = '';
        }

        else if (num[id] == '-') {
            calcArray.push(Number(val));
            calcArray.push('-');
            val = '';
        }

        else if (num[id] == '*') {
            calcArray.push(Number(val));
            calcArray.push('*');
            val = '';
        }

        else if (num[id] == '/') {
            calcArray.push(Number(val));
            calcArray.push('/');
            val = '';
        }

        else {
            val += `${num[id]}`;
        }
    }
    calcArray.push(Number(val));
    console.log(calcArray);
    return calcArray;
}

function calculator(arr) {
    let result;


}

calculator([100, '+', 200]);