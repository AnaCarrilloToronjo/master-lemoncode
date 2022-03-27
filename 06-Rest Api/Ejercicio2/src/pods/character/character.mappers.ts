import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.character
): viewModel.character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  image: character.image,
  bestSentences: character.bestSentences,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.character
): apiModel.character =>
  ({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    image: character.image,
    bestSentences: character.bestSentences,
  } as unknown as apiModel.character);
