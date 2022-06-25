const input = document.getElementById('input'),
    button = document.getElementById('button'),
    listDiv = document.querySelector('.list'),
    list = [];

function todoHandler(id, action, value) {
    // id тудушки. действие. текст, для редактирования тудушки
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === +id) {
            switch (action) {
                case 'delete':
                    list.splice(i, 1);  break
                case 'change':
                    list[i].text = value; break
            }
        }
    }
    render(); // что бы обновить список тудушек
}

function todoButtonsHandler() {
    const btns = document.querySelectorAll('.todo-btn'); // что бы получить кнопки новых тудушек
    btns.forEach(btn => {
        // итерация для того что-бы отслеживать все кнопки с таким классом
        btn.onclick = () => {
            // проверяем класс кнопки, затем получаем id тудушки через родительский див
            if (btn.classList.contains('delete')) {
                todoHandler(btn.parentElement.getAttribute('id'), 'delete');
            } else if (btn.classList.contains('change')) {
                const value = prompt('введите текст');
                todoHandler(btn.parentElement.getAttribute('id'), 'change', value);
            }
        }
    })
}

function render() {
    listDiv.innerHTML = ''; // очищаем листДив что-бы не было повторений
    for (let i = 0; i < list.length; i++) {
        // вставляем обновленный список
        listDiv.insertAdjacentHTML('beforeend', `
            <div class="todoBlock">
                <p>${list[i].text}</p>
                <div id="${list[i].id}" class="action">
                    <button class="change todo-btn">change</button>
                    <button class="delete todo-btn">delete</button>
                </div>
            </div>
        `)
    }
    todoButtonsHandler(); // после каждого создания, обновляем отслеживание кнопок
}


button.onclick = () => {
    const obj = {
        id: list.length + 1,
        text: input.value
    }
    list.push(obj)
    render(); // что бы обновить список тудушек
}