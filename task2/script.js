// 1️⃣ Получаем элементы из DOM
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// 2️⃣ Функция для добавления новой задачи
function addTodo() {
    const text = input.value.trim(); // убираем лишние пробелы

    if (text === "") return; // не добавляем пустую задачу

    // Создаем элементы DOM
    const li = document.createElement("li");       // новая задача
    const checkbox = document.createElement("input"); // чекбокс
    checkbox.type = "checkbox";

    const span = document.createElement("span");   // текст задачи
    span.textContent = text;

    const delBtn = document.createElement("button"); // кнопка удаления
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";

    // Добавляем элементы в li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    // Добавляем li в ul
    list.appendChild(li);

    // Очищаем input
    input.value = "";

    // 3️⃣ Обработчик изменения состояния чекбокса
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            span.classList.add("done"); // применяем стиль выполнено
        } else {
            span.classList.remove("done");
        }
    });

    // 4️⃣ Обработчик удаления задачи
    delBtn.addEventListener("click", () => {
        list.removeChild(li); // удаляем конкретный li из списка
    });
}

// 5️⃣ Событие на кнопку добавления
addBtn.addEventListener("click", addTodo);

// 6️⃣ Также добавим возможность добавлять задачей при Enter
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});
