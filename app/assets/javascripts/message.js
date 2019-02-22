$(function(){
  function buildHTML(message){
    var html = `<div class="message-area__message-box">
                  <div class="message-area__message-box__name">${message.user_name}</div>
                  <div class="message-area__message-box__time">${message.created_at}</div>
                  <div class="message-area__message-box__comment">${message.comment}</div>
                </div>
                `
                if(message.image.url != null){
                  html = $(html).append(`<img class="lower-message__image" src=${message.image.url}>`)
                }
     return html;
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message-area').prepend(html);
      $('.message-area').animate({scrollTop:0},500,'swing')
      $('#new_message')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
    return false;
  })

  var url = location.href;
  if (url.match(/\/groups\/\d+\/messages/)){
    setInterval(function(){
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json'
      })
      .done(function(messages){
        $('.message-area').empty();
        messages.forEach(function(message){
          var html = buildHTML(message);
          $('.message-area').append(html);
        });
      })
      .fail(function(){
        alert('error');
      });
    },5000)
  };
})

// $(function(){
//   function buildHTML(message){
//     var html = `<div class="message-area__message-box">
//                   <div class="message-area__message-box__name">${message.user_name}</div>
//                   <div class="message-area__message-box__time">${message.created_at}</div>
//                   <div class="message-area__message-box__comment">${message.comment}</div>
//                 </div>
//                 `
//                 if(message.image.url != null){
//                   html = $(html).append(`<img class="lower-message__image" src=${message.image.url}>`)
//                 }
//      return html;
//   }

//   $('#new_message').on('submit',function(e){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       type: 'POST',
//       url: url,
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data){
//       var html = buildHTML(data);
//       $('.message-area').prepend(html);
//       $('.message-area').animate({scrollTop:0},500,'swing')
//       $('#new_message')[0].reset();
//     })
//     .fail(function(){
//       alert('error');
//     });
//     return false;
//   })
// })
