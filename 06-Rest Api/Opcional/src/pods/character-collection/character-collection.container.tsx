import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { usecharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadcharacterCollection } =
    usecharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadcharacterCollection();
  }, []);

  const handleCreatecharacter = () => {
    history.push(linkRoutes.createcharacter);
  };

  const handleEdit = (id: number) => {
    history.push(linkRoutes.editcharacter(id));
  };

  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadcharacterCollection();
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreatecharacter={handleCreatecharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
