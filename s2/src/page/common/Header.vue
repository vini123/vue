<template>
<div class="container-fluid header">
	<div class="container">
		<div class="nav">
			<ul>
				<li v-for="item in data">
					<a :href="item.href" 
					   v-text="item.text"
					   :class="{active:item.active}">
					</a>
				</li>
			</ul>
		</div>

		<div class="reg-login">
			<a>注册</a>
			<a>登录</a>
		</div>
	</div>	
</div>
</template>

<script type="text/javascript">
	
export default {
		data(){

			return {
				data:[
						{text:'首页', href:'home.html', active: true},
						{text:'新秀', href:'https://mlxiu.com', active: false},
						{text:'排行榜', href:'https://mlxiu.com', active: false}
					]
				}

			}
		}			

</script>

<style type="text/css">
	.header {
	    height: 60px;
	    background-color: #fff;
	    box-shadow: 0 1px 5px rgba(0, 0, 0, .1);
	}

	.header ul {
	    list-style: none;
	    list-style-type: none;
	}

	.header ul li {
	    list-style-type: none;
	    float: left;
	}

	.nav {
	    display: inline-block;
	    height: 60px;
	    line-height: 60px;
	    margin-left: 50px;
	}

	.nav a {
	    display: inline-block;
	    height: 32px;
	    line-height: 32px;
	    padding: 0 15px;
	    border-radius: 5px;
	    font-size: 16px;
	    color: #232323;
	    background-color: #fff;
	    margin: 14px 5px;
	    opacity: 0.8;
	}

	.nav a:not(.active):hover {
	    color: #fff;
	    background-color: #fd3b61;
	}

	.nav .active {
	    color: #fff;
	    background-color: #fd3b61;
	}

	/*注册登录*/
	.reg-login {
	    float: right;
	    margin-right: 50px;
	    height: 60px;
	    line-height: 60px;
	}

	.reg-login a {
	    color: #343434;
	    font-size: 15px;
	    margin-left: 6px;
	}

	.reg-login a:hover {
	    color: #fd3b61;
	}
</style>