export class EditAlunoController {
    constructor(model, view, service) {
        this.model = model
        this.view = view
        this.service = service
        this.view.render(model)
    }

    edit(aluno, nome) {
        aluno.nome = nome

        const notas = {}

        const materiasRow = Array.from(document.querySelectorAll("[data-materia]"))

        materiasRow.forEach(row => {
            const notasRow = Array.from(row.querySelectorAll("[data-trimestre]"))
            notas[row.getAttribute("data-materia")] = notasRow.map(nota => parseFloat(nota.value) || 0)
        })

        aluno.notas = notas

        this.service.edit(aluno)
    }
}