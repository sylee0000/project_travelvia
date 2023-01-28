//top_btn

$(function(){

  $(window).scroll(function(){
    if($(window).scrollTop() >= 400){
      $('.btn_top').fadeIn(500)
    } else{
      $('.btn_top').fadeOut(500)
    }
  })

//scrollto plugin 사용

$('.btn_top').click(function(e){
  $(window).scrollTo(this.hash || 0,500);
})

})