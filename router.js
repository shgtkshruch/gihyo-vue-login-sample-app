import UserList from './user-list.js';
import UserDetail from './user-detail.js';
import UserCreate from './user-create.js';
import Login from './login.js';
import Auth from './auth.js';

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
      path: '/users/new',
      component: UserCreate,
      beforeEnter(to, from, next) {
        // 認証されていない状態でアクセスした時はloginページに遷移する
        if (!Auth.loggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.fullPath },
          });
        } else {
          // 認証済みであればそのまま新規ユーザー作成ページへ進む
          next();
        }
      }
    },
    {
      path: '/users/:userId',
      component: UserDetail,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        Auth.logout();
        next('/');
      },
    },
  ]
});
