<template>
  <div class="todo">
    <h1>TODO App</h1>
    <TodoInput @onSubmit="onSubmit" />
    <ul>
      <li v-for="todo in data?.todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { Todos, Todos_Constraint, Todos_Insert_Input } from "./gql/graphql";

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
  mutate({ title });
};
</script>
<style>
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
