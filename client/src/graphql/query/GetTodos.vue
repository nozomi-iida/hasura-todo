<script>
const getTodos = gql`
  query GetTodos {
    todos {
      id
      created_at
      updated_at
      title
      is_done
    }
  }
`;
</script>
