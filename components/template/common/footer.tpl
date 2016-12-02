
<transition name='fade'>
	<div id="footer">
	    <ul class="footNav clearfix">
	        <li v-for='foot in footArr'><router-link :to="foot.href">{{foot.list}}</router-link></li>
	    </ul>
	</div>
</transition>
