import { StudentsService } from './Services/students.service.js'
import { SubjectsService } from './Services/subjects.service.js'
import { EditStudentView } from './Views/editStudent.view.js'
import { EditStudentController } from './Controllers/editStudent.controller.js'

const studentsService = new StudentsService()

const paramsString = window.location.search
const URLParams = new URLSearchParams(paramsString)
const id = parseInt(URLParams.get('id'))
const student = studentsService.searchById(id)
document.getElementById('first_name').value = student.name

const editStudentView = new EditStudentView(document.querySelector("[data-edit-student-form]"), new SubjectsService().subjects)
const editStudentController = new EditStudentController(student, editStudentView, studentsService)

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault()
    const name = document.querySelector("#first_name").value
    editStudentController.edit(student, name)

    window.location.assign("index.html")
})