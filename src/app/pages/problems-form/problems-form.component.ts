import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-problems-form',
  templateUrl: './problems-form.component.html',
  styleUrls: ['./problems-form.component.less']
})
export class ProblemsFormComponent implements OnInit {

  @Input("problemsListInput") problemsListInput;
  constructor() { }

  public problems = [
    "הרכב לא מניע",
    "יש לי פנצ'ר ",
    "ננעל הרכב עם המפתחות בפנים",
    "נתקעתי בלי דלק",
    "נתקעתי בלי שמן",
    "התחפרתי בשטח",
    "נטרקה לי הדלת של הבית"
  ];

  ngOnInit() {
    this.problemsListInput.selectedOptions.selected;
  }

}
