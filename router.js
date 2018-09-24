export default new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>トップページです。</div>',
      },
    },
    {
      path: '/users',
      component: {
        template: '<div>ユーザー一覧です。</div>',
      },
    },
  ]
});
