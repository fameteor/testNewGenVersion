import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.tplPersInfos.helpers({
	id() {
		return FlowRouter.getParam("id");
	}
});

Template.tplPersInfos.events = {
	"click #context-menu>a" : function(e,tpl) {
		// e.preventDefault();	
		$(e.target.parentNode).removeClass("show").hide();
	},
	"contextmenu #right-menu" : function(e,tpl) {
		e.preventDefault();		
		  $("#context-menu").css({
			display: "block",
			top: e.pageY - 0,
			left: e.pageX - 0
		  }).addClass("show");
		  //blocks default Webbrowser right click menu
		  return false; 
	},
	
};