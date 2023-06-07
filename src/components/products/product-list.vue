<template>
  <div class="products">
    <div class="row justify-content-start">
      <ProductCard v-for="product in this.productsdata" :product="product" :key="product.id" />
    </div>
  </div>
</template>

<script>
import ProductCard from "./product-card.vue";

export default {
  components: {
    ProductCard,
  },
  props: ["productsdata"],
};
</script>
