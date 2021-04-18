import { average } from '../calc.js'

export class StudentModel {
    constructor({ name, _id, grades } = { grades: {} }) {
        this.name = name
        this._id = (_id !== undefined) ? _id : this.generateId()
        this.grades = { ...grades }
        this.average = {}


        if (this._id > StudentModel.maxId) {
            StudentModel.maxId = this._id
        }

        this.calculateAverage()
    }

    generateId() {
        return StudentModel.maxId + 1
    }

    calculateAverage() {
        for (let materia in this.grades) {
            this.average[materia] = average(...this.grades[materia])
        }
    }
}

StudentModel.maxId = 0