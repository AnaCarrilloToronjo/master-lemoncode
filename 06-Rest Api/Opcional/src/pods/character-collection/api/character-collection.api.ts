import { characterEntityApi } from './character-collection.api-model';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const getCharacterCollection = async (): Promise<
  characterEntityApi[]
> => {
  return client
    .query({
      query: gql`
        query {
          characters(page: 1) {
            results {
              id
              name
              image
            }
          }
        }
      `,
    })
    .then((result) => {
      return result.data.characters.results;
    });
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  return true;
};
