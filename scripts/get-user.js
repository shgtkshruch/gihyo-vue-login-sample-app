import userData from './user-data.js';

// 擬似的にAPI経由で情報を取得したようにする
export default (userId, callback) => {
  setTimeout(function () {
    var filteredUsers = userData.filter(function (user) {
      return user.id === parseInt(userId, 10)
    })
    callback(null, filteredUsers && filteredUsers[0])
  }, 1000);
};
