import { CharacterEntity } from "../model";

export const getCharacter = (): Promise<CharacterEntity[]> => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=1`).then(
    (response) => response.json().then((data) => data.results)
  );
};

export const getCharacterDetail = (id: string): Promise<CharacterEntity> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
    (response) => response.json()
  );
};

export const getSearchCharacter = (
  inputValue: string
): Promise<CharacterEntity[]> => {
  return getCharacter().then((data) =>
    data.filter(function (result) {
      return result.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    })
  );
};

export const getMoreCharacter = (page: number): Promise<CharacterEntity[]> => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(
    (response) => response.json().then((data) => data.results)
  );
};
