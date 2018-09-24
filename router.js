import UserList from './user-list.js';
import UserDetail from './user-detail.js';

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
    {
      path: '/users/:userId',
      component: UserDetail,
    },
  ]
});
