<transition name='fade'>
	<div>
	<form>
    <div class="publish_box">
        <ul class="publish_ul">
            <li v-for="(cartype,index) in cartypeArr" @click="showFix(cartypeArr,index)">
                <label for="title">{{cartype.name}}</label>
                <input class="Jssel" id="title" type="text" value="" :placeholder="cartype.now" readonly />
            </li>
        </ul>
    </div>

    <div class="publish_box">
        <ul class="publish_ul">
            <li v-for="(cartype2,index) in cartype2Arr"  @click="showFix(cartype2Arr,index)">
                <label for="price">{{cartype2.name}}</label>
                <input class="arrow arrow_w" id="price" type="text" value="" :placeholder="cartype2.now" />
            </li>
        </ul>
    </div>

    <div class="fix" :class="{fixIn:navBool}" @click="hideFix" id="Js-fix">
        <!---品牌 车系 车型--->
        <ul id="titleUl" v-show="cartypeArr[0].fixBool" >
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
        <!---年份--->
        <ul id="yearUl" v-show="cartypeArr[1].fixBool">
            <li v-for="date in dateArr"><a href="javascript:void(0)">{{date.date}}</a></li>
        </ul>
        <!---外色--->
        <ul id="outColorUl" v-show="cartypeArr[2].fixBool">
            <li v-for="outColor in outColorArr"><a href="javascript:void(0)">{{outColor.color}}</a></li>
        </ul>

        <!---内色--->
        <ul id="inColorUl" v-show="cartypeArr[3].fixBool">
            <li v-for="inColor in inColorArr"><a href="javascript:void(0)">{{inColor.color}}</a></li>
        </ul>
        <!---卖到哪里-->
        <ul id="whereUl" v-show="cartype2Arr[0].fixBool">
             <li v-for="area in areaArr"><a href="javascript:void(0)">{{area.area}}</a></li>
        </ul>
        <!---状态-->
        <ul id="statusUl" v-show="cartype2Arr[1].fixBool">
            <li v-for="payment in paymentArr"><a href="javascript:void(0)">{{payment.payment}}</a></li>
        </ul>
    </div>

    <textarea class="buySell_text publish_text" :placeholder="handwrite"></textarea>

   <input class="buySell_btn" type="submit" value="发布" />
</form>
</div>
</transition>