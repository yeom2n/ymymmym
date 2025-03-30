// app.js
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById('addButton');
  const todoInput = document.getElementById('todoInput');
  const todoList = document.getElementById('todoList');

  addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText === '') return; // 입력이 비어 있으면 무시

    // 리스트 아이템 생성
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    li.innerHTML = `
      ${todoText}
      <div>
        <button class="btn btn-success btn-sm me-2 check-btn">완료</button>
        <button class="btn btn-danger btn-sm remove-btn">삭제</button>
      </div>
    `;

    // 완료 버튼 기능
    const checkButton = li.querySelector('.check-btn');
    checkButton.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // 삭제 버튼 기능
    const removeButton = li.querySelector('.remove-btn');
    removeButton.addEventListener('click', () => {
      li.remove();
    });

    // 리스트에 아이템 추가
    todoList.appendChild(li);

    // 입력 필드 초기화
    todoInput.value = '';
  });
});
