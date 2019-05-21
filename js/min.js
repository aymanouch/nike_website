/*global $*/
$(function () {
    'use strict';
    var backArr = ["img1.jpg", "img2.jpg"];
    var imgPro = ['men.png', 'women.png'];
    $('.one .menu ul li a').on('click', function () {
        //1 start prepartion change imag Back
        $('.tow .video').css('background-image', 'url(css/imges/' + backArr[$(this).attr('data-back')] + ')');
        let nameElt = $('.product .info .name-pro span');
        let priceElt = $('.product .info .price-pro span');
        let imgElt = $('.product img');
        imgElt.attr('src', 'css/imges/' + imgPro[$(this).attr('data-back')]);
        //1 end prepartion change imag Back
        
        //2 start animation of the name product
        let nameMen = 'Air Max .',
        nameWom = 'Other pro .';
        function addText () {
            nameElt.append(nameMen[i]);
            i+=1;
            if (i >= nameMen.length) {
                clearInterval(myContent);
            }
    }
        function addText2 () {
            nameElt.append(nameWom[i]);
            i+=1;
            if (i >= nameWom.length) {
                clearInterval(loopFun);
            }
        }
    
        if($(this).attr('data-back') == 0) {
            clearInterval(loopFun);
            nameElt.text('');
            var i = 0;
            var myContent = setInterval(addText, 300);
        } else {
            nameElt.fadeIn(10);
            var i = 0;
            nameElt.text('');
            var loopFun = setInterval(addText2, 300);
        }
   //2 end animation of the name product
    
  //3 start scroll in small screen 
  if ($(window).width() < 600) {
      $('html, body').animate({
          scrollTop : $('.tow').offset().top
      }, 550);
  } 
    });
    //4 media query small screen 
// $(window).on('resize', function () {
//     $('body').css('width', $(window).width() + 'px');
//    });
});