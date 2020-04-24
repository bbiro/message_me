"use strict";

scroll_bottom = function scroll_bottom() {
  if ($("#messages").length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
};

submit_message = function submit_message() {
  $('#message_body').on('keydown', function (e) {
    if (e.keyCode == 13) {
      //enter key code
      $('button').click();
      e.target.value = '';
    }
  });
};