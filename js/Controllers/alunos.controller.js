import { AlunoModel } from '../Models/aluno.model.js'

export class AlunosController {
    constructor(service, view) {
        this.service = service
        this.view = view
        view.renderAlunos(service.alunos)
    }

    add(nome) {
        this.service.add(new AlunoModel(nome))
        this.view.renderAlunos(this.service.alunos)
    }

    search(nome) {
        const data = this.service.search(nome)
        this.view.renderAlunos(data)
    }
}