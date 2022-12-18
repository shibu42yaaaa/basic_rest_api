const indexModule = (() => {
    //検索ボタンをクリックした時のイベントリスナーを設定
    document.getElementsById('search-btn')
      .addEventListener('click', () => {
        return searchModule.searchUsers()
      }) 
    //UsersモジュールのfetchAllUsersメソッドを呼び出す
    return usersModule.fetchAllUsers()
})
