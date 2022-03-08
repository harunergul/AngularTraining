import { PatientGeoDTO } from './patient-geo-dto';

export interface PatientAddressDTO {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: PatientGeoDTO;
}
