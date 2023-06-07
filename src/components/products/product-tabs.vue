<template>
  <div
    class="tab-pane p-0 fade"
    v-bind:id="prefix + '-' + tabname.toLowerCase().replace(/\s/g, '-')+'-tab'"
    role="tabpanel"
    v-bind:aria-labelledby="
      prefix + '-' + tabname.toLowerCase().replace(/\s/g, '-') + '-link'
    "
  >
    <ProductList :productsdata="tabdata" />
  </div>
</template>

<script>
import ProductList from "./product-list.vue";

export default {
  components: {
    ProductList,
  },
  props: ["tabdata", "tabname", "prefix"],
};
</script>
