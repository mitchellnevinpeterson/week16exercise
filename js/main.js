const home = {
	template:`
		<div class="text-center">
        	<h1>Home</h1>
        	<img src="img/castle.jpg" alt="Art work of a castle">
        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    	</div>		
	`
}
const about = {
	template:`
		<div class="text-center">
	        <h1>About</h1>
	        <img src="img/dragon.jpg" alt="Art work of a dragon like creature">
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
	    </div>
	`
}
const contact = {
	template:`
		<div class="text-center">
	        <h1>Contact</h1>
	        <img src="img/forest.jpg" alt="Art work of a forest with lamps in the trees">
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
	    </div>
	`
}
const blog = {
	template:`
		<div class="text-center">
	        <h1>Blog</h1>
	        <img src="img/bridge.jpg" alt="Art work of the golden gate bridge">
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
	    </div>
	`
}
const menu = {
	template:`
		<div class="text-center">
	        <h1>Menu</h1>
	        <img src="img/soldier.jpg" alt="Art work of a soldier entering a new path">
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
	    </div>
	`
}
const router = new VueRouter({
	routes: [
	{
		path: '/home',
		component: home
	},
	{
		path: '/about',
		component: about
	},
	{
		path: '/contact',
		component: contact
	},
	{
		path: '/blog',
		component: blog
	},
	{
		path: '/menu',
		component: menu
	}
	]
})
var routeTest = new Vue ({
	router,
	el:'#app',
	data: {
		
	},
	methods: {

	}
}).$mount('#app')

