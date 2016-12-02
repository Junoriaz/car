define(function(require,exports,module){
	var buylistVue=require('js/buy-list.js');
	var buylistTpl=require('tpl/common/sellbuy-list.tpl');
	buylistVue.template=buylistTpl;
	
	return{
		"templateTwo":buylistVue,
	}
});
