export interface character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export const createEmptyCharacter = (): character => ({
  id: null,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: '',
});
