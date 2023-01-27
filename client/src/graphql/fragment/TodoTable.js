export const todoTable = {
  todo: gql`
    fragment TodoTable on todos {
      id
      title
    }
  `,
};
