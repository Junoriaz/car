define(function(require,exports,module){
	return{
		data:function(){
			return{
				num:0,
				listArr:[],
				Url:"/mybuy/issue"
			}
		},
		methods:{
			choose:function(e,index){
				var _this=this;
				if(!_this.listArr[index].navBool){
				_this.listArr[index].navBool=true;
				_this.num++;
				}
				else{
					_this.listArr[index].navBool=false;
					_this.num--;
				}
			},
			delect:function(event,index){
				var _this=this;
				if(_this.num==0){
					alert('未选中');
				}
				else{
				var delectBool=confirm('确定删除?');
					
				}
				if(delectBool){
					_this.num=0;
					for(var i=_this.listArr.length-1;i>=0;i--){
						console.log(_this.listArr[i].navBool,i);
					if(_this.listArr[i].navBool)
					_this.listArr.splice(i,1);
					}
				}
			}

		},
		created:function(){
			var _this=this;
			$.ajax({
				url:"/json/mybuy.json",
			dataType:"json",
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
				}
			}
	
});