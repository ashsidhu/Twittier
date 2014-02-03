var app = {
	init: function () {
		this.time = +new Date();
		console.log(this.time);
		this.bindEvents();
		this.populate();
		this.botInit();
		//this.signUp()
		this.tweetTpl = this.compileTpl();
	},

	binding: {},
	// click-bindings
	// anchor prevent default
	
	cache: {
		currentUser: ''
	},
	// current user and session related data

	tweet: function(event, userId, text) {
		var userId = userId || app.cache.currentUser;
		var text = text || $('textarea.tweet-compose').val();
		
		eval('var ' + tweetVar(tweetId) + '= new Tweet();' + tweetVar(tweetId) +'.tweet(text, userId);');
		
		Users[userId]['tweets'].push(tweetVar(tweetId));
		Tweets[tweetVar(tweetId)] = eval(tweetVar(tweetId));

		console.log(Users[userId]['name'] + ' tweeted \'' + text + '\'.')
		$('textarea.tweet-compose').val('');
		remaining();

		// put code below in controller
		var tweetObject = Tweets[tweetVar(tweetId)];
		var tweetSource = app.tweetTpl(tweetObject);
		console.log(tweetSource);

		$('.tweet-list').prepend(tweetSource);
		// update tweets count on profile html
		// trigger new tweet
		tweetId++;
	},

	bindEvents: function() {
		$('textarea.tweet-compose').on('keyup', remaining)
		$('button.tweet').on('click', this.tweet);
		$('button.delete').on('click', this.deleteTweet);
	},

	populate: function() {
		app.signUp('Guneet Sidhu', 'Guneet', 'Hello World', 'a', 'img/guneet.jpg', 'Vancouver')
		// spawn all bots
	},

	botInit: function() {
		// setTimeout for all bots
	},

	signUp: function(name, handle, bio, email, img, location) {
		var uid = userVar(userId);
		eval('var ' + uid + ' = new User();' + uid +'.signUp(name, handle, bio, email, img, location)');
		Users[uid] = eval(uid);
		app.cache['currentUser'] = uid;
		console.log(name + ' signed up for Twittier.');
		console.log(eval(uid));
		userId++;
	},

	showProfile: function(userId) {
		// render profile (userId)
		// $profile.html
	},

	showTweets: function(userId) {
		// get tweets array for user
		// first 20 tweets
		// for each tweet, render tweet
		// $tweets.html
	},

	tweetTpl: {

	},

	compileTpl: function() {
		var source = $('#tweet').html();
		var template = Handlebars.compile(source);
		return template;
	},

	deleteTweet: function() {
		//var tweetId = $
		console.log('this works');
	}
};

$(document).on('load', app.init());

