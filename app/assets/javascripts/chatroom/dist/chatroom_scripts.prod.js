"use strict";scroll_bottom=function(){0<$("#messages").length&&$("#messages").scrollTop($("#messages")[0].scrollHeight)},submit_message=function(){$("#message_body").on("keydown",function(s){13==s.keyCode&&($("button").click(),s.target.value="")})};