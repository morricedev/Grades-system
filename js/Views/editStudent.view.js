export class EditStudentView {
  constructor(form, subjects) {
    // this.render()
    this.form = form
    this.container = form.querySelector("[data-edit-grades]")
    this.subjects = subjects
  }

  render(student) {
    const html = this.subjects.map(subject => `
        <div class="row" data-subject="${subject}">
        <div class="input-field col s4">
          <input id="subject_${subject}" type="text" class="validate" value="${subject[0].toUpperCase() + subject.substring(1)}"disabled/>
        </div>
        <div class="input-field col s2">
          <input data-trimestre="0" id="grade_${subject}_0" type="number" class="validate" value="${student.grades[subject]?.[0]}"/>
        </div>
        <div class="input-field col s2">
          <input data-trimestre="1" id="grade_${subject}_1" type="number" class="validate" value="${student.grades[subject]?.[1]}" />
        </div>
        <div class="input-field col s2">
          <input data-trimestre="2" id="grade_${subject}_2" type="number" class="validate" value="${student.grades[subject]?.[2]}" />
        </div>
        <div class="input-field col s2">
          <input data-trimestre="3" id="grade_${subject}_3" type="number" class="validate" value="${student.grades[subject]?.[3]}" />
        </div>
      </div>
        `).join("")
    this.container.innerHTML = html
  }
}