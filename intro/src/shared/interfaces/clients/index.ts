export interface ClientProps {
  id: number;
  name: string;
}

export interface UserDTO {
  name: string;
  salary: number;
  companyValuation: number;
}

export interface RawClientProps extends UserDTO {
  id: number;
}

export interface UpdateUserDTO {
  name: string;
  salary: number;
  companyValuation: number;
}
