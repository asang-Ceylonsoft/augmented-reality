<template>
  <div class="col-6 col-md-4 col-lg-3">
    <div class="product product-11 mt-v3 text-center">
      <figure class="product-media">
        <RouterLink :to="{ name: 'product-view', params: { id: encodeString(product.id) } }">
          <img :src="product.thumbnail" alt="Product image" class="product-image" />
          <img :src="product.thumbnail" alt="Product image" class="product-image-hover" />
        </RouterLink>

        <div class="product-action-vertical">
          <a class="btn-product-icon btn-wishlist"><span>add to wishlist</span></a>
          <a
            :href="'https://ar.aries.lk/marker?model=' + product.model"
            v-if="product.show_ar == 1"
            class="btn-product-icon"
            ><i class="fa fa-eye" aria-hidden="true"></i
          ></a>
        </div>
        <!-- End .product-action-vertical -->
      </figure>
      <!-- End .product-media -->

      <div class="product-body">
        <h3 class="product-title">
          <RouterLink :to="{ name: 'product-view', params: { id: encodeString(product.id) } }">{{
            product.name
          }}</RouterLink>
        </h3>
        <!-- End .product-title -->
        <div class="product-price">{{ this.formatCurrency(product.price) }}</div>
        <!-- End .product-price -->

        <div class="product-nav product-nav-dots">
          <ProductColor
            v-for="color in product.colors"
            :key="color.id"
            :productColor="color"
          />
        </div>
        <!-- End .product-nav -->
      </div>
      <!-- End .product-body -->
      <div class="product-action">
        <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
      </div>
      <!-- End .product-action -->
    </div>
  </div>
</template>

<script>
import ProductColor from "./product-color.vue";
import { RouterLink } from "vue-router";
import { formatCurrency } from "../../helpers/currency";
import { detectMobilePlatform, encodeString } from "../../helpers/utils";

export default {
  props: ["product"],
  components: {
    ProductColor,
  },
  methods: {
    formatCurrency,
    encodeString,
    detectMobilePlatform,
    // onARClicked(product) {
    //   alert(product.show_ar);
    // },
  },
};
</script>
