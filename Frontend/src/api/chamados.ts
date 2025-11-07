import api from "./api";

// Função para listar todos os chamados
export async function listarChamados() {
  const response = await api.get("/chamados/");
  return response.data;
}
