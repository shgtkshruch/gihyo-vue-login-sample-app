import UserList from './user-list.js';

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
      component: UserList,
    },
  ]
});
