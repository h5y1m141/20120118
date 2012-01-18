// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var $$ = require('styles');
var ui = require('ui');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();



//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow($$.prop.win);
win1.title = 'Tab1';
var tab1 = Titanium.UI.createTab($$.prop.tab1);
tab1.window = win1;
var label1 = Titanium.UI.createLabel($$.prop.label);
label1.text = 'I am Window1';
win1.add(label1);

//
// create controls tab and root window
//

var win2 = Titanium.UI.createWindow($$.prop.win);
win2.title = 'Tab 2';
var tab2 = Titanium.UI.createTab($$.prop.tab2);
tab2.window = win2;

var label2 = Titanium.UI.createLabel($$.prop.label);
label2.text = 'I am Window 2';
win2.add(label2);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

Ti.include("/lib/twitter_api.js");
var twWin = Titanium.UI.createWindow($$.prop.win);
vat twTab = Titanium.UI.createTab($$.prop.tab1);
twTab.window = twWin;
twWin.title = 'twitter';

var twitter = new TwitterApi({
	consumerKey:'',
	consumerSecret:''
});
twitter.init();
twitter.statuses_home_timeline({
	onSuccess:function(tweets){
		var rows = [];
		var items = {};
		for (var i=0; i < tweets.length; i++) {
		  var tweet = tweets[i];
		  var row = ui.createTweetRow(tweet);
		  row.push(row);
		};
		var tableView = ui.createTableView(rows);
		twWin.add(tableView);
	},
	onError:function(error){
		Ti.API.error(error);
	}
})
tabGroup.addTab(twTab); 
// open tab group
tabGroup.open();
