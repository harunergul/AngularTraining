import { PatientAddressDTO } from './patient-address-dto';
import { PatientCompanyDTO } from './patient-company-dto';

export interface PatientDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  address: PatientAddressDTO;
  phone: string;
  website: string;
  company: PatientCompanyDTO;
}
