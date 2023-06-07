<template>
  <div class="heading heading-center mb-6">
    <h2 class="title">Trendy Products</h2>
    <ul class="nav nav-pills nav-border-anim justify-content-center" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="trendy-top-all-link"
          data-toggle="tab"
          href="#trendy-top-all-tab"
          role="tab"
          aria-controls="trendy-top-all-tab"
          aria-selected="true"
          >All</a
        >
      </li>
      <TrendyProductCategoryCard
        v-for="category in categories"
        :key="category.id"
        :prefix="'trendy-products'"
        :category="category"
      />
    </ul>
  </div>
</template>

<script>
import TrendyProductCategoryCard from "./product_category_card.vue";

export default {
  components: {
    TrendyProductCategoryCard,
  },
  props: ["categories"],
};
</script>
