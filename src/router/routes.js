const routes = [{
    path: '/',
    name: 'welcome',
    component: () => import('../pages/welcome.vue')
}, {
    path: '/cart',
    name: 'cart',
    component: () => import("../pages/cart.vue")
},{
    path: '/product/:id',
    name: 'product-view',
    component: () => import("../pages/product-view.vue")
}];
export default routes;