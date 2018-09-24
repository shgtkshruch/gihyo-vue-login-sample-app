const userData = [
  {
    id: 1,
    name: 'Takuya Tejima',
    description: '東南アジアで働くエンジニアです。'
  }, {
    id: 2,
    name: 'Yohei Noda',
    description: 'アウトドア・フットサルが趣味のエンジニアです。'
  }
];

// 擬似的にAPI経由で情報を取得したようにする
export default (userId, callback) => {
  setTimeout(function () {
    var filteredUsers = userData.filter(function (user) {
      return user.id === parseInt(userId, 10)
    })
    callback(null, filteredUsers && filteredUsers[0])
  }, 1000);
};
