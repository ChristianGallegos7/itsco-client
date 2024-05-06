import axios from "axios";

export const crearUsuario = async (nuevoUsuario) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/usuarios`, nuevoUsuario);
    return response.data; // Devuelve los datos del usuario creado
  } catch (error) {
    throw error; // Propaga el error para que pueda ser manejado en otro lugar
  }
};
