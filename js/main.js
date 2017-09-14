window.onload = function(){
  $(window).on('resize',setImg).trigger('resize');
  carsouelMove();
  setbg_img()
  clickFrame()
  bs()
}

/*轮播图片响应式，动态获取轮播图片*/
function setImg(){
  var windowWidth = $(window).width();
  var isSmallSreen = windowWidth < 768;
  $('#main-banner .carousel-inner .item').each(function(i,item){
    var $item = $(item);
    // console.log($item.data('image-xs'));
    // console.log($item.data('image-lg'));
    var imgSrc = isSmallSreen ? $item.data('image-sm') : $item.data('image-lg');
    $item.css('backgroundImage','url("'+imgSrc+'")');
    if(isSmallSreen){
      $item.html('<img src="'+imgSrc+'">');
    }else{
      $item.empty();
    }
  });
}

// /*初始化tooltips工具提示*/
// function tooltips(){
//   $('[data-toggle="tooltip"]').tooltip();
// }

/*手指在轮播滑动，轮播左右显示*/
function carsouelMove(){
  var $carousel = $('#main-banner');
  var startX;
  var endX;
  $carousel.on('touchstart',function(e){
    startX = e.originalEvent.changedTouches[0].clientX;
    // console.log(startX);
  });
  $carousel.on('touchmove',function(e){
    endX = e.originalEvent.changedTouches[0].clientX;
    // console.log(endX);
  });
  $carousel.on('touchend',function(e){
    var distance = Math.abs(startX-endX);
    if(distance>50){
      $carousel.carousel(startX>endX ? 'next' : 'prev');
    }
  });
}

/**在pic中使用对应背景图片**/
function setbg_img() {
  $('.pic').each(function(index) {
    // console.log($(this))
    $(this).css('backgroundImage', 'url("D:/work2/bootstrap_work/travel-index/images/pic0'+(index+1)+'.jpg")')
  })
}

/**当点击frame时触发**/
function clickFrame() {
  // console.log($('.frame'))
  $('.frame').on('mouseenter', function() {
    // console.log($(this))
    $(this).children('.pic').css('outline', 'rgb(29, 210, 175) solid 2px')
    $(this).children('.desc').css('backgroundColor', 'rgb(29, 210, 175)').animate({
      height: '60px'
    })
  })
  $('.frame').on('mouseleave', function() {
    // console.log($(this))
    $(this).children('.pic').css('outline', 'rgb(238, 238, 238) solid 2px')
    $(this).children('.desc').css('backgroundColor', 'rgb(238, 238, 238)').animate({
      height: '40px'
    })
  })
}

/**实现横向滚动**/
function bs() {
  var wrapper = document.querySelector('.wrapper')
  var scroll = new BScroll(wrapper, {
    scrollX: true,
    click: true
  })
  $('.board').each(function() {
    $(this).on('click', function() {
      $(this).siblings('.board').css('border-top', '1px solid rgb(238, 238, 238)')
      $(this).css('border-top', '3px solid rgb(29, 210, 175)')
    })
  })
}
