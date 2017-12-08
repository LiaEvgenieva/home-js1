// // Math.sqrt(x) Возвращает положительный квадратный корень числа.

// const a = Number(promt('Enter A'));
// const b = Number(promt('Enter B'));
// const c = Number(promt('Enter C'));

// const result = solveQuard(a, b, c);

// document.write(result)

// function solveQuard(a, b, c) {
//     const d = discr(a, b, c);
    
    
//     return 'x1 = ' + x1 + 'x2 = ' + x2;
// }

function discr(a, b, c) {
    return
}

 function Calculate()
 {
 var a = eval( document.forms.figure.a.value); //ввод переменных a,b,c с формы
 var b = eval( document.forms.figure.b.value);
 var c = eval( document.forms.figure.c.value);
 var d = b * b - 4 * a * c;
 document.forms.figure.dis.value = d;
 
 //метод .toFixed(n) округляет с точностью до n знаков
 
 if( d < 0) //вывод корней в зависимости от дискриминанта
 {
 var str = "";
 str += ((-b)/(2*a)).toFixed(4); 
 str += " + i * ";
 str += (Math.sqrt(-d)/(2*a)).toFixed(4);
 document.forms.figure.x1.value = str;
 
 str = "";
 str += ((-b)/(2*a)).toFixed(4);
 str += " - i * ";
 str += (Math.sqrt(-d)/(2*a)).toFixed(4);
 document.forms.figure.x2.value = str;
 }
 else
 {
 document.forms.figure.x1.value = (-b+Math.sqrt(d))/(2*a).toFixed(4);
 document.forms.figure.x2.value = (-b-Math.sqrt(d))/(2*a).toFixed(4);
 }
 }