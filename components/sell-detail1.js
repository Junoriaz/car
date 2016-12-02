define(function(require,status,medule){
	
	var sellDetail1Vue=require('js/sell-detail1.js');
	var sellDetail1Tpl=require('tpl/sell-detail1.tpl');
	sellDetail1Vue.template=sellDetail1Tpl;
	
	return{
		"templateOne":sellDetail1Vue,
	}
})