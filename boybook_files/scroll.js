$(document).ready(function(){
	var h3_height = document.documentElement.clientHeight;
    var onScroll = function(){
		var this_scrollTop = $(this).scrollTop();
		
		var scroll = this_scrollTop + (h3_height / 1.2);
        $(".fadeout").each(function(i, e) {
            var top = $(this).offset().top;
            if (scroll >= top) {
                $(this).css("animation-play-state", "running");
                //alert("top=" + top + "\noffsettop=" + $(this).offset().top + "\nscroll=" + scroll + "\n展示啦！")
            }
        })
	};
    onScroll();
	$(window).scroll(onScroll);
	
});