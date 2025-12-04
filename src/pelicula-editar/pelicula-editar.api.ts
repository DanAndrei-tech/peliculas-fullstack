import axios from "axios";
import { Movie } from "./pelicula-editar.model";
const API_URL = import.meta.env.VITE_API_URL;

export const obtenerPelicula = async (id: string): Promise<Movie> => {
  try {
    const { data } = await axios.get(`${API_URL}/movies/${id}`);
    return data;
  } catch (error) {
    throw new Error("Error al obtener la pelicula");
  }
};

export const actualizarPelicula = async (pelicula: Movie): Promise<void> => {
  try {
    await axios.put(`${API_URL}/movies/${pelicula.id}`, pelicula);
  } catch (error) {
    throw new Error("Error al actualizar pelicula");
  }
};
