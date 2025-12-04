import { Actor } from "./actores-listado.model";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export const obtenerActores = async (): Promise<Actor[]> => {
  try {
    const { data } = await axios.get(`${API_URL}/actor`);
    return data;
  } catch (error) {
    throw new Error("Error al obtener los actores");
  }
};

export const borrarActor = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/actors/${id}`);
  } catch (error) {
    throw new Error("Error al borrar el actor");
  }
};
