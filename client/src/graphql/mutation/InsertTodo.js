export const insertTodo = gql`
  mutation InsertTodos($title: String!) {
    insertTodos(objects: { title: $title }) {
      returning {
        id
      }
    }
  }
`;
