<template>
  <ElTable class="todo-table" :data="todos">
    <ElTableColumn prop="title" label="Title">
      <template #default="scope">
        <!-- changeの引数を渡せるようにしたい -->
        <ElCheckbox
          :class="{ checkbox: scope.row.isDone }"
          :label="scope.row.title"
          @change="(val) => $emit('onToggle', scope.row.id, val)"
          :checked="scope.row.isDone"
        />
      </template>
    </ElTableColumn>
    <ElTableColumn align="right" label="Operations">
      <template #default="scope">
        <ElButton
          size="small"
          type="danger"
          @click="$emit('onDelete', scope.row.id)"
          >Delete</ElButton
        >
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
.todo-table .checkbox .el-checkbox__label {
  text-decoration: line-through;
}
</style>
