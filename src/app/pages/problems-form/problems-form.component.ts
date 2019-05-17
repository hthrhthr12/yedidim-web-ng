import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSelectionList} from '@angular/material';
import {Router} from '@angular/router';
import {StoreService} from '../../services/store/store.service';

@Component({
  selector: 'app-problems-form',
  templateUrl: './problems-form.component.html',
  styleUrls: ['./problems-form.component.scss']
})
export class ProblemsFormComponent implements OnInit {

  @ViewChild('problemsListInput') problemsListInput: MatSelectionList;
  public otherProblem: string;

  constructor(private router: Router,
              private store: StoreService) {
  }

  public problems = [
    'הרכב לא מניע',
    'יש לי פנצ\'ר ',
    'ננעל הרכב עם המפתחות בפנים',
    'נתקעתי בלי דלק',
    'נתקעתי בלי שמן',
    'התחפרתי בשטח',
    'נטרקה לי הדלת של הבית'
  ];

  ngOnInit() {
  }

  setOtherProblem(event: any) {
    this.otherProblem = event.target.value;
  }

  continue = () => {
    const selectedProblems = [];
    this.problemsListInput.selectedOptions.selected.forEach(problem => selectedProblems.push(problem.getLabel()));
    if (this.otherProblem) {
      selectedProblems.push(this.otherProblem);
    }
    if (selectedProblems.length === 0) {
      return;
    }

    this.store.setPartial({problems: selectedProblems});
    this.router.navigateByUrl('/appealler-details-form');
  };
}
