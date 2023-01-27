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
import { GetTodosDocument } from "./gql/graphql";

const { data } = await useAsyncQuery(GetTodosDocument);
const onSubmit = (title: string) => {
  console.log(title);
};
</script>
<style>
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
