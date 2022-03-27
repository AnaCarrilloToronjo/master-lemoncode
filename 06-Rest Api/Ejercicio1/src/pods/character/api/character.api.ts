import axios from 'axios';
import { character } from './character.api-model';

export const getcharacter = async (id: number): Promise<character> => {
  return axios
    .get<character>(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => data);
};

export const savecharacter = async (character: character): Promise<boolean> => {
  return true;
};
