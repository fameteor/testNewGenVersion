import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.tplPersDescTree.helpers({
	id() {
		return FlowRouter.getParam("id");
	}
});