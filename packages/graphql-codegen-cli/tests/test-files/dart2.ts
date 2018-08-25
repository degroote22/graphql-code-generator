import gql from 'graphql-tag';

export const myQuery = gql`
  query ReadRepositories($nRepositories: Int!) {
    viewer {
      repositories(last: $nRepositories) {
        nodes {
          id
          name
          viewerHasStarred
        }
      }
    }
  }
`;
