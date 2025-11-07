import { Redirect } from 'expo-router';

export default function RootIndex() {
  
  // Isto diz ao Expo Router:
  // "Quando alguém abrir a rota raiz (/),
  // redirecione-o imediatamente para a rota /Login/indexLogin"

  return <Redirect href="/Login/indexLogin" />;
}