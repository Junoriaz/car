define(function(){
	return{
		data:function(){
			return{
				filterArr:[
					{
						id:"filter",
						list:"筛选",
						fixBool:false
					},
					{
						id:"brand",
						list:"品牌",
						fixBool:false
					},
					{
						id:"sort",
						list:"类型",
						fixBool:false
					},
				],
				screenArr:[],
				brandArr:[],
				typeArr:[],
				navBool:false,
				conditionStr:""
r			}
		},
		methods:{
			showFix:function(index){
				var _this=this;
				_this.navBool=true;
				_this.filterArr[index].fixBool=true;
				for(var i=0;i<_this.filterArr.length;i++ ){
					if(i!=index){
						_this.filterArr[i].fixBool=false;
a					}
				}
			},
			hideFix:function(e){
				var _this=this;
				var target=e.target;
				if(target.id=='Js-fix')
				_this.navBool=false;
			},
			conditionFun:function($event,carName,seriesName,brandName){
c				$event.stopPropagation();
				var _this=this;
				_this.conditionStr=brandName+" "+seriesName+" "+carName;
			},
			searchFun:function(){
				var _this=this;
				var data=_this.conditionStr;
				$.ajax({
					type:"get",
					url:"/car/json/sell.json",
/					dataType:"json",
					data:{data:data},
					async:true,
					success:function(json){
						_this.listArr=json;
						_this.navBool=false;
					},
					error:function(xml,status,error)
					{
						console.log(xml,status,error);
					}
				});
			}
		},
		created:function(){
			var _this=this;
			$.ajax({
				type:"get",
				url:"/car/json/brand.json",
				dataType:"json",
				async:true,
				success:function(json){
					_this.brandArr=json;
				},
				error:function(xml,status,error){
					console.log(xml,status,error)
				}
			});
		
			$.ajax({
				type:"get",
				url:"/car/json/screen.json",
				dataType:"json",
				async:true,
				success:function(json){
					_this.screenArr=json;
				},
				error:function(xml,status,error){
					console.log(xml,status,error)
				}
			});
			$.ajax({
				type:"get",
				url:"/car/json/type.json",
				dataType:"json",
				async:true,
				success:function(json){
					_this.typeArr=json;
				},
				error:function(xml,status,error){
					console.log(xml,status,error)
				}
			});
		},
	}
});
