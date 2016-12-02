define(function(require,status,medule){
	
	var buyDetail1Vue=require('js/buy-detail.js');
	var buyDetail1Tpl=require('tpl/buy-detail.tpl');
	buyDetail1Vue.template=buyDetail1Tpl;
	
	return{
		"templateOne":buyDetail1Vue,
	}
})