import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.tplPersAscTree.helpers({
	id() {
		return FlowRouter.getParam("id");
	}
});