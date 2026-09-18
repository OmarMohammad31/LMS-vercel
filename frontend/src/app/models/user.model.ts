export interface User {
  id: string;
  name: string;
  email: string;
  isInstructor: boolean;
  creditBalance: number;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
