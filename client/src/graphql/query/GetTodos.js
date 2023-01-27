export const getTodos = gql`
  query GetTodos {
    todos {
      id
      title
    }
  }
`;
