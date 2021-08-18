// implemente aqui as funções de teste
// 1.Escreva duas funções de teste unitário chamadas testReverseString1 e
// testReverseString2. Em seguida, escreva uma função chamada
//  reverseString que inverte uma string.
function testReverseString1 () {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function testReverseString2 () {
    let result = reverseString("Happier than ever");
    let expected = "reve naht reippaH";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function reverseString (str) {
    return str.split("").reverse().join("");
}
 testReverseString1();
 testReverseString2();

// 2.Escreva duas funções de teste unitário chamadas testReverseSentence1 
// e testReverseSentence2. Em seguida, escreva uma função chamada 
// reverseSentence que inverte uma frase.Ex:   
// >"bob likes dogs" retorna "dogs likes bob".
function testReverseSentence1 () {
    let result = reverseSentence("bob likes dogs");
    let expected = "dogs likes bob";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function testReverseSentence2() {
    let result = reverseSentence("cats don't like dogs");
    let expected = "dogs like don't cats";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function reverseSentence (str) {
    return str.split(" ").reverse().join(" ");
}
 testReverseSentence1();
 testReverseSentence2();

//  3.Escreva duas funções de teste unitário chamadas testMinimumValue1 e 
//  testMinimumValue2. Em seguida, escreva uma função chamada minimumValue
//   que encontra o valor mínimo de um array.
function testMinimumValue1 () {
    let result = minimumValue( [2, 4, 6, 7, 9, 3] );
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function testMinimumValue2 () {
    let result = minimumValue( [-2, 4, -6, 7, -9, 3] );
    let expected = -9;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function minimumValue (arr) {
    let minimumValueOfArr = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < minimumValueOfArr) {
                minimumValueOfArr = arr[i];
            }
        }
    return minimumValueOfArr;
}
 testMinimumValue1();
 testMinimumValue2();

//  4.Escreva duas funções de teste unitário chamadas testMaximumValue1 e 
// testMaximumValue2. Em seguida, escreva uma função chamada maximumValue que
//  encontra o valor máximo de um array.
function testMaximumValue1 () {
    let result = maximumValue( [2, 4, 6, 7, 9, 3] );
    let expected = 9;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function testMaximumValue2 () {
    let result = maximumValue( [-2, 4, -6, 7, -9, 3] );
    let expected = 7;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function maximumValue (arr) {
    let maximumValueOfArr = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maximumValueOfArr) {
                maximumValueOfArr = arr[i];
            }
        }
    return maximumValueOfArr;
}
 testMaximumValue1();
 testMaximumValue2();

//  5.Escreva duas funções de teste unitário chamadas testCalculateRemainder1 e 
//  testCalculateRemainder2. Em seguida, escreva uma função chamada calculateRemainder
//   que calcula o resto de uma determinada divisão.

function testCalculateRemainder1 () {
    let result = calculateRemainder(12, 5);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function testCalculateRemainder2 () {
    let result = calculateRemainder(14, 5);
    let expected = 4;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function calculateRemainder (x, y) {
    return x % y;
}
 testCalculateRemainder1();
 testCalculateRemainder2();

// 6.Escreva duas funções de teste unitário chamadas testDistinctValues1 e 
// testDistinctValues2. Em seguida, escreva uma função chamada distinctValues que 
// retorna valores distintos de uma lista. Ex: >"1 3 5 3 7 3 1 1 5" retorna "1 3 5 7"
function testDistinctValues1 () {
    let result = distinctValues( [1, 3, 5, 3, 7, 3, 1, 1, 5] );
    let expected = "1, 3, 5, 7";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function testDistinctValues2 () {
    let result = distinctValues( [2, 5, 8, 3, 2, 7, 6, 8, 3] );
    let expected = "2, 5, 8, 3, 7, 6";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function distinctValues (arr) {
    let distinctValuesOfArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!distinctValuesOfArr.includes(arr[i])) {
                distinctValuesOfArr.push(arr[i]);
            }
        }
    return distinctValuesOfArr.join(", ");
}
 testDistinctValues1();
 testDistinctValues2();

// 7.Escreva duas funções de teste unitário chamadas testCountValues1 e testCountValues2.
//  Em seguida, escreva uma função chamada countValues que retorna os valores de 
// uma lista e suas ocorrências.Ex: >"1 3 5 3 7 3 1 1 5" retorna 
// "1(3) 3(3) 5(2) 7(1)" que é a quantidade de vezes que os números apareceram 
// na primeira lista.

function testCountValues1 () {
    let result = countValues("2, 5, 8, 3, 2, 7, 6, 8, 3");
    let expected = "2(2), 5(1), 8(2), 3(2), 7(1), 6(1)";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function testCountValues2 () {
    let result = countValues("2, 5, 3, 3, 2, 5, 6, 5, 3");
    let expected = "2(2), 5(3), 3(3), 6(1)";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

function countValues (str) {
 
}
 testCountValues1();
 testCountValues2();
// 8.Escreva duas funções de teste unitário chamadas testEvaluateExpression1 e 
// testEvaluateExpression2. Em seguida, escreva uma função chamada 
// evaluateExpression que receberá dois parâmetros:
// >Uma string: Com uma expressão a ser avaliada. Ex: `"a + b + c - d"`;
// >Um objeto: Com valores que substituira as incógnitas da expressão.
//  Ex: `{a: 1, b: 7, c: 3, d: 14}`. O resultado esperado da função 
// `evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14})` seria -3.