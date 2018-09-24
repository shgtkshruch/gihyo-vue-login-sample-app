// JSONを返す関数
// この関数を用いて擬似的にWeb API経由で情報を取得したようにする

export default (callback) => {
  setTimeout(function () {
    callback(null, [
      {
        id: 1,
        name: 'Takuya Tejima'
      },
      {
        id: 2,
        name: 'Yohei Noda'
      }
    ])
  }, 1000)
};
