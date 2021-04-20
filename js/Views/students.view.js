export class StudentsView {
    constructor(table, subjects) {
        this.tableList = table
        this.tableHeader = this.tableList.querySelector('thead')
        this.tableBody = this.tableList.querySelector('tbody')
        this.subjects = subjects

        this.renderHeader()
    }

    renderHeader() {
        const trHeader = document.createElement('tr')
        trHeader.innerHTML = "<td>Nome</td>"

        let trHeaderSubjects = this.subjects.map(subject => {
            return "<td>" + subject[0].toUpperCase() + subject.substr(1) + "</td>"
        }).join("")

        trHeader.innerHTML += trHeaderSubjects

        this.tableHeader.appendChild(trHeader)
    }

    renderStudents(students) {
        this.tableBody.innerHTML = ''
        students.forEach(({ _id, name, grades, average }) => {
            const trBody = document.createElement('tr')
            let tdBody = `<td><a href="edit.html?id=${_id}">${name}</a></td>`

            let found = false

            this.subjects.forEach(subject => {
                if (subject in grades) {
                    found = true
                }
            })

            if (found) {
                this.subjects.forEach(subject => {
                    tdBody += `<td> ${average[subject] !== undefined ?
                        average[subject].toFixed(2) :
                        `<a href="edit.html?id=${_id}">Incluir nota</a>`}
                               </td>`
                })
            } else {
                tdBody += `<td colspan="${this.subjects.length}">
                <a href="edit.html?id=${_id}">Incluir notas</a>
                </td>`
            }


            trBody.innerHTML = tdBody
            this.tableBody.appendChild(trBody)
        })
    }
}