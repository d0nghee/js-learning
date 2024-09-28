var numberArr = [1, 2, 3, 4, 5];
var val = [];



/*
    콜백함수는 Parameter로 함수를 전달 받아, 함수의 내부에서 실행하는 함수임

    콜백함수는 forEach 함수의 경우는 익명의 함수를 넣어 forEach 문을 동작하게 한다.
*/
numberArr.forEach((x, index) => {
    val[index] = x * 2;
    console.log(index)
})

//////////////////////

/*
    Javascript는 null과 undefined 타입을 제외하고 모든 것을 객체로 다룬다.
    함수를 변수나 다른 함수의 변수처럼 사용할 수 있다. 함수를 콜백함수로 사용할 경우, 함수의 이름만
    넘겨주면 된다.
    함수를 인자로 사용할 때 callback, finFunc처럼 ()를 붙일 필요 없음.
*/

function yourName(name, callback) {
    console.log('이름///', name);
    callback();
}

function finFunc() {
    console.log("FIN///////");
}

///////////////////////////////////////

var fruit = 'cat'; // 전역 변수

function callbackFunc(callback) {
    var vegetable = 'tomato'; // 지역 변수
    callback(vegetable); 
}

function eat(vegetable) {
    console.log(`과일 : ${fruit} ///// 채소 : ${vegetable} `)
}

callbackFunc(eat);


console.log("hi")


document.addEventListener('DOMContentLoaded', function () {
    var valDiv = document.querySelector('.val')

    valDiv.innerHTML = val.join(', ');

    
})
