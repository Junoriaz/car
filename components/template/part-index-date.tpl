
<transition name='fade'>
	<div :id="id"><router-link :to="tel+telNum">客服电话：{{telNum.slice(0,4)+'-'+telNum.slice(4,8)+'-'+telNum.slice(8)}}</router-link></div>
</transition>
