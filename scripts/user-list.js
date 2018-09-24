import getUsers from './get-users.js';

export default {
  template: `
    <div>
      <div class="loading" v-if="loading">読み込み中...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div v-for="user in users" :key="user.id">
        <router-link :to="{ path: '/users/' + user.id }">{{ user.name }}</router-link>
      </div>
    </div>
  `,
  data() {
    return {
      loading: false,
      users() { return [] },
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.loading = true;
      getUsers((err, users) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.users = users;
        }
      });
    },
  },
};
