<template>
  <ElTable :data="todos">
    <ElTableColumn prop="title" label="Title">
      <template #default="scope">
        <ElCheckbox :label="scope.row.title" />
      </template>
    </ElTableColumn>
    <ElTableColumn align="right" label="Operations">
      <template #default>
        <ElButton size="small">Edit</ElButton>
        <ElButton size="small" type="danger">Delete</ElButton>
      </template>
    </ElTableColumn>
  </ElTable>
</template>
<script lang="ts" setup>
import { Todos } from "../gql/graphql";

const props = defineProps({
  todos: {
    type: Array<Todos>,
    required: true,
  },
});
</script>
<style>
.el-checkbox__label {
  text-decoration: line-through;
}
</style>
