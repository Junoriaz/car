
<transition name='fade'>
	<div class="listContent">
	<div class="listMain Js-list">
	<span class="refresh Js-refresh">下拉刷新</span>
	<ul class="manage_list list">
    <li v-for='list in listArr'>
        <router-link class="mg_list" :to="list.toUrl">
            <span class="mg_img"><img :src="list.imgUrl" /></span>
            <dl class="mg_ifo">
                <dt>{{list.name}}</dt>
                <dd>
                    <span class="fl" v-if='list.price!=null'>{{list.price}}<i>万元</i></span>
                    <span class="fr" v-if='list.see!=null'>浏览{{list.see}}</span>
                    <span class="fl" v-if='list.area!=null'>{{list.area}}</span>
                    <span class="fr" v-if='list.payment!=null'>{{list.payment}}</span>
                </dd>
            </dl>
        </router-link>
    </li>
</ul>
<span class="more Js-more">加载更多</span>
</div>
</div>
</transition>
