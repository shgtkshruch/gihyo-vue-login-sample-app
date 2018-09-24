import userData from './user-data.js';

// 擬似的にAPI経由で情報を更新したようにする
// 実際のWebアプリケーションではServerへPOSTリクエストを行う
export default (params, callback) => {
  setTimeout(function () {
    // idは追加されるごとに自動的にincrementされていく
    params.id = userData.length + 1
    userData.push(params)
    callback(null, params)
  }, 1000)
};
