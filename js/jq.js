$(document).ready(function(){
	var i = 0
	$('.cr_li').eq(0).addClass('add_cr_li')
	$('.cr_btn').eq(0).click(function(){
		i--
		if(i < 0){
			i = $('.cr_li').length - 1
		}
		$('.cr_li').eq(i).addClass('add_cr_li').siblings().removeClass('add_cr_li')
		var w = $('.cr_right_li').width()
		$('.cr_right_ul').css({'margin-left':i*-w})
	})
	$('.cr_btn').eq(1).click(function(){
		i++
		if(i > $('.cr_li').length - 1){
			i = 0
		}
		$('.cr_li').eq(i).addClass('add_cr_li').siblings().removeClass('add_cr_li')
		var w = $('.cr_right_li').width()
		$('.cr_right_ul').css({'margin-left':i*-w})
	})
	$('.top_li').click(function(){
		var hei = $('.top').height()
		var index = $(this).index()
		$('html,body').animate({'scrollTop':hei*index},1000)
	})
	$(window).scroll(function(){
		var hei = $('.top_head').height()
		var top = $(window).scrollTop()
		if(top>hei){
			$('.top_head').addClass('add_top_head')
		}else{
			$('.top_head').removeClass('add_top_head')
		}
	})
	$('.top_head_right').click(function(){
		$('.top_head_right_list').eq(0).toggleClass('add_op')
		$('.top_head_right_list').eq(1).toggleClass('add_rotate')
		$('.top_head_right_list').eq(2).toggleClass('add_op')
		$('.head_ul').toggleClass('add_head_ul')
	})
	$('body').niceScroll({
		cursorcolor: "#1e2dff", //滚动条的颜色
		cursorborder: "0", // 滚动条边框
		zindex: "4000", //给滚动条设置z-index值
		background:"#ffa7ef",//滚动条的背景色
		cursoropacitymax: 0.3, //滚动条的透明度，从0-1
	})
})
