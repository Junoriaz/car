<transition name='fade'>
	<div>
	<div id="carImg"><img :src="message.imgUrl" /></div>
	<div class="car_info">
    <dl>
        <dt>{{message.name}}</dt>
        <dd>外色：{{message.outColor}}</dd>
        <dd class="car_info_dd">发布日期：{{message.date}}</dd>
        <dd>内色：{{message.inColor}}</dd>
        <dd class="car_info_dd">类型：{{message.type}}</dd>
    </dl>
    <strong>{{message.prise}}万元</strong>
</div>
<dl class="car_config">
    <dt>配置:</dt>
    <dd>{{message.deploy}}</dd>
</dl>

<div id="footer">
    <div class="footTel"><router-link to="message.tel+message.telnum">联系电话</a></div>
</div>
</div>
</transition>