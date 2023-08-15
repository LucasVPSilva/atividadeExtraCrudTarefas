
const users = [];

let continuar = true;

//--------------------------- Menu de login para o usuário:


do {
    const menuUser = parseInt(prompt(`Digite uma opção:
    1 - Criar usuário
    2 - Logar na conta
    3 - Sair do programa`));

    switch (menuUser) {
        case 1:
            createUser(prompt('Informe o nome do usuário'), prompt('Crie uma senha:'));
            break;

        case 2:
            const user = login(
                prompt('Informe o nome do usuário'),
                prompt('Digite sua senha:'));

            if (user) {
                managerTasks(user)
            }
            break;
        case 3:
            continuar = false;
            break;
    }


} while (continuar)


// --------------------------- Funções do usuário:

function createUser(username, password) {
    if (!username || !password) {
        alert('Usuário e a senha devem ser informados!')
        return
    }
    users.push({ username, password, tasks: [] });
    alert('Usuário criado com sucesso!')

}

function login(username, password) {
    const user = users.find(user => user.username === username)
    if (!user) {
        alert('Usuário não localizado!')
        return
    }
    if (user.password !== password) {
        alert('Senha incorreta!')
        return
    }

    alert(`Seja bem-vindo(a) ${user.username}`)
    return user

}


// --------------------------- Menu após usuario logar:




function managerTasks(user) {

    do {
        const menu = parseInt(prompt(`Digite uma opção:
    1 - Cadastrar tarefa
    2 - Listar tarefas
    3 - Atualizar status tarefa
    4 - Atualizar tarefa 
    5 - Excluir tarefa
    6 - Sair do programa`));

        switch (menu) {
            case 1:
                createTask(prompt('Digite o nome da tarefa:'), prompt('Digite a descrição da tarefa:'), user);
                break;

            case 2:
                listTasks(user);
                break;

            case 3:
                updateTaskStatus(parseInt(prompt('Informe o índice da tarefa:')),
                    confirm('Você concluiu a tarefa?'), user);
                break;

            case 4:
                updateTask(parseInt(prompt('Informe o índice da tarefa:')),
                    prompt('Informe o novo nome da tarefa:'),
                    prompt('Informe a nova descrição da tarefa:'),
                    user);

                break;

            case 5:
                deleteTask(parseInt(prompt('Informe o índice da tarefa:')), user);

                break;

            case 6:

                continuar = false;
                break;
            default:
                break;
        }



    } while (continuar)

}



// Funções da Tasks

function createTask(title, description, user) {
    if (!title) {
        alert('Gentileza informar o nome da tarefa!')
        return;
    }
    user.tasks.push({ title, description, completed: false })
    alert('Tarefa incluida com sucesso!')
}

function listTasks(user) {
    if (user.tasks.length <= 0) {
        alert('Não existe nenhuma tarefa cadastrada!')
        return;
    }
    user.tasks.forEach((task, index) => {
        alert(`Índice: ${index} | Título: ${task.title} | Descrição: ${task.description} | 
        Status: ${task.completed ? 'Concluída' : 'Não concluída'}`);
    })
}


function updateTaskStatus(index, completed, user) {
    if (!user.tasks[index]) {
        alert('Indice não encontrado!')
        return
    }
    if (completed) {
        user.tasks[index].completed = completed;
        alert(`Status atualizado com sucesso!`)
        return
    }

}

function updateTask(index, newTitle, newDescription, user) {
    if (!user.tasks[index]) {
        alert('Indice não encontrado!')
        return
    }
    if (!newTitle) {
        alert('Novo título da tarefa deve ser informado!')
        return
    }
    user.tasks[index].title = newTitle
    alert(`Titulo atualizado com sucesso!`)
    if (newDescription) {
        user.tasks[index].description = newDescription
        alert(`Descrição atualizada com sucesso!`)
        return;
    }
}

function deleteTask(index, user) {
    if (!user.tasks[index]) {
        alert('Indice não encontrado!')
        return
    }
    user.tasks.splice(index, 1)
    alert(`Tarefa deletada com sucesso!`)
}