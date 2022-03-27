import axios from 'axios';
import { characterEntityApi } from './character-collection.api-model';

const url = 'http://localhost:3000/api/characters';

export const getCharacterCollection = async (): Promise<
  characterEntityApi[]
> => {
  return axios.get<characterEntityApi[]>(url).then((response) => {
    return response.data;
  });
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  return axios.delete(`${url}/${id}`);
};
