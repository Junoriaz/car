define(function(){
	return{
		ulObj:$('.Js-list'),
		startY:0,
		endY:0,
		moveY:0,
		refreshBool:false,
		moreBool:false,
		moveYMax:150,
		JsMoreNode:null,
		JsRefreshNode:null,
		touchFun:function(e,obj,callBack){
			var _this=this;
			var scrollTop=$('html').scrollTop()+$('body').scrollTop();
			var target=event.targetTouches[0];
			var winH=$(window).height();
			var webHeight=$('html').height();
			var objHeight=obj.height();
			if(event.type=='touchstart'){
				_this.startY=target.pageY;
				if(objHeight<winH){
					_this.JsMoreNode.show();
				}
			}
			else if(event.type=='touchmove'){
				$(obj).css("transition","");
					_this.endY=target.pageY;
				if(scrollTop<=0){
					_this.moveY=_this.endY-_this.startY;
//					console.log(_this.endY,_this.startY);
					if(_this.moveY>0){
					event.preventDefault();
					obj.css('transform','translate(0,'+_this.moveY/3+'px)');
					_this.refreshBool=true;
					if(_this.moveY>_this.moveYMax){
						_this.JsRefreshNode.text("松开刷新");
					}
					}
				}
				console.log(scrollTop+winH,webHeight);
				if(scrollTop+winH+1>=webHeight){
					console.log(-_this.moveY);
					_this.moveY=_this.endY-_this.startY;
					if(_this.moveY<=0){
						event.preventDefault();
						obj.css('transform','translate(0,'+_this.moveY/3+'px)');
						_this.moreBool=true;
					if(-_this.moveY>_this.moveYMax){
						_this.JsMoreNode.text("松开加载");
					}
					}
				}
				}
				
			else if(event.type=='touchend'){
				if(_this.refreshBool){
					obj.css({'transition':'transform 0.4s','transform':'translate(0,0)'});
					if(_this.moveY>_this.moveYMax){
						window.location.reload();
					}
				}
				if(_this.moreBool){
					obj.css({'transition':'transform 0.4s','transform':'translate(0,0)'});
					if(-_this.moveY>_this.moveYMax){
						_this.pageNum++;
						callBack(_this.pageNum);
						_this.moreBool=false;
						setTimeout(function(){
							_this.JsMoreNode.text("下拉更多");
						},400);
					}
				}
			}
			
		},
		init:function(callBack){
			var _this=this;
			document.smeFun=function(e){
				var obj=$(this).find(".Js-list");
				_this.JsMoreNode=$(this).find(".Js-more");
				_this.JsRefreshNode=$(this).find(".Js-refresh");
				_this.touchFun(e,obj,callBack);
			};
			document.addEventListener("touchstart",document.smeFun);
			document.addEventListener("touchmove",document.smeFun);
			document.addEventListener("touchend",document.smeFun);
		}
	}
});