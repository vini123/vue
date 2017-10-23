<template>
	<div class="container likes">
		<span v-for="(item, index) in likes" v-bind:class="{select:item.selected}" v-on:click="userselect(index)">
			{{item.text}}
		</span>
	</div>
</template>

<script>
	
	export default {

		data(){ return {
				name: '七月羽歌',
				likes:[
					{
						text:'热血江湖',
						selected: true
					},
					{
						text:'王者荣耀',
						selected: false
					},
					{
						text:'剑侠情缘',
						selected: false
					},
					{
						text:'跑跑卡丁车',
						selected: false
					},
					{
						text:'地下城勇士',
						selected: false
					}
				],
				select:false
			}
		},

		methods:{
			userselect (index1){

				this.likes.forEach(function(value, index2){
					value.selected = false;

					if(index1 == index2)
						value.selected = true;

				})
			}
		}
	}

</script>

<style type="text/css">

	.likes{
		text-align: center;
	}

	span{
		display: inline-block;
		padding: 6px 14px;
		margin: 10px 5px;
		border-radius: 5px;
		color: #fff;
		background-color: #ff7f50;
		cursor: pointer;
	}

	span:first-child{
		margin-left: 0;		
	}

	span:last-child{
		margin-right: 0;
	}

	.select{
		background-color: #f06bd4;;
	}
</style>