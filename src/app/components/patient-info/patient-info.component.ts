import { Component, Input, OnInit } from '@angular/core';
import { PatientDTO } from 'src/app/models/patient-dto';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss'],
})
export class PatientInfoComponent implements OnInit {
  @Input() patient: PatientDTO;
  completedZikir = 0;

  constructor() {}
  ngOnInit(): void {}

  showDetail($event) {
    console.log(this.patient.name);
  }

  zikirCompleted(completedCount) {
    this.completedZikir = completedCount;
  }
}
