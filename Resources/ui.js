var exports ={
	createTweetRow:function(tweet){
		var row = Ti.UI.createTableViewRow($$.prop.viewRow);
		row.data = tweet;
		row.addEventListner('click',function(e){
			alert('finish');
		});
		
		var title = Ti.UI.createLabel($$.prop.tweet);
		title.text = tweet.text;
		row.add(title);
		
		var screen_name = Ti.UI.createLabel($$.prop.screenName);
		screen_name.text = tweet.user.screen_name;
		row.add(screen_name);
		
		var icon_image = Ti.UI.createImageView($$.prop.iconImage);
		icon_image.image =  tweet.user.profile_image_url;
		row.add(icon_image);
		
		return row;
	},
	createTableView:function(rows){
		var len = rows.length;
		var tableView = Ti.UI.createTableView($$.tableView);
		for (var i=0; i < len; i++) {
		  tableView.appendRow(rows[i]);
		}
		return tableView;
	}
};
