export class EditStudentController {
    constructor(model, view, service) {
        this.model = model
        this.view = view
        this.service = service
        this.view.render(model)
    }

    edit(student, name) {
        student.name = name

        const grades = {}

        const subjectsRow = Array.from(document.querySelectorAll("[data-subject]"))

        subjectsRow.forEach(row => {
            const gradesRow = Array.from(row.querySelectorAll("[data-trimestre]"))
            grades[row.getAttribute("data-subject")] = gradesRow.map(grade => parseFloat(grade.value) || 0)
        })

        student.grades = grades

        this.service.edit(student)
    }
}