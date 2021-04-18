import { StudentModel } from '../Models/aluno.model.js'

export class StudentsController {
    constructor(service, view) {
        this.service = service
        this.view = view
        view.renderStudents(service.students)
    }

    add(name) {
        this.service.add(new StudentModel(name))
        this.view.renderStudents(this.service.students)
    }

    search(name) {
        const data = this.service.search(name)
        this.view.renderStudents(data)
    }
}