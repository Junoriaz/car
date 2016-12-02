define(function(require,exports,module){
	var touchMore=require("/js/touchMore.js");
	return{
		data:function(){
			return{
				listArr:[
				   
				]
			}
		},
		methods:{
			touchFun:function(callBack){
				var listNode=document.querySelector('.listMain');
				touchMore.init(callBack);
			}
		},
		created:function(){
			var _this=this;
			$.ajax({
				url:"/json/sell.json",
				dataTYpe:"json",
				success:function(json){
					_this.listArr=json;
				},
				error:function(xml,status,error){
					console.log(xml,status,error);
				}
			});
		},

			updated:function(){
				var _this=this;
				if(document.smeFun==null){
					_this.touchFun(function(num){
						$.ajax({
							url:"/json/sell.json",
							data:{pageNum:num},
							dataType:"json",
							success:function(json){
								_this.listArr=_this.listArr.concat(json);
							},
							error:function(xml,status,error){
								console.log(xml,status,error);
							}
						});
					});
				}
			},

	}
});