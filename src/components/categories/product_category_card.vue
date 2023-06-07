<template>
  <li class="nav-item">
    <a
      class="nav-link"
      v-bind:id="prefix + '-' + category.name.toLowerCase().replace(/\s/g, '-') + '-link'"
      data-toggle="tab"
      v-bind:href="
        '#' + prefix + '-' + category.name.toLowerCase().replace(/\s/g, '-') + '-tab'
      "
      role="tab"
      v-bind:aria-controls="
        prefix + '-' + category.name.toLowerCase().replace(/\s/g, '-') + '-tab'
      "
      aria-selected="false"
      >{{ category.name }}</a
    >
  </li>
</template>

<script>
export default {
  props: ["category", "prefix"],
};
</script>
