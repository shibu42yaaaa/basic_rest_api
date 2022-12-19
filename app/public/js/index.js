const indexModule = (() => {
  const path = window.location.pathname

  switch (path) {
    case "/":
      // 検索ボタンをクリックした時のイベントリスナー設定
      document.getElementsById('search-btn').addEventListener('click', () => {
        return searchModule.searchUsers()
      })

      //UsersモジュールのfetchAllUsersメソッドを呼び出す
      return usersModule.fetchAllUsers()
    
    case '/create.html':
      document.getElementsById('save-btn').addEventListener('click', () => {
        return usersModule.createUser()
      })
      document.getElementsById('cancel-btn').addEventListener('click', () => {
        return window.location.href = '/'
      })
      break;

    default:
      break;
  }
})()
