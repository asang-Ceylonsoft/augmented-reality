<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="header-left">
          <div class="header-dropdown">
            <a href="#">Usd</a>
            <div class="header-menu">
              <ul>
                <li><a href="#">Eur</a></li>
                <li><a href="#">Usd</a></li>
              </ul>
            </div>
            <!-- End .header-menu -->
          </div>
          <!-- End .header-dropdown -->

          <div class="header-dropdown">
            <a href="#">Eng</a>
            <div class="header-menu">
              <ul>
                <li><a href="#">English</a></li>
                <li><a href="#">French</a></li>
                <li><a href="#">Spanish</a></li>
              </ul>
            </div>
            <!-- End .header-menu -->
          </div>
          <!-- End .header-dropdown -->
        </div>
        <!-- End .header-left -->

        <div class="header-right">
          <ul class="top-menu">
            <li>
              <a href="#">Links</a>
              <ul>
                <li>
                  <a href="tel:#"><i class="icon-phone"></i>Call: +0123 456 789</a>
                </li>
                <li>
                  <a href="wishlist.html"
                    ><i class="icon-heart-o"></i>My Wishlist <span>(3)</span></a
                  >
                </li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li>
                  <a href="#signin-modal" data-toggle="modal"
                    ><i class="icon-user"></i>Login</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <!-- End .top-menu -->
        </div>
        <!-- End .header-right -->
      </div>
      <!-- End .container -->
    </div>
    <!-- End .header-top -->

    <div class="header-middle sticky-header">
      <div class="container">
        <div class="header-left">
          <button class="mobile-menu-toggler">
            <span class="sr-only">Toggle mobile menu</span>
            <i class="icon-bars"></i>
          </button>

          <a href="index.html" class="logo">
            <img src="../../assets/logo.png" alt="Molla Logo" width="105" height="25" />
          </a>

          <nav class="main-nav">
            <ul class="menu">
              <li class="megamenu-container active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="category.html" class="sf-with-ul">Categories</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="header-right">
          <div class="header-search">
            <a href="#" class="search-toggle" role="button" title="Search"
              ><i class="icon-search"></i
            ></a>
            <form action="#" method="get">
              <div class="header-search-wrapper">
                <label for="q" class="sr-only">Search</label>
                <input
                  type="search"
                  class="form-control"
                  name="q"
                  id="q"
                  placeholder="Search in..."
                  required
                />
              </div>
              <!-- End .header-search-wrapper -->
            </form>
          </div>
          <!-- End .header-search -->

          <div class="dropdown cart-dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-display="static"
            >
              <i class="icon-shopping-cart"></i>
              <span class="cart-count">2</span>
            </a>
            <NavCart />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavCart from "../cart/nav-cart.vue";

export default {
  components: {
    NavCart,
  },
};
</script>
