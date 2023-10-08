function calc(){
    let num1 = parseInt(prompt("Введите 1-ое число: "));
    let num2 = parseInt(prompt("Введите 2-ое число меньше первого: "));
    let znak = prompt("vvedite odno iz znakov + - * /: ");

    
    switch(znak){
        case `+` :
            alert(`${num1} + ${num2} = ${num1 + num2}`);
            alert("eto bilo slojenie");
            break;
        case `-` :
            alert(`${num1} - ${num2} = ${num1 - num2}`);
            alert("eto bilo vichetanie");
            break;
        case `*` :
            alert(`${num1} * ${num2} = ${num1 * num2}`);
            alert("eto bilo proizvedenie");
            break;
        case `/` :
            alert(`${num1} / ${num2} = ${num1 / num2}`);
            alert("eto bilo delenie");
            break;
        default:
            alert("tak ne poluchitsya :(");
            break;
    }
}