<template>
  <div class="heading heading-center mb-6">
    <h2 class="title">Recent Arrivals</h2>
    <ul class="nav nav-pills nav-border-anim justify-content-center" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="recent-top-all-link"
          data-toggle="tab"
          href="#recent-top-all-tab"
          role="tab"
          aria-controls="recent-top-all-tab"
          aria-selected="true"
          >All</a
        >
      </li>
      <ProductCategoryCard
        v-for="category in categories"
        :key="category.id"
        :prefix="'recent-products'"
        :category="category"
      />
    </ul>
  </div>
</template>

<script>
import ProductCategoryCard from "./product_category_card.vue";

export default {
  components: {
    ProductCategoryCard,
  },
  props: ["categories"],
};
</script>
