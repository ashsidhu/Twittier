var remaining = function(event) {
	var remaining = 140 - $('textarea.tweet-compose').val().length;
 	$('.compose').find('p').html('<p>' + remaining + '</p>');
 	if (remaining < 140 && remaining >=0) {
 		$('button.tweet').removeAttr('disabled');
 	} else {
 		$('button.tweet').attr('disabled', 'disabled')
 	}
}

var template = {
	tweet: function() {
		var source = $('#tweet').html();
		var template = Handlebars.compile(source);
		return template;
	},

	user: function(name, handle) {
		html = '<p>' + name + ' @' + handle + '</p>';
		return html;
	}
};

var render = {
	tweet: function(tweet) {
		html = template.tweet();
		return html(tweet);
	},

	user: function(user) {
		return template.user(user.name, user.handle);
	}
};

