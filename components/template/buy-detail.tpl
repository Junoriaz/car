<transition name='fade'>
<div>
			<dl class="buy_person">
    <dt><img :src="message.imgUrl" /></dt>
    <dd>{{message.name}}</dd>
    <dd>{{message.companyname}}</dd>
</dl>

<div class="car_info">
    <dl>
        <dd>外色：{{message.outColor}}</dd>
        <dd class="car_info_dd">发布日期：{{message.date}}</dd>
        <dd>内色：{{message.inColor}}</dd>
        <dd class="car_info_dd">状态：{{message.payment}}</dd>
    </dl>
    <strong>{{message.area}}</strong>
</div>
<dl class="car_config">
    <dt>配置:</dt>
    <dd>{{message.deploy}}</dd>
</dl>
<dl class="car_name">
    <dt>{{message.companyname}}</dt>
    <dd>{{message.name}}</dd>
</dl>
<div id="footer">
    <div class="footTel"><router-link to="message.tel+message.telnum">联系电话</a></div>
</div>
		</div>
</transition>