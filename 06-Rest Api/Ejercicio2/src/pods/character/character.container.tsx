import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, character } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setcharacter] = React.useState<character>(
    createEmptyCharacter()
  );
  const { id } = useParams();
  const history = useHistory();

  const handleLoadcharacter = async () => {
    const apicharacter = await api.getcharacter(id);
    setcharacter(mapCharacterFromApiToVm(apicharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadcharacter();
    }
  }, []);

  const handleSave = async (character: character) => {
    const apicharacter = mapCharacterFromVmToApi(character);
    const success = await api.savecharacter(apicharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
