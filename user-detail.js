import getUser from './get-user.js';

export default {
  template: `
    <div>
      <div class="loading" v-if="loading">読み込み中...</div> <div v-if="error" class="error">
        {{ error }}
      </div>
      <div v-if="user">
        <h2>{{ user.name }}</h2>
        <p>{{ user.description }}</p>
      </div>
    </div>
  `,
  data() {
    return {
      loading: false,
      user: null,
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData',
  },
  methods: {
    fetchData() {
      this.loading = true;
      getUser(this.$route.params.userId, (err, user) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.user = user;
        }
      });
    },
  },
};
