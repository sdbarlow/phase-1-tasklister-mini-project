document.addEventListener("DOMContentLoaded", () => {
  const frm = document.getElementById('create-task-form');
  const inpt = document.getElementById("new-task-description");
  frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    document.getElementById('tasks').appendChild(li);
    li.textContent = inpt.value;
  })
});

