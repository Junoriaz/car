define(function(require,exports,module){
	var mySellListVue=require('js/mysell-list.js');
	var mySellListTpl=require('tpl/mysellbuy-list.tpl');
	 mySellListVue.template=mySellListTpl;
	 return{
	 	'templateTwo':mySellListVue,
	 }
});