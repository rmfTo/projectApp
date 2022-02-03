$(".gnb>li").hover(function(){
    $(this).children("ul").stop().fadeIn();
},function(){
    $(this).children("ul").stop().fadeOut();
});
$("#prev").click(function prev(){
    $(".slide").prepend($(".slide li").last().clone());
    $(".slide li").last().remove();
});
$("#next").click(function next(){
    $(".slide").append($(".slide li").first().clone());
    $(".slide li").first().remove();
});
var timer = setInterval(function(){
    $(".slide").append($(".slide li").first().clone());
    $(".slide li").first().remove();},3000);
$(".slide").hover(function(){
	clearInterval(timer);
},function(){
	timer = setInterval(function(){
        $(".slide").append($(".slide li").first().clone());
        $(".slide li").first().remove();},3000);
});
var i = 1;
var fslide = setInterval(function(){
    $(".h_b>li").removeClass('top');
    liIndex = i % 3;
    i++;
	if(liIndex == 0){
		$(".h_b>li").eq(liIndex).addClass("top");
	}else if(liIndex == 1){
		$(".h_b>li").eq(liIndex).addClass("top");
	}else if(liIndex == 2){
		$(".h_b>li").eq(liIndex).addClass("top");
	}
},3000);
$("#h_bnr").hover(function(){
    clearInterval(fslide);
},function(){
    fslide = setInterval(function(){
        $(".h_b>li").removeClass('top');
        liIndex = i % 3;
        i++;
        if(liIndex == 0){
            $(".h_b>li").eq(liIndex).addClass("top");
        }else if(liIndex == 1){
            $(".h_b>li").eq(liIndex).addClass("top");
        }else if(liIndex == 2){
            $(".h_b>li").eq(liIndex).addClass("top");
        }
    },3000);
});