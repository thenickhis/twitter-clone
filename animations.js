$(document).ready(function() {
	///INIT///
	var maxChar = 140;
	var currentTweet = "";
	$("#tweet-controls").hide();
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
	$("#tweet-submit").click(function(event) {
		$(".tweet-compose").val('')
		$(".tweet .content:first-child").prepend('<div class="content">'+
												'<img class="avatar" src="img/alagoon.jpg" />'+
												'<strong class="fullname">Your Name Here</strong>'+
												'<span class="username">@yournamehere</span>'+
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
												'<p class="num-retweets">30</p>'+
												'<p>RETWEETS</p>'+
												'</div>'+
												'<div class="favorites">'+
												'<p class="num-favorites">6</p>'+
												'<p>FAVORITES</p>'+
												'</div>'+
												'<div class="users-interact">'+
												'<div>'+
												'<img src="img/alagoon.jpg" />'+
												'<img src="img/vklimenko.jpg" />'+
												'</div>'+
												'</div>'+
												'<div class="time">'+
												'1:04 PM - 19 Sep 13'+
												'</div>'+
												'</div>'+
												'<div class="reply">'+
												'<img class="avatar" src="img/alagoon.jpg" />'+
												'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>'+
												'</div>'+
												'</div>'+
												'</div>')
	});

})