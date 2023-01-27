export const todoTable = {
  todo: gql`
    fragment TodoTable on Todos {
      id
      title
    }
  `,
};
