define(function(require,exports,module){
	var indexCompanyVue=require('js/part-company.js');
	var indexCompanyTpl=require('tpl/part-company.tpl');
	indexCompanyVue.template=indexCompanyTpl;
	
	var indexImgVue=require('js/part-index-img.js');
	var indexImgTpl=require('tpl/part-index-img.tpl');
	indexImgVue.template=indexImgTpl;
	
	var indexListVue=require('js/part-index-list.js');
	var indexListTpl=require('tpl/part-index-list.tpl');
	indexListVue.template=indexListTpl;
	
	var indexDateVue=require('js/part-index-date.js');
	var indexDateTpl=require('tpl/part-index-date.tpl');
	indexDateVue.template=indexDateTpl;
	
	return{
		"templateOne":indexCompanyVue,
		"templateTwo":indexImgVue,
		"templateThree":indexListVue,
		"templateFour":indexDateVue,
	}
})
