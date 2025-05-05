/*const list = document.getElementById('list');
const addBtn = document.getElementById('addBtn');

list.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')){
    const delLi = event.target.closest('li');
    delLi.remove();
  }
});

let count = 3;
addBtn.addEventListener('click', () => {
  const nextList = document.createElement('li');
  nextList.innerHTML = `항목 ${count} <button class="delete">삭제</button>`
  list.appendChild(nextList);
  count++;
});
*/

// 이름을 받아 출력하기
/*
const myForm = document.getElementById('myForm');
const nInput = document.getElementById('nameInput');
const result = document.getElementById('result');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nInput.value;
  result.textContent = `hi, ${name}`;
  name.textContent = '';
});
*/
// 맨 아래 이동
/*const btn = document.getElementById('scrollBtn');
const target = document.getElementById('target');

btn.addEventListener('click', () => {
  target.scrollIntoView({behavior:'smooth'});
});
*/

//  마우스 오버 시 색 변경
/*const box = document.getElementById('box');

box.addEventListener('mouseover', () => {
  box.style.backgroundColor = 'blue';
});

box.addEventListener('mouseleave', () => {
  box.style.backgroundColor = 'lightgray';
});
*/

//클릭한 곳에 원 추가하기
/*const stage = document.getElementById('stage');

stage.addEventListener('click', (event) => {
  const circle = document.createElement('div');
  circle.style.width = '10px';
  circle.style.height = '10px';
  circle.style.borderRadius = '50%';
  circle.style.backgroundColor = 'blue';
  circle.style.position = 'absolute';

  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';

  stage.appendChild(circle);


});
*/

//Enter 키로 메시지 출력
/*const input = document.getElementById('messageInput');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('result').textContent = "전송완료!";
  }
});
*/

//ESC 키로 "취소되었습니다" 출력
/*const input = document.getElementById('messageInput');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && input.value) {
    document.getElementById('result').textContent = "취소되었습니다."
  }
});
*/

//이메일 입력 후 제출하면 메시지 출력
/*const form = document.getElementById('emailForm');
const input = document.getElementById('emailInput');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = input.value.trim();
  if (email) {
    result.textContent = "이메일 전송완료";

  } else {
    result.textContent = '이메일을 입력해주세요';
  }
});
*/
