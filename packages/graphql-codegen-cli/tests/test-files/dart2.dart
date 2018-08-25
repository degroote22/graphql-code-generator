String gql(String input) => input;

String readRepositories = gql("""
  query ReadRepositories(\$nRepositories: Int!) {
    viewer {
      repositories(last: \$nRepositories) {
        nodes {
          id
          name
          viewerHasStarred
        }
      }
    }
  }
""").replaceAll('\n', ' ');
