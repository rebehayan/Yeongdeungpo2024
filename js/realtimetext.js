// 생각을 정리 = 알고리즘
// 1. 선택자를 정의해야 함
const input = document.querySelector(".input");
const content = document.querySelector(".preview__content");

// 2. 작성(event)하는것을 감지해야 함
input.addEventListener("input", (event) => {
  // 3. 작성된 텍스트를 저장
  const text = event.target.value;
  //   console.log(text);

  // 4. 저장된 텍스트를 원하는 공간에 넣기
  content.innerText = text;
});
