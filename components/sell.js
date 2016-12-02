define(function(require,exports,module){
	var selllistVue=require('js/sell-list.js');
	var selllistTpl=require('tpl/common/sellbuy-list.tpl');
	selllistVue.template=selllistTpl;
	
	return{
		"templateTwo":selllistVue,
	}
});
