<script setup>
import { defineAsyncComponent } from "vue";
const IconDuck = defineAsyncComponent(() =>
  import("@/components/icons/IconDuck.vue")
);
const props = defineProps({
  avatar: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "sm",
  },
});
</script>

<template>
  <div :class="['user-avatar', `size-${size}`]">
    <img v-if="props.avatar" :src="props.avatar" class="image" alt="" />
    <div v-else class="duck-wrapper">
      <IconDuck class="duck-image" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-avatar {
  // Prevent user pass other sizes
  height: 140px;
  width: 140px;
  border-radius: 70px;
  overflow: hidden;

  &.size-sm {
    height: 140px;
    width: 140px;
    border-radius: 70px;
  }

  &.size-lg {
    height: 300px;
    width: 300px;
    border-radius: 150px;
  }

  .image,
  .duck-image {
    width: 100%;
  }

  .duck-wrapper {
    padding: 20px;
    background-color: #54a3ff;
  }
}
</style>
