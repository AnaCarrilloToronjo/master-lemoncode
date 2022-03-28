import { character } from './character.api-model';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const getCharacterById = gql`
  query CharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
    }
  }
`;

export const getcharacter = async (id: number): Promise<character> => {
  return client
    .query({
      query: getCharacterById,
      variables: { id },
    })
    .then((result) => {
      return result.data.character;
    });
};

export const savecharacter = async (character: character): Promise<boolean> => {
  return true;
};
