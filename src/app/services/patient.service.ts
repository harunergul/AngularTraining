import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientDTO } from '../models/patient-dto';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  age = 451;

  constructor(private httpClient: HttpClient) {
    console.log(httpClient);
  }

  getAllPatients(): Observable<PatientDTO[]> {
    return this.httpClient.get<PatientDTO[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
