<transition name='fade'>
	<div>
	 <router-link id="publish" :to="Url">发布一条</router-link>
	<ul class="manage_list">
        <li v-for='(list,index) in listArr' @touchend="choose($event,index)" >
        	<label :for="list.mg">
            <span class="mg_check" v-bind:class="{mg_checkCur:list.navBool}"><input :id="list.mg" class="mg_c" type="hidden" value="list.value"/></span>
            <div class="mg_list">
                <span class="mg_img"><img :src="list.imgUrl" /></span>
                <dl class="mg_ifo">
                    <dt>{{list.name}}</dt>
                    <dd>
                        <span v-if="list.prise!=null" class="fl">{{list.prise}}<i>万元</i></span>
                        <span v-if="list.see!=null" class="fr">浏览 {{list.see}}</span>
                        <span v-if="list.area!=null" class="fl">{{list.area}}</span>
                        <span v-if="list.payment!=null" class="fr">{{list.payment}}</span>
                    </dd>
                </dl>
            </div>
            </label>
        </li>
    </ul>
    <div id="footer">
        <button @touchend="delect($event)" class="mg_btn" type="submit">删除（<span>{{num}}</span>）</button>
    </div>
    </div>
</transition>