<template>
  <div>
    <h1>TODO App</h1>
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
</script>
