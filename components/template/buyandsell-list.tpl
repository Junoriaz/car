<transition name="fade">
	<ul class="buySell">
    <li v-for="list in listArr">
        <router-link :to="list.href">
            <span class="buySell_num">{{list.num}}</span>
            <dl class="buySell_car">
                <dt>{{list.name}}</dt>
                <dd>配置:{{list.deploy}}</dd>
                <dd>{{list.date}}</dd>
            </dl>
        </router-link>
    </li>
</ul>
</transition>