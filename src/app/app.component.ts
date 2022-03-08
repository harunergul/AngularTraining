import { Component, OnInit } from '@angular/core';
import { PatientDTO } from './models/patient-dto';
import { PatientService } from './services/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'MyApp';

  patients: PatientDTO[];

  constructor(private patientService: PatientService) {
    console.log(this.patientService);
  }

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe({
      next: (response: PatientDTO[]) => {
        this.patients = response;
      },
    });
  }
}
