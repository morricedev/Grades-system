import { AlunosService } from './Services/alunos.service.js'
import { MateriasService } from './Services/materias.service.js'
import { EditAlunoView } from './Views/EditAluno.view.js'
import { EditAlunoController } from './Controllers/editAluno.controller.js'

const alunosService = new AlunosService()

const paramsString = window.location.search
const URLParams = new URLSearchParams(paramsString)
const id = parseInt(URLParams.get('id'))
const aluno = alunosService.searchById(id)
document.getElementById('first_name').value = aluno.nome

const editAlunoView = new EditAlunoView(document.querySelector("[data-edit-aluno-form]"), new MateriasService().materias)
const editAlunoController = new EditAlunoController(aluno, editAlunoView, alunosService)

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault()
    const nome = document.querySelector("#first_name").value
    editAlunoController.edit(aluno, nome)

    window.location.assign("index.html")
})