var top_img = document.getElementsByClassName('top_img')
var top_h1 = document.getElementsByClassName('top_h1')
var about_h1 = document.getElementsByClassName('about_h1')
var about_img = document.getElementsByClassName('about_img')
var work_moon = document.getElementsByClassName('work_moon')
var cr_h1 = document.getElementsByClassName('cr_h1')
var move_img = document.getElementsByClassName('move_img')
var contact_moon = document.getElementsByClassName('contact_moon')
window.addEventListener('scroll',function(){
	var value = window.scrollY
	top_img[2].style.top = value/5 + 'px'
	top_img[0].style.bottom = value/4 + 'px'
	top_h1[0].style.bottom = value/10 + 'px'
	about_h1[0].style.left = value/7 + 'px'
	about_img[0].style.bottom = value/5 + 'px'
	work_moon[0].style.top = value/4 + 'px'
	cr_h1[0].style.bottom = value/15 + 'px'
	move_img[0].style.width = value/40 + '%'
	contact_moon[0].style.top = value/5.5 + 'px'
})