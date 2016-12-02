
<transition name='fade'>
	<ul id="nav" class="clearfix">
    <li v-for="nav in navArr"><router-link :to="nav.href">{{nav.list}}</router-link ></li>
</ul>
</transition>
