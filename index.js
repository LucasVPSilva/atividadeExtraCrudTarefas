const users = [
    {
        username: 'Diener',
        password: "123",
        tasks: []
    }
];

console.log(users);


// Criar uma funçao createTask:

function createTask(title, description, user) {
    if (title === "" || title === undefined) {
        console.log("O título é obrigatório");
        return;
    }
    user.tasks.push({ title: title, description, completed: false });
}

createTask('Ola', 'Teste', 'Diener')



// Criar uma função listTasks:

function listTasks() {
    tasks.forEach((task, index) => {
        console.log(`Indice: ${index} | Título: ${task.title} | Description: ${task.description} | Status: ${task.completed ? 'Concluida' : 'Não Concluída'}`)
    });
}



// Atualizar o status das tarefas:

function updateTaskStatus(index, completed) {
    if (index === undefined || index >= tasks.length || isNaN(index)) {
        console.log(`Indice da tarefa não localizado!`)
        return
    }
    tasks[index].completed = completed
    console.log(`Status atualizado!`)

}



// Atualizar titulo e descrição da tarefa:

function updateTask(index, newTitle, newDescription) {
    if (index === undefined || index >= tasks.length || isNaN(index)) {
        console.log(`Indice da tarefa não localizado!`)
        return
    }
    if (!newTitle) {
        console.log(`O novo título da tarefa deve ser informado!`)
    } else {
        tasks[index].title = newTitle;
        if (newDescription) {
            tasks[findTask].description = newDescription;
        }
        console.log(`Tarefa atualizada com sucesso!`)



    }
}



// Função para deletar as tarefas:

function deleteTask(index) {
    if (checkInfIndex(index)) {
        console.log(`Indice da tarefa não localizado!`)
        return
    }

    tasks.splice(index, 1)
    console.log(`Tarefa excluida com sucesso!`)


}

function checkInfIndex(index) {
    return index === undefined || index >= tasks.length || isNaN(index)

}



/*


listTasks();
updateTask(0, "Limpar o chão", "Limpar o chão da cozinha");
createTask(`Limpar`, `Limpar a casa`);
deleteTask(0)
createTask(`Limpar`, `Limpar a casa 2`);
listTasks();

*/


// Desafio Extra:

// Criar funçao para armazenar usuario:


function createUser(username, password) {
    if (!username || !password) {
        console.log("Gentileza informar o nome do usuário")
    }
    users.push({ username, password, tasks: [] })
}



/*

function createUser(username, password) {
    if (!username) {
        console.log('Por gentileza, informe o nome do usuário!');
    } else if (!password) {
        console.log('Por gentileza, informe o nome a senha!');
    } else {
        const user = {
            username,
            password,
            tasks: [],
        }
        users.push(user);
        console.log(`Usuário ${user.username} criado com sucesso!`);
    }
}



function login(username, password) {
    if (!username || !password) {
        console.log('Por gentileza, informe o nome do usuário e a senha!');
    } else {
        const findUser = users.find(user => user.username === username);

        if (findUser && findUser.password === password) {
            console.log(`Seja bem vindo ${username}`)
        } else {
            console.log('Usuário ou senha incorreta!');
        }
    }
}

*/


/*

else {
        const findTask = tasks.findIndex((task, index) => task.index === index);
        if (findTask === -1) {
            console.log(`Tarefa não localizada! Por gentileza verificar o índice informado.`)
        } else if (!completed) {
            console.log(`O status da tarefa deve ser informado! Informe "Sim" se tiver concluido!`)

        } else if (completed === "sim" || completed === "Sim" || completed === "SIM") {
            tasks[findTask].completed = true
            console.log(`Tarefa atualizada com sucesso!`)

        }
    }
*/

