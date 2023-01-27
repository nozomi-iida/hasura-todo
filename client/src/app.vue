<template>
  <div class="todo">
    <h1>TODO App</h1>
    <TodoInput @onSubmit="onSubmit" />
    <TodoTable v-if="data" :todos="data?.todos" />
  </div>
</template>
<script lang="ts" setup>
import { Todos } from "./gql/graphql";

const getTodoQuery = gql`
  query GetTodos {
    todos {
      is_done
      title
      id
    }
  }
`;

const insertTodo = gql`
  mutation InsertTodos($title: String!) {
    insert_todos(objects: { title: $title }) {
      returning {
        id
      }
    }
  }
`;

const { data } = await useAsyncQuery<{ todos: Todos[] }>(getTodoQuery);
const { mutate } = useMutation(insertTodo);
const onSubmit = (title: string) => {
  // mutateの引数がanyのまま
  mutate({ title });
};
const onToggle = (id: string, isDone: boolean) => {};
</script>
<style>
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 768px;
  width: 100%;
  margin: auto;
}
</style>
