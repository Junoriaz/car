define(function(require,status,medule){
	
	var buyIssueVue=require('js/buy-issue.js');
	var buyIssueTpl=require('tpl/buy-issue.tpl');
	buyIssueVue.template=buyIssueTpl;
	
	return{
		"templateOne":buyIssueVue
	}
})