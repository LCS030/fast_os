import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1. Confirme se a BASE_URL está correta
const BASE_URL = 'http://10.0.2.2:8000/api';

const api = axios.create({
  baseURL: BASE_URL,
});

// 2. VERIFIQUE SE VOCÊ TEM ESTE INTERCEPTOR!
//    Isto anexa o token em CADA chamada
api.interceptors.request.use(
  async (config) => {
    
    // 3. Pega o token salvo no AsyncStorage
    const token = await AsyncStorage.getItem('userToken'); // (Use a chave que você usou no Login)

    if (token) {
      // 4. Anexa o token no cabeçalho (Header)
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;