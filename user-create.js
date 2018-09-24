import postUser from './post-user.js';

export default {
  template: `
    <div>
      <div class="sending" v-if="sending">Sending...</div>
      <div>
      <h2>新規ユーザー作成</h2>
      <div>
        <label>名前: </label>
          <input type="text" v-model="user.name">
        </div>
      <div>
        <label>説明文: </label>
        <textarea v-model="user.description"></textarea>
      </div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div>
        <input type="button" @click="createUser" value="送信">
      </div>
    </div>
  `,
  data() {
    return {
      sending: false,
      user: this.defaultUser(),
      error: null,
    };
  },
  methods: {
    defaultUser() {
      return {
        name: '',
        description: '',
      };
    },
    createUser() {
      if (this.user.name.trim() === '') {
        this.error = 'Nameは必須です';
        return
      }
      if (this.user.description.trim() === '') {
        this.error = 'Descriptionは必須です';
        return
      }
      postUser(this.user, (err, user) => {
        this.sending = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.error = null;
          this.user = this.defaultUser();
          alert('新規ユーザーが登録されました');
          this.$router.push('/users')
        }
      });
    },
  },
};
