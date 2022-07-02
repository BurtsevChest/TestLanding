


$('.big_videofile').click(function(e){
  if(f){
    $('.control_panel').toggleClass('active');
    if(volume){
      $('.volume_btn>span').removeClass('active');
    }
      e.preventDefault();
  }
});
