import { StudentModel } from '../Models/student.model.js'

export class StudentsService {
    constructor() {
        this.students = []
        this.updateStudentsFromLocalStorage()
    }
    add(student) {
        if (!(student instanceof StudentModel)) {
            throw TypeError("Student must be an instance of StudentModel")
        }
        this.students.push(student)

        this.updateLocalStorage()
    }

    edit(student) {
        student.calculateAverage()
        this.updateLocalStorage()
    }

    searchById(id) {
        return this.students.find(student => student._id === id)
    }

    search(name) {
        return this.students.filter(student => student.name.indexOf(name) >= 0)
    }

    updateLocalStorage() {
        const students = JSON.stringify(this.students)
        localStorage.setItem('students', students)
    }

    updateStudentsFromLocalStorage() {
        const local = localStorage.getItem('students')
        if (local) {
            const students = JSON.parse(local)
            students.forEach(student => {
                this.add(new StudentModel(student))
            })
        }
    }
}