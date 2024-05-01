// 기명함수
function name() {
  console.log("함수 실행");
}
//name();

// 익명함수
const getName = function (name) {
  console.log(`제 이름은 ${name}입니다.`);
};

//getName("하성필");
//getName("에론");
//getName("영등포");

// 반환, 매개변수
function sum(num1, num2) {
  return num1 + num2;
}
// NaN : Not a Number
const a = sum(2, "3");
const b = sum(10, 20);
//console.log(a);
//console.log(b);

// 함수 호이스팅

const sayHi = function () {
  console.log("안녕하세요?");
};

//sayHi();
// 화살표 함수
// const sum = (매개변수) => {
//     // 함수식
// };
const sumResult = (a, b) => {
  return a + b;
};

//console.log(sumResult(5, 6));

// 호출 스케줄링
const startButton = document.querySelector(".start");

startButton.addEventListener("click", () => {
  // setTimeout(()=>{
  //  실행식
  // }, 몇초뒤에 실행할지 1/1000초);
  //setTimeout(() => {
  //    console.log("확인해주세요.");
  //  }, 2000);
  //setInterval(() => {
  //    console.log("2초에 한번씩 실행");
  //  }, 2000);
});

const stopButton = document.querySelector(".stop");

const interval = setInterval(() => {
  console.log("반복 텍스트");
}, 2000);

stopButton.addEventListener("click", () => {
  clearInterval(interval);
});
