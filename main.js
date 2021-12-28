const todo = document.getElementById('todo')
function add() {
    let  newText = document.getElementById('new_text')

    let newTodo = "<li class='list'><span onclick='toggle(this)'>" + newText.value + "</span>" +
                  "<span onclick='remove(this)'><button class='btn btn-danger' style='margin: 10px'><i class='bi bi-trash'></i></button></span>" +
                  "</li>"
    todo.insertAdjacentHTML('afterbegin',newTodo)
    newText.value = ""
}

function toggle(el) {
    el.classList.toggle('done')
}

function remove(el) {
    confirm('Apakah yakin ingin menghapus ?')
    el.parentElement.remove()
}