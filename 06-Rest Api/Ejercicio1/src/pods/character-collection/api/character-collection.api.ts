import axios from 'axios';
import { characterEntityApi } from './character-collection.api-model';

const url = 'https://rickandmortyapi.com/api/character';

interface Message {
  results: characterEntityApi[];
}

export const getCharacterCollection = async (): Promise<
  characterEntityApi[]
> => {
  return axios.get<Message>(url).then((response) => {
    return response.data.results;
  });
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  return true;
};
