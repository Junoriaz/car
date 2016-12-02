define(function(require,exports,module){
	var index=require('index.js');
	var sell=require('sell.js');
	var buy=require('buy.js');
	var mySell=require('mySell.js');
	var myBuy=require('myBuy.js');
	var buyAndSell=require('buyAndSell.js');
	var selldetail1=require('sell-detail1.js');
	var buydetail=require('buy-detail.js');
	var sellIssue=require('sell-issue.js');
	var buyIssue=require('buy-issue.js');
	
var footerVue=require('js/common/footer.js');
var footerTpl=require('tpl/common/footer.tpl');
footerVue.template=footerTpl;





var sellScreenVue=require('js/sell-screen.js');
	var sellScreenTpl=require('tpl/sell-screen.tpl');
	sellScreenVue.template=sellScreenTpl;
	


index.templateFive=footerVue;
sell.templateFive=footerVue;
buy.templateFive=footerVue;
sell.templateOne=sellScreenVue;
buy.templateOne=sellScreenVue;
buyAndSell.templateThree=footerVue;


var router=new VueRouter({
	routes:[
		{
			path:"/",
			components:index
		},
		{
			path:"/sell",
			components:sell
		},
		{
			path:"/buy",
			components:buy
		},
		{
			path:"/mySell",
			components:mySell
		},
		{
			path:"/myBuy",
			components:myBuy
		},
		{
			path:"/buyAndSell",
			components:buyAndSell
		},
		{
			path:"/sell/detail",
			components:selldetail1
		},
		{
			path:"/buy/detail",
			components:buydetail
		},
		{
			path:"/mysell/issue",
			components:sellIssue
		},
		{
			path:"/mybuy/issue",
			components:buyIssue
		}
	]
});

var vm=new Vue({
	router:router,
	el:"#app"
});

});
