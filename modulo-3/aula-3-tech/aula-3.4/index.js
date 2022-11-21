const express = require('express');
const {response} = require('express');
const {uuid} = require('uuidv4') // ID UNICO 

const app = express();
app.use(express.json())
const alunos = [];

app.get('/alunos', (request, response) => {
    return response.json(alunos)
})

app.post('/alunos', (request, response) => {
    const {nome, curso} = request.body;
    const aluno = {id: uuid(), nome, curso}
    alunos.push(aluno)
    return response.status(201).json(aluno)
});

//put atualiza
app.put('/alunos/:id',(request, response) => {
    const { id } = request.params
    const { nome, curso } = request.body
    const newAlunos = {id, nome, curso}
    const alunoindex = alunos.findIndex(aluno => aluno.id == id)
    alunos[alunoindex] = newAlunos;
    return response.json(newAlunos)
})

//delete apaga
app.delete('/alunos/:id',(request, response) => {
    const { id } = request.params
    const alunoindex = alunos.findIndex(aluno => aluno.id == id)
    alunos.splice(alunoindex, 1)
    return response.status(204).send()
})


// SERVIDOR

app.listen(8181, () => {
    console.log('O servidor foi iniciado...')
})
