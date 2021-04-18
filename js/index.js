import {AlunosController} from './Controllers/alunos.controller.js'
import {AlunosService} from './Services/alunos.service.js'
import {AlunosView} from './Views/alunos.view.js'
import {MateriasService} from './Services/materias.service.js'

const alunosService = new AlunosService()

const alunosView = new AlunosView(document.querySelector('[data-table-alunos]'), new MateriasService().materias)

const alunosController = new AlunosController(alunosService, alunosView)


const form = document.querySelector('.form-add')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const nome = document.getElementById('first_name').value

  alunosController.add({ nome })
})

document.querySelector("#search_name").addEventListener("input", function () {
  let nome = this.value.toLowerCase()

  sessionStorage.setItem('search_name', nome)

  if (nome) {
    nome = nome[0].toUpperCase() + nome.substring(1)
  }

  if (nome.length > 2 || nome.length === 0) {
    alunosController.search(nome)
  }
})

const inputEvent = new Event("input")
// const inputEvent_IE = document.createEvent("Event") OBSOLETO
// inputEvent_IE.initEvent("input", true, true) OBSOLETO

if (sessionStorage.getItem('search_name')) {
  document.querySelector("#search_name").value = sessionStorage.getItem('search_name')
  document.querySelector("#search_name").dispatchEvent(inputEvent)
  // document.querySelector("#search_name").dispatchEvent(inputEvent_IE) OBSOLETO

}