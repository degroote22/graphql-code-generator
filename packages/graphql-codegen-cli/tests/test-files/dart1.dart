String gql(String input) => input;

String testQuery = gql("""
  query myQuery {
    data {
      field1
      field2
    }
  }
""").replaceAll('\n', ' ');
