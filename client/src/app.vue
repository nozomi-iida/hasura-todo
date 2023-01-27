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
    todos(orderBy: { createdAt: ASC }) {
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

const { data, refresh } = await useAsyncQuery<{ todos: Todos[] }>(getTodoQuery);
const { mutate: insertMutate } = useMutation(insertTodo);
const { mutate: toggleMutate } = useMutation(toggleIsDoneTodo);
const { mutate: deleteMutate } = useMutation(deleteTodo);
const onSubmit = async (title: string) => {
  await insertMutate({ title });
  refresh();
};
const onToggle = async (id: string, isDone: boolean) => {
  await toggleMutate({ id, isDone });
  refresh();
};
const onDelete = async (id: string) => {
  await deleteMutate({ id });
  refresh();
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
