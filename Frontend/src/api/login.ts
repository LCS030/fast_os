import api from './api';

export async function login(email: string, password: string) {
  
  const params = new URLSearchParams();
  params.append('username', email);
  params.append('password', password);

  const response = await api.post(
    '/auth/login',
    params,      
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return response;
}