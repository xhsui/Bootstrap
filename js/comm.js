$('.left-nav>ul>li').click(function(){
	if($(this).find('ul').text()){
		$(this).toggleClass('curr');
	}
})

function toggleNav(){
	$('.left-nav').toggleClass('active');
}