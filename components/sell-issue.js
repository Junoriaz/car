define(function(require,status,medule){
	
	var sellIssueVue=require('js/sell-issue.js');
	var sellIssueTpl=require('tpl/sell-issue.tpl');
	sellIssueVue.template=sellIssueTpl;
	
	return{
		"templateOne":sellIssueVue
	}
})