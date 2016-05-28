$(document).ready(function() {
	///INIT///
	var maxChar = 140;
	var currentTweet = "";
	var fadeTime = 300;
	$("#tweet-controls").hide();
	$(".tweet-actions").hide();
	$(".reply").hide();
	///EVENTS///
	$(".tweet-compose").click(function(event) {
		$(".tweet-compose").css("height","5em");
		$("#tweet-controls").show();
	});
	$(".tweet-compose").keyup(function(event) {
		var len = $(this).val().length;
		var currentChar = (maxChar-len);
		if ($(currentChar > 1)) {
			(currentChar <= 10) ? $("#char-count").css("color","red") : $("#char-count").css("color","#999");
			(currentChar > 0) ? $("#tweet-submit").show() : $("#tweet-submit").hide();
		}
		$("#char-count").html(currentChar);
		console.log(currentChar);
		currentTweet = $(this).val();
	});
	$(".tweet").mouseover(function(event) {
		$(this).find(".tweet-actions").fadeIn(fadeTime);
	});
	$(".tweet").mouseleave(function(event) {
		$(this).find(".tweet-actions").fadeOut(fadeTime);
	});
	$(".tweet").click(function(event) {
		$(this).find(".reply").fadeIn(fadeTime);
	});
	$("#tweet-submit").click(function(event) {
		$(".tweet-compose").val('')
		$("#stream").prepend('<div class="tweet">'+
												'<div class="content">'+
												'<img class="avatar" src="img/alagoon.jpg" />'+
												'<strong class="fullname">Your Name Here</strong>'+
												'<span class="username"> @yournamehere</span>'+
												'<p class="tweet-text">'+currentTweet+'</p>'+
												'<div class="tweet-actions">'+
												'<ul>'+
												'<li><span class="icon action-reply"></span> Reply</li>'+
												'<li><span class="icon action-retweet"></span> Retweet</li>'+
												'<li><span class="icon action-favorite"></span> Favorite</li>'+
												'<li><span class="icon action-more"></span> More</li>'+
												'</ul>'+
												'</div>'+
												'<div class="stats">'+
												'<div class="retweets">'+
												'<p class="num-retweets"></p>'+
												'</div>'+
												'<div class="favorites">'+
												'<p class="num-favorites"></p>'+
												'</div>'+
												'<div class="users-interact">'+
												'<div>'+
												'</div>'+
												'</div>'+
												'<div class="time">'+
												'1:04 PM - 19 Sep 13'+
												'</div>'+
												'</div>'+
												'<div class="reply">'+
												'<img class="avatar" src="img/alagoon.jpg" />'+
												'<textarea class="tweet-compose" placeholder="Reply to @yournamehere"/></textarea>'+
												'</div>'+
												'</div>'+
												'</div>'+
												'</div>');
	});

})