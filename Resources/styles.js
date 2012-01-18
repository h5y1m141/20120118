var theme = {
	color:'#999',
    backgroundColor:'#fff',
    font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	viewIcon:'KS_nav_views.png',
	uiIcon:'KS_nav_ui.png'	
};
var prop = {
	win:{
		backgroundColor:theme.backgroundColor
	},
	label:{
		color:theme.color,
		textAlign:theme.textAlign,
		width:theme.width
	},
	tab1:{
		icon:theme.viewIcon
	},
	tab2:{
		icon:theme.uiIcon
	},
	viewRow:{
		width:'auto',
		height:'auto'
	},
	tweet:{
	    font:{fontSize:12},
		left:55,
		top:30,
		width:245,
		height:'auto'
		
	},
	screenName:{
	    font:{fontSize:16},
	    color:'#000',
		left:55,
		top:5,
		width:'auto',
		height:20
		
	},
	iconImage:{
		left:5,
		top:5,
		width:30,
		height:30
		
	},
	tableView:{
		backgroundColor:theme.backgroundColor
	}
};
var exports = {
	prop:prop	
};
