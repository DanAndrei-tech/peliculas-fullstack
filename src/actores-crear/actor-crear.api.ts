import axios from "axios";
import { Actor } from "./actor-crear.model";
const API_URL = import.meta.env.VITE_API_URL;

export const crearActor = async (actor: Actor): Promise<Actor> => {
  try {
    const { data } = await axios.post<Actor>(`${API_URL}`, actor);
    return data;
  } catch (error) {
    throw new Error("Error al crear el actor");
  }
};
