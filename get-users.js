import userData from './user-data.js';

// JSONを返す関数
// この関数を用いて擬似的にWeb API経由で情報を取得したようにする
export default (callback) => {
  setTimeout(function () {
    callback(null, userData);
  }, 1000);
};
