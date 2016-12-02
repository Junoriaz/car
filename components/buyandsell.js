define(function(require,exports,medule){
	var buyandsellListVue=require('js/buyandsell-list.js');
	var buyandsellListTpl=require('tpl/buyandsell-list.tpl');
	buyandsellListVue.template=buyandsellListTpl;
	return{
		"templateTwo":buyandsellListVue,
	}
});