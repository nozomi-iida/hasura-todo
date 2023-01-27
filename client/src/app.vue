<template>
  <div class="todo">
    <h1>TODO App</h1>
    <TodoInput @onSubmit="onSubmit" />
    <TodoTable
      v-if="data"
      :todos="data?.todos"
      @onToggle="onToggle"
      @onDelete="onDelete"
    />
  </div>
</template>
<script lang="ts" setup>
import { Todos } from "./gql/graphql";

const getTodoQuery = gql`
  query GetTodos {
    todos {
      id
      title
      isDone
    }
  }
`;

const insertTodo = gql`
  mutation InsertTodos($title: String!) {
    insertTodos(objects: { title: $title }) {
      returning {
        id
      }
    }
  }
`;

const toggleIsDoneTodo = gql`
  mutation toggleIsDoneTodo($id: uuid!, $isDone: Boolean!) {
    updateTodosByPk(pk_columns: { id: $id }, _set: { isDone: $isDone }) {
      id
    }
  }
`;

const deleteTodo = gql`
  mutation DeleteByPk($id: uuid!) {
    deleteTodosByPk(id: $id) {
      id
    }
  }
`;

const { data } = await useAsyncQuery<{ todos: Todos[] }>(getTodoQuery);
const { mutate: insertMutate } = useMutation(insertTodo);
const { mutate: toggleMutate } = useMutation(toggleIsDoneTodo);
const { mutate: deleteMutate } = useMutation(deleteTodo);
const onSubmit = (title: string) => {
  insertMutate({ title });
};
const onToggle = (id: string, isDone: boolean) => {
  toggleMutate({ id, isDone });
};
const onDelete = (id: string) => {
  deleteMutate({ id });
};
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
