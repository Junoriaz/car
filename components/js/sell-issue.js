define(function(){
	return{
		data:function(){
			return{
				conditionStr:'',
			cartypeArr:[
					{
						name:"车型车系",
						now:"品牌 车型 车系",
					fixBool:false
					},
					{
						name:"外色",
						now:"白色",
					fixBool:false
					},
					{
						name:"内色",
						now:"黑色",
					fixBool:false
					}
			],
			cartype2Arr:[
					{
						name:"价格",
						now:"价格",
					fixBool:false
					},
					{
						name:"类型",
						now:"类型",
					fixBool:false
					}
			],
			handwrite:"配置 需要手动填写",
			typelistArr:[],
			priseArr:[],
			brandArr:[],
			outColorArr:[],
			inColorArr:[],
			navBool:false
			
			}
		},
		methods:{
			showFix:function(Arr,index){
				
				console.time("a");
				var _this=this;
				_this.navBool=true;
				Arr[index].fixBool=true;
				console.log(_this.cartypeArr.length,_this.cartype2Arr.length,index)
				for(var i=0;i<_this.cartypeArr.length;i++ ){
					if(i!=index||Arr!=_this.cartypeArr){
					_this.cartypeArr[i].fixBool=false;
					}
				}
				for(var j=0;j<_this.cartype2Arr.length;j++ ){
					if(j!=index||Arr!=_this.cartype2Arr){
					_this.cartype2Arr[j].fixBool=false;
					}
				}
				console.timeEnd("a");
			},
			hideFix:function(e){
				var _this=this;
				var target=e.target;
				if(target.id=='Js-fix')
				_this.navBool=false;
			},
			conditionFun:function($event,Arr,index,carName,seriesName,brandName){
				$event.stopPropagation();
				var _this=this;
				_this.conditionStr=brandName+" "+seriesName+" "+carName;
				Arr[index].now=_this.conditionStr;
				_this.navBool=false;
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
				url:"/car/json/outcolor.json",
				dataType:"json",
				async:true,
				success:function(json){
					_this.outColorArr=json;
				},
				error:function(xml,status,error){
					console.log(xml,status,error)
				}
			});
			
			$.ajax({
				type:"get",
				url:"/car/json/incolor.json",
				dataType:"json",
				async:true,
				success:function(json){
					_this.inColorArr=json;
				},
				error:function(xml,status,error){
					console.log(xml,status,error)
				}
			});
			$.ajax({
				type:"get",
				url:"/car/json/typelist.json",
				dataType:"json",
				async:true,
				success:function(json){
					_this.typelistArr=json;
				},
				error:function(xml,status,error){
					console.log(xml,status,error)
				}
			});
			
			$.ajax({
				type:"get",
				url:"/car/json/prise.json",
				dataType:"json",
				async:true,
				success:function(json){
					_this.priseArr=json;
				},
				error:function(xml,status,error){
					console.log(xml,status,error)
				}
			});
		}
	}
});