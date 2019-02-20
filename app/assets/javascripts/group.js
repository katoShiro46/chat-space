$(function(){
  function appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    $('#user-search-result').append(html);
  }

  function appendGruop(name,user_id){
    var html = `<div id='chat-group-users'>
                  <div class='chat-group-user clearfix' id='chat-group-user-22'>
                    <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                    <p class='chat-group-user__name'>${name}</p>
                    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                  </div>
                </div>`
    $('.chat-group-form__field--right').eq(2).append(html);
  }

  $('#user-search-field').on('keyup',function(){
    var input = $(this).val();
    $.ajax({
      type:     'GET',
      url:      '/users',
      data:     {keyword: input},
      dataType: 'json'
    })
    .done(function(users){
      $('#user-search-result').empty();
        users.forEach(function(user){
          appendUser(user);
        });
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    });
  });

  $(document).on('click','.user-search-add',function(){
    var name = $(this).attr('data-user-name');
    var user_id = $(this).attr('data-user-id');
    $(this).parent().remove()
    appendGruop(name,user_id);
  })

  $(document).on('click','.user-search-remove',function(){
    $(this).parent().remove();
  })
})
