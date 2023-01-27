<template>
  <ElForm :inline="true" :model="todoParams">
    <ElFormItem>
      <ElInput v-model="todoParams.title" />
    </ElFormItem>
    <ElFormItem>
      <ElButton @click="$emit('onSubmit', todoParams.title)">作成</ElButton>
    </ElFormItem>
  </ElForm>
</template>
<script lang="ts" setup>
const todoParams = reactive({
  title: "",
});
</script>
