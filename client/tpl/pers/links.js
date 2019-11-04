import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.tplPersLinks.helpers({
	id() {
		return FlowRouter.getParam("id");
	}
});