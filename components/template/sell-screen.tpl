
<transition name='fade'>
	<div>
	<ul class="filter">
	    <li v-for="(filter,index) in filterArr" class="Jssel" :id="filter.id" @click="showFix(index)">{{filter.list}}</li>
	</ul>
	<div class="fix" :class="{fixIn:navBool}" @click="hideFix" id="Js-fix">
		<ul id="filterUl" v-show="filterArr[0].fixBool">
			<li v-for="screen in screenArr">{{screen.name}}</li>
		</ul>
	 <ul id="brandUl" v-show="filterArr[1].fixBool">
        <li v-for="(brand,index) in brandArr" @click="brand.brandBool=!brand.brandBool;">
            <a href="javascript:void(0)">{{brand.name}}</a>
            <ul v-show="brand.brandBool">
                <li v-for="xi in brand.xiArr" @click='xi.xiBool=!xi.xiBool;$event.stopPropagation();'>
                    <a href="javascript:void(0)">{{xi.name}}</a>
                    <ul v-show="xi.xiBool">
                        <li v-for="car in xi.carArr" @click="conditionFun($event,car.name,brand.name,xi.name)"><a href="javascript:void(0)">{{car.name}}</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    <!---类型-->
    <ul id="sortUl" v-show="filterArr[2].fixBool">
        <li v-for="type in typeArr"><a href="javascript:void(0)">{{type.name}}</a></li>
    </ul>
    <!--确认筛选等-->
    <form class="fix_btn">
        <div class="fix_content">
            <strong>筛选条件：</strong>
             <span v-show="conditionStr!=''">{{conditionStr}}</span>
        </div>
        <div class="fix_button">
            <input class="fix_submit" type="submit" value="确认"  @click='searchFun'/>
            <input class="fix_cancel" type="button" value="取消" @click='hideFix'/>
        </div>
    </form>
    </div>
</div>
</div>
</transition>
