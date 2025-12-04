import axios from "axios";
import { Movie } from "./pelicula-crear.model";
const API_URL = import.meta.env.VITE_API_URL;

export const crearPelicula = async (pelicula: Movie): Promise<Movie> => {
  try {
    const { data } = await axios.post<Movie>(`${API_URL}/movies`, pelicula);
    return data;
  } catch (error) {
    throw new Error("Error al crear la pelicula");
  }
};
