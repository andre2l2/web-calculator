function claculator(arr) {
    const commands = new Array();
    const values = new Array();
    let val = '';

    for (id in arr) {

        if (arr[id] == '+') {
            values.push(Number(val));
            commands.push('+');
            val = '';
        }
        else if (arr[id] == '-') {
            values.push(Number(val));
            commands.push('-');
            val = '';
        }
        else if (arr[id] == '/') {
            values.push(Number(val));
            commands.push('/');
            val = '';
        }
        else if (arr[id] == '*') {
            values.push(Number(val));
            commands.push('*');
            val = '';
        }
        else {
            val += `${arr[id]}`;
        }
    }
    values.push(Number(val));
    console.log(commands);
    console.log(values);

    let result = 0;

    for (id in commands) {
        if (commands[id] == '+') {
            result = values[0] + values[1];
        }
        else if (commands[id] == '-') {
            result = values[0] - values[1];
        }
        else if (commands[id] == '*') {
            result = values[0] * values[1];
        }
        else if (commands[id] == '/') {
            result = values[0] / values[1];
        }
    }

    console.log(result);

    return result;
   
}