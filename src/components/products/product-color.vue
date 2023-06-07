<template>
  <a href="#" class="active" style="background: #333333"
    ><span class="sr-only">{{ productColor.name }}</span></a
  >
</template>

<script>
export default {
  props: ["productColor"],
};
</script>
