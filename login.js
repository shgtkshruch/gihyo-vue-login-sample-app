import Auth from './auth.js';

export default {
  template: `
    <div>
      <h2>Login</h2>
      <p v-if="$route.query.redirect">
        ログインしてください
      </p>
      <form @submit.prevent="login">
        <label>
          <input v-model="email" placeholder="email">
        </label>
        <label>
          <input v-model="pass" placeholder="password" type="password">
        </label>
        <br>
        <button type="submit">ログイン</button>
        <p v-if="error" class="error">ログインに失敗しました</p>
      </form>
    </div>
  `,
  data() {
    return {
      email: 'vue@example.com',
      pass: '',
      error: false,
    };
  },
  methods: {
    login() {
      Auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          // redirectパラメーターが付いている場合はそのパスに遷移
          this.$router.replace(this.$route.query.redirect || '/')
        }
      });
    },
  },
};
