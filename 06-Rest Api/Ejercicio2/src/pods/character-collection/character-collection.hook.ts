import * as React from 'react';
import { characterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const usecharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    characterEntityVm[]
  >([]);

  const loadcharacterCollection = () => {
    getCharacterCollection().then((result) => {
      let mapResult = mapToCollection(result, mapFromApiToVm);
      setCharacterCollection(mapResult);
    });
  };

  return { characterCollection, loadcharacterCollection };
};
