<template>
  <ElForm
    :inline="true"
    :model="todoParams"
    @submit.prevent="onSubmit(todoParams.title)"
  >
    <ElFormItem>
      <ElInput v-model="todoParams.title" />
    </ElFormItem>
    <ElFormItem>
      <ElButton native-type="submit">作成</ElButton>
    </ElFormItem>
  </ElForm>
</template>
<script lang="ts" setup>
const todoParams = reactive({
  title: "",
});
const emit = defineEmits(["onSubmit"]);
const onSubmit = async (title: string) => {
  await emit("onSubmit", title);
  todoParams.title = "";
};
</script>
