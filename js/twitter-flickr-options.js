// twitter options
jQuery(function($){
  jQuery(".tweet").tweet({
	modpath: './js/twitter/', // Twitter files path
    count: 2, // number of tweets
	loading_text: "loading tweets...",
    username: "jozoor", // Change username here
	join_text: false,
	avatar_size: false, // you can active avatar
	seconds_ago_text: "about %d seconds ago",
	a_minutes_ago_text: "about a minute ago",
	minutes_ago_text: "about %d minutes ago",
	a_hours_ago_text: "about an hour ago",
	hours_ago_text: "about %d hours ago",
	a_day_ago_text: "about a day ago",
	days_ago_text: "about %d days ago",
	view_text: "view tweet on twitter"
	});
  
  jQuery(".tweet.footer").tweet({
	modpath: './js/twitter/', // Twitter files path
    count: 2, // number of tweets
	loading_text: "loading tweets...",
    username: "jozoor", // Change username here
	join_text: false,
	avatar_size: false, // you can active avatar
	seconds_ago_text: "about %d seconds ago",
	a_minutes_ago_text: "about a minute ago",
	minutes_ago_text: "about %d minutes ago",
	a_hours_ago_text: "about an hour ago",
	hours_ago_text: "about %d hours ago",
	a_day_ago_text: "about a day ago",
	days_ago_text: "about %d days ago",
	view_text: "view tweet on twitter"
	});
  
});



// flickr options
$(document).ready(function(){

	$('#sidebar').jflickrfeed({
		limit: 6,
		qstrings: {
			id: '28230313@N07' // Flickr Id form feed Rss in your photostream in flickr profile
		},
		itemTemplate: '<li><a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_m}}" alt="{{title}}" /></a></li>'
	});
	
	$('#footer').jflickrfeed({
		limit: 4,
		qstrings: {
			id: '28230313@N07' // Flickr Id form feed Rss in your photostream in flickr profile
		},
		itemTemplate: '<li><a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_m}}" alt="{{title}}" /></a></li>'
	});

});