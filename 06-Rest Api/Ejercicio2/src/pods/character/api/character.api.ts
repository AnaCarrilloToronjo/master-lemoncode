import axios from 'axios';
import { character } from './character.api-model';

export const getcharacter = async (id: number): Promise<character> => {
  return axios
    .get<character>(`http://localhost:3000/api/characters/${id}`)
    .then(({ data }) => data);
};

export const savecharacter = async (character: character): Promise<boolean> => {
  if (character.id) {
    //PUT
    return axios.put(
      `http://localhost:3000/api/characters/${character.id}`,
      character
    );
  } else {
    //POST
    axios.post('http://localhost:3000/api/characters', character);
  }

  return true;
};
