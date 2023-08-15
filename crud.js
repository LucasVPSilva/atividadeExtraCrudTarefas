const tasks = [
    { title: 'Correr', description: 'Correr na academia', completed: false },
    { title: 'Nadar', description: 'Nadar na academia', completed: false },

];


// Menu:

let continuar = true;
let checkIndex;
do {
    const menu = parseInt(prompt(`Digite uma opção:
    1 - Cadastrar tarefa
    2 - Listar tarefas
    3 - Atualizar status tarefa
    4 - Atualizar tarefa 
    5 - Excluir tarefa
    6 - Sair do programa`))

    switch (menu) {
        case 1:
            createTask(prompt('Digite o nome da tarefa:'), prompt('Digite a descrição da tarefa:'))
            break;

        case 2:
            listTasks();
            break;

        case 3:
            checkIndex = parseInt(prompt('Informe o índice da tarefa:'));
            if (!tasks[checkIndex]) {
                alert('Indice não encontrado!')
            } else {
                updateTaskStatus(checkIndex,
                    confirm('Você concluiu a tarefa?')
                )
            };
            break;

        case 4:
            checkIndex = parseInt(prompt('Informe o índice da tarefa:'));
            if (!tasks[checkIndex]) {
                alert('Indice não encontrado!')
            } else {
                updateTask(checkIndex, prompt('Informe o novo nome da tarefa:'),
                    prompt('Informe a nova descrição da tarefa:'));

            };
            break;

        case 5:
            checkIndex = parseInt(prompt('Informe o índice da tarefa:'));
            if (!tasks[checkIndex]) {
                alert('Indice não encontrado!')
            } else {
                deleteTask(checkIndex);
            }
            break;
        case 6:
            continuar = false;
            break;
        default:
            break;
    }



} while (continuar)




// Funções da Tasks

function createTask(title, description) {
    if (!title) {
        alert('Gentileza informar o nome da tarefa!')
        return;
    }
    tasks.push({ title, description, completed: false })
    alert('Tarefa incluida com sucesso!')
}

function listTasks() {
    if (tasks.length <= 0) {
        alert('Não existe nenhuma tarefa cadastrada!')
        return;
    }
    tasks.forEach((task, index) => {
        alert(`Índice: ${index} | Título: ${task.title} | Descrição: ${task.description} | 
        Status: ${task.completed ? 'Concluída' : 'Não concluída'}`);
    })
}


function updateTaskStatus(index, completed) {
    if (!tasks[index]) {
        alert('Indice não encontrado!')
        return
    }
    if (completed) {
        tasks[index].completed = completed;
        alert(`Status atualizado com sucesso!`)
    }

}

function updateTask(index, newTitle, newDescription) {
    if (!newTitle) {
        alert('Novo título da tarefa deve ser informado!')
        return
    }
    tasks[index].title = newTitle
    alert(`Titulo atualizado com sucesso!`)
    if (newDescription) {
        tasks[index].description = newDescription
        alert(`Descrição atualizada com sucesso!`)
        return;
    }
}

function deleteTask(index) {
    tasks.splice(index, 1)
    alert(`Tarefa deletada com sucesso!`)
}