const routes = [{
    path: '/',
    name: 'welcome',
    component: () => import('../pages/welcome.vue')
}, {
    path: '/cart',
    name: 'cart',
    component: () => import("../pages/cart.vue")
}];
export default routes;