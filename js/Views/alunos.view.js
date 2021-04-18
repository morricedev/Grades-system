export class AlunosView {
    constructor(table, materias) {
        this.tableList = table
        this.tableHeader = this.tableList.querySelector('thead')
        this.tableBody = this.tableList.querySelector('tbody')
        this.materias = materias

        this.renderHeader()
    }

    renderHeader() {
        const trHeader = document.createElement('tr')
        trHeader.innerHTML = "<td>Nome</td>"

        let trHeaderMaterias = this.materias.map(materia => {
            return "<td>" + materia[0].toUpperCase() + materia.substr(1) + "</td>"
        }).join("")

        trHeader.innerHTML += trHeaderMaterias

        this.tableHeader.appendChild(trHeader)
    }

    renderAlunos(alunos) {
        this.tableBody.innerHTML = ''
        alunos.forEach(aluno => {
            const trBody = document.createElement('tr')
            let tdBody = `<td><a href="edit.html?id=${aluno._id}">${aluno.nome}</a></td>`

            let encontrado = false

            this.materias.forEach(materia => {
                if(materia in aluno.notas){
                    encontrado = true
                }
            })

            if(encontrado){
                this.materias.forEach(materia => {
                    tdBody += `<td> ${aluno.media[materia] !== undefined ?
                            aluno.media[materia] :
                            `<a href="edit.html?id=${aluno._id}">Incluir nota</a>`}
                               </td>`
                })
            }else{
                tdBody += `<td colspan="${this.materias.length}">
                <a href="edit.html?id=${aluno._id}">Incluir notas</a>
                </td>`
            }


            trBody.innerHTML = tdBody
            this.tableBody.appendChild(trBody)
        })
    }
}