define(function(require,exports,medule){
	var myBuyListVue=require('js/mybuy-list.js');
	var myBuyListTpl=require('tpl/mysellbuy-list.tpl');
	myBuyListVue.template=myBuyListTpl;
	return{
		"templateTwo":myBuyListVue,
	}
});
