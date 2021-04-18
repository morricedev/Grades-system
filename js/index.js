import { StudentsController } from './Controllers/studentscontroller.js'
import { StudentsService } from './Services/students.service.js'
import { StudentsView } from './Views/students.view.js'
import { SubjectsService } from './Services/subjects.service.js'

const studentsService = new StudentsService()

const studentsView = new StudentsView(document.querySelector('[data-table-alunos]'), new SubjectsService().subjects)

const studentsController = new StudentsController(studentsService, studentsView)


const form = document.querySelector('.form-add')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.getElementById('first_name').value

  studentsController.add({ name })
})

document.querySelector("#search_name").addEventListener("input", function () {
  let name = this.value.toLowerCase()

  sessionStorage.setItem('search_name', name)

  if (name) {
    name = name[0].toUpperCase() + name.substring(1)
  }

  if (name.length > 2 || name.length === 0) {
    studentsController.search(name)
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