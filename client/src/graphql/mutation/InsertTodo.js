export const insertTodo = gql`
  mutation InsertTodos($title: String!) {
    insert_todos(objects: { title: $title }) {
      returning {
        id
      }
    }
  }
`;
