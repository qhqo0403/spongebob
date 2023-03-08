$(function(){
  $(document).on('touchstart', function(){});
  let second=10;
  let score=0;
  let num=0;
  let timer;
  let counter;
  let clickable=false;

  function randomTarget(){
    num=Math.floor(Math.random()*9);
    let img=$('.b'+num).find('img');
    let plankton=$('.b'+num).children('.plankton');
    img.stop().fadeIn(200);
    plankton.stop().animate({top:0}, 300);
    clickable=true;
    // img.on('click', function(){
    // 	img.attr('src', 'img/hit.png');
    // });
    setTimeout(function(){
      plankton.animate({'top':'126px'}, 300);
    }, 600);
    img.attr('src', 'assets/img/Plankton.png');
    img.attr('dragglable', false);
  }
  timer=setInterval(randomTarget, 1000);

  $('.plankton>img').on('click', function(){
    $(this).attr('src', 'assets/img/hit.png');
    $(this).attr('draggable', false);
    if(clickable){
      score++;
      $('.innerbox').find('.hit').text(score);
      clickable=false;
    }
  });
  
  function countDown(){
    second--;
    $('.innerbox').find('.time').text(second);
    if(second==0){
      clearInterval(counter);
      clearInterval(timer);
      $('#play').hide();
      $('#result_wrapper').show();
      $('#result_wrapper').find('.score').text(score*10);
      let result_img=$('#result_wrapper').find('div[class*=imgbox]')
      if(score*10>80){
        result_img.hide();
        $('#result_wrapper').find('.imgbox1').show();
      }else if(score*10>40){
        result_img.hide();
        $('#result_wrapper').find('.imgbox2').show();
      }else if(score*10<40){
        result_img.hide();
        $('#result_wrapper').find('.imgbox3').show();
      }
    }
  }
  counter=setInterval(countDown, 1000);

  $('#result_wrapper>.again').on('click', function(){
    second=10;
    score=0;
    num=0;
    clickable=false;
    $('#play').show();
    $('#play').find('.hit').text(score);
    $('#play').find('.time').text(second);
    $('#result_wrapper').hide();
    conter=setInterval(countDown, 1000);
    timer=setInterval(randomTarget, 1000);
  });
});