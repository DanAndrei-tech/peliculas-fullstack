import axios from "axios";
import { Actor } from "./actor-editar.model";

const API_URL = import.meta.env.VITE_API_URL;
export const obtenerActor = async (id: string): Promise<Actor> => {
  try {
    const { data } = await axios.get(`${API_URL}/actors/${id}`);
    return data;
  } catch (error) {
    throw new Error("Error al obtener actor");
  }
};

export const actualizarActor = async (actor: Actor): Promise<void> => {
  try {
    await axios.put(`${API_URL}/actors/${actor.id}`, actor);
  } catch (error) {
    throw new Error("Error al actualizar actor");
  }
};
