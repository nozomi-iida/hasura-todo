<template>
  <div>
    <h1>{{ data?.todos?.length }} todos</h1>
  </div>
</template>
<script lang="ts" setup>
const query = gql`
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

const { data } = await useAsyncQuery<{ todos: any[] }>(query);
</script>
