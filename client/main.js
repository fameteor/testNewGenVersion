import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import fontawesome from '@fortawesome/fontawesome';
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

import './main.html';
import './tpl/icon.html';

import './tpl/router/navBar.html';
import './tpl/router/noRouteFound.html';
import './tpl/pers/displayTypeMenu.html';

import './tpl/pers/infos.html';
import './tpl/pers/ascTree.html';
import './tpl/pers/descTree.html';
import './tpl/pers/links.html';

import './tpl/msg/ui.html';

import './tpl/pers/modalSearch.html';

import './tpl/pers/infos.js';
import './tpl/pers/ascTree.js';
import './tpl/pers/descTree.js';
import './tpl/pers/links.js';



// ====================================
// ROUTES definition
// ====================================

var routes = {
	'/pers/infos/:id'		: 	{name:'pers.infos',				main:'tplPersInfos'},
	'/pers/asc-tree/:id'	: 	{name:'pers.ascTree',			main:'tplPersAscTree'},
	'/pers/desc-tree/:id'	: 	{name:'pers.descTree',			main:'tplPersDescTree'},
	'/pers/links/:id'		: 	{name:'pers.links',				main:'tplPersLinks'},
	'/msg/ui'				:	{name:'msg.ui',					main:'tplMsgUi'},
	'*'						: 	{name:'router.noRouteFound',	main:'tlpRouterNoRouteFound'},
};

Object.keys(routes).map(function(key) {
	FlowRouter.route(key, {
		name: routes[key].name,
		action() {
			BlazeLayout.render('App_body', {main: routes[key].main});
		}
	});
	
});


