// BROWSER DETECTION
  var matched, browser;
  
  $.uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
      /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
      /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
      /(msie) ([\w.]+)/.exec( ua ) ||
      ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
      [];

    return {
      browser: match[ 1 ] || "",
      version: match[ 2 ] || "0"
    };
  };

  matched = $.uaMatch( navigator.userAgent );
  browser = {};

  if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
  }

  // Chrome is Webkit, but Webkit is also Safari.
  if ( browser.chrome ) {
    browser.webkit = true;
  } else if ( browser.webkit ) {
    browser.safari = true;
  }

  $.browser = browser;
// BROWSER DETECTION


  
  $(document).on('click', '.btn_fancybox-close', function(event){
    $.fancybox.close();
    event.preventDefault();
  })

  $(".fancypic").fancybox({
    fixed: false,
    loop: true,
    nextEffect: 'fade',
    prevEffect: 'fade',
    mouseWheel: false,
    padding: [10, 10, 10, 10],
    margin: [25, 30, 25, 25],
    beforeClose: function(){},
    beforeClose: function(){},
    beforeShow: function () {
      $('.fancybox-skin').addClass('fancybox-skin-pic');
    }
  });
  
  $('[data-fancybox]').on('click', function(){
    var name = '.'+$(this).attr('data-fancybox');
    $.fancybox.open($(name), {
      closeBtn: false,
      fixed: false,
      autoCenter: false,
      fitToView: false,
      padding: [0, 0, 0, 0],
      margin: [10, 0, 10, 0],
      scrolling: 'no',
      afterShow : function(){},
      beforeShow: function(){},
      afterClose : function() {},
      afterLoad: function() {}
    });
    return false;
  })


function isMobile() { 
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
    return true;
  } else {
    return false;
  }
}


$(function(){


  function CheckStick(stick,currrent_scroll)
  {
   
    var stick_node = "."+stick;
    var stick_offset = $(stick_node)[0].offsetTop;
   
    var stick_dom = $("main").find(stick_node);
    var stick_dom_offset = $(stick_dom)[0].offsetTop;
    
    var scroll_list = $(".sticker-list");
    var scroll_list_ScrollHeight = scroll_list[0].scrollHeight;
 

    var already_exists = $(scroll_list).find(stick_node);
     
  
       
    if(!already_exists.length)
    {

      var sum = currrent_scroll + scroll_list_ScrollHeight;

      if(currrent_scroll >= stick_dom_offset)
      {
         // add sticker 
        var new_sticker_item = $("<a>").html($(stick_node).html());
        
        new_sticker_item.attr({
          "class": stick,
          "id":stick_dom_offset
        });

        $(new_sticker_item).addClass("sticker-list__item");
        $(new_sticker_item).appendTo(".sticker-list");
      }
    }
    else 
    {     
      if(currrent_scroll < stick_dom_offset) 
        $(scroll_list).find(stick_node).remove();
    }
  
  }

  function CheckStickers(currrent_scroll){
     
     for(var i=1; i < 6; i++) 
      CheckStick("stick"+i,currrent_scroll);
     
  }




  function CountDeletedStickers(cur){
       
       var d = 0;
       for(var i=1; i < 6; i++) {
          
          var stick_node = "."+"stick"+i;
          var stick_dom = $("main").find(stick_node);
          var stick_dom_offset = $(stick_dom)[0].offsetTop;
       
             if(cur >= stick_dom_offset)
               d++;
   
       }
      

       return  d;

  }

  
  $(document).on("click",".sticker-list__item",function(e){
    e.preventDefault();
    var scroll_height = $(".sticker-list");


    var del = CountDeletedStickers($(this).attr("id"));
       if(del!=1)
    destination = $(this).attr("id") -(del*60);
    else  destination = $(this).attr("id") - 20;
    $('html:not(:animated), body:not(:animated)').animate({scrollTop: destination}, 400);
   
  });

  

  $(window).scroll(function(){
  
    CheckStickers($(window).scrollTop());
  });
});



$(".preloader__curtain").addClass("preloader__curtain--loaded");

  var span = document.getElementById('dots');

var int = setInterval(function() {
    if ((span.innerHTML += '.').length == 4) 
        span.innerHTML = '';
    //clearInterval( int ); // at some point, clear the setInterval
}, 450);
/*
  Поиск ближайшего родителя по селектору
  https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README-ru.md#1.6
*/

 setTimeout(function() {
    $(".preloader__wrapper").addClass("preloader__wrapper--loaded");

 },3800);

  setTimeout(function() {
    $(".fake-content").addClass("fake-content--closed");
    $("main").fadeIn("slow");

 },4200);


 
 
 
    function items_equal() {
    $('.items_equal:visible').each(function(){
      var itemTop_arr = [],
        itemTop_max = 0,
        itemHeight_arr = [],
        $items_list = $(this);
        
      $('.equal', $items_list).each(function(){
        $(this).attr({style: ''});
      })
      
      $('.equal', $items_list).each(function(){
        var item_y=Math.round($(this).offset().top);
        if (item_y>itemTop_max) {
          itemTop_max=item_y;
          itemTop_arr.push(itemTop_max);
        }
      })
      $.each(itemTop_arr, function(key,value) {
        var item_h_max = 0;
        $('.equal', $items_list).each(function() {
          if (Math.round($(this).offset().top)==value) {
            var item_h = $(this).height();
            if (item_h>item_h_max) {
              item_h_max=item_h;
            }
          }
        })
        itemHeight_arr.push(item_h_max);
      })
      $.each(itemTop_arr, function(key,value) {
        $('.equal', $items_list).each(function() {
          var offset_top = Math.round($(this).offset().top);
          if (offset_top==value || offset_top==value+1 || offset_top==value-1) {
            $(this).css({minHeight: itemHeight_arr[key]});
          }
        })
      })
    })
  } 

 function inpBtns_init($input){
    $input.each(function(){
      var $inp_btns = $(this).parents('.inp_btns');
      if ($(this).attr('type')=='radio') {
        if (!$(this).parents('.inp_btn').length) {
          $(this).wrap('<div class="inp_btn radio"></div>')
        }
        if ($(this).prop('checked')) {
          var $inp_btn = $(this).parents('.inp_btn');
          $('.inp_btn', $inp_btns).removeClass('active').parents('.inpBtn_item').removeClass('active');
          $inp_btn.addClass('active').parents('.inpBtn_item').addClass('active');
        }
      }
      else {
        if (!$(this).parents('.inp_btn').length) {
          $(this).wrap('<div class="inp_btn checkbox"></div>')
        }
        if ($(this).prop('checked')) {
          var $inp_btn = $(this).parents('.inp_btn');
          $inp_btn.addClass('active').parents('.inpBtn_item').addClass('active');
        }
      }
    })
  }

$(window).load(function(){ 
        items_equal();
    elems_animate();
    elems_restruct();
    
    $('.projs_box_a .carousel_a, .opins_box_a .carousel_a, .shop_box_a .carousel_a, .prodsRels_box .carousel_a, .posts_box_a .carousel_a').each(function(){
      carousel_init($(this), {duration: 500, center: true});
    })
    $('.partners_box_a .carousel_a').each(function(){
      carousel_init($(this), {duration: 500});
    }) 
  });

  


    function carousel_init($carousel, options){
    var $slc = $('.slides_list_crop', $carousel),
      $slw = $('.slides_list_wrap', $carousel),
      $sl = $('.slides_list', $carousel),
      $nav_btns = $('.nav_btns', $carousel),
      carousel = {
        $active: $('.slide.active', $carousel),
        crop_width: 0,
        slides_width: 0,
        slides_width_reduce: 0,
        item_width: 0,
        size: $('.slide', $slc).size(),
        first: $sl.find(".slide.item")
      }
          
    var settingsDefault = {
      size: 'default',
      wrap: 'circular',
      duration: 300,
      center: false,
      scrollToActive: false
    }
    
    var settings = $.extend({}, settingsDefault, options);
    
    var methods = {
      onMove: function(){
        carousel.$first = $slc.jcarousel('first');
        $('.slide', $carousel).removeClass('active');
        carousel.$first.next().addClass('active');
      },
      onResize: function(){
        carousel.$active = $('.slide.active', $carousel);
        carousel.item_width = $('.slide', $slc).outerWidth() + parseInt($('.slide', $slc).css('marginRight'));
        carousel.slides_width_reduce = (carousel.item_width * carousel.size)-2-parseInt($('.slide', $slc).css('marginRight'));
        
        if (settings.size != 'default') {
          $slc.each(function(){
            carousel.crop_width  = $slw.width(),
            carousel.item_width  = carousel.crop_width/settings.size;
            $('.slide', this).width(carousel.item_width);
          })
        }
        
        
        $nav_btns.removeClass('enabled');
        $carousel.removeClass('scrollable').addClass('notScrollable');
        $slc.attr({style: ''});
        
        carousel.crop_width = $slw.width(),
        carousel.slides_width = 0;
      
        $('.slide', $carousel).each(function(){
          carousel.slides_width = carousel.slides_width + $(this).outerWidth();
        })
        
        if (carousel.crop_width<carousel.slides_width) {
          if (settings.center) {
            $slc.css({width: carousel.slides_width_reduce, left: '50%', marginLeft: -(carousel.slides_width_reduce+2)/2});
          }
          $nav_btns.addClass('enabled');
          $carousel.addClass('scrollable').removeClass('notScrollable');
        }
      }

    }
    
    methods.onResize();
    
    $(window).resize(function(){
      methods.onResize();
    })
    $carousel.resize(function(){
      methods.onResize();
    })

    //if ($carousel.hasClass('scrollable')) {
      $slc.on('jcarousel:createend jcarousel:animate jcarousel:reload', function(event, carousel) {
             
      })
      
      
    $('.jcarousel')
    .on('jcarousel:createend', function() {
        // Arguments:
        // 1. The method to call
        // 2. The index of the item (note that indexes are 0-based)
        // 3. A flag telling jCarousel jumping to the index without animation
        $(this).jcarousel('scroll', 0, false);
    })
    .jcarousel();


      $slc.jcarousel({
        items:  '.slide',
        wrap:  settings.wrap,
        animation: {
          duration:  settings.duration,
          easing:   'linear'
        },
        transitions: Modernizr.csstransitions ? {
          transforms:   Modernizr.csstransforms,
          transforms3d: Modernizr.csstransforms3d,
          easing:       'ease'
        } : false
      });
      
      if (settings.scrollToActive) {
        $slc.jcarousel('scroll', carousel.$active);
      }
      
      if (isMobile()) {
        $slc.on('swipeleft', function(){
          $slc.jcarousel('scroll', '+=1');
        })
        $slc.on('swiperight', function(){
          $slc.jcarousel('scroll', '-=1');
        })
      }
      
      $('.nav_a', $carousel).on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
      }).on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
      }).jcarouselPagination();

      $('[data-jcarousel-control]', $carousel).each(function() {
        var $btn = $(this);
        $btn.on('jcarouselcontrol:active', function() {
          $(this).removeClass('inactive');
        }).on('jcarouselcontrol:inactive', function() {
          $(this).addClass('inactive');
        }).jcarouselControl($btn.data());
      });

      
    //}
  }

   
  function elems_animate(){
    var scrTop = $(document).scrollTop(),
      win = {
        w: $(window).width(),
        h: $(window).height()
      };
      
    $('.animate').each(function(){
      var offsetTop = $(this).offset().top,
        animateOffset = 100;
      
      if (!$(this).hasClass('animated')) {
        if ($(this).attr('data-animate-offset')) {
          animateOffset = Number($(this).attr('data-animate-offset'));
        }
        if (scrTop > offsetTop - win.h + animateOffset) {
          $(this).addClass('animated');
          $('.counterAnimate', this).each(function(){
            var $val = $(this),
              val = Number($(this).text()),
              counter = 0;
              
            var interval = setInterval(function(){
              if (counter < val) {
                $val.text(counter);
                counter = counter + 1;
              } else {
                $val.text(val);
                clearInterval(interval);
              }
            }, 15);
          })
        }
      }
    })
    $('.animate_list').each(function(){
      var offsetTop = $(this).offset().top,
        animateOffset = 100;
      
      if (!$(this).hasClass('animated')) {
        if ($(this).attr('data-animate-offset')) {
          animateOffset = Number($(this).attr('data-animate-offset'));
        }
        if (scrTop > offsetTop - win.h + animateOffset) {
          $(this).addClass('animated');
          elemsList_animate($('.item', this), 300, 300);
        }
      }
    })

  }
  function elemsList_animate($items, interval, delay, func){
    var items_size = $items.size(),
      counter = 0;
    var timer_1 = setTimeout(function(){
      $items.eq(counter).addClass('animated scale');
      setTimeout(function(){
        $items.removeClass('scale');
      }, 200)
      counter++;
      var timer_2 = setInterval(function(){
        if (counter<items_size) {
          $items.eq(counter).addClass('animated scale');
          setTimeout(function(){
            $items.removeClass('scale');
          }, 200)
          counter++;
        }
        else {
          clearInterval(timer_2);
          //func();
        }
      }, interval+80);
    }, delay)
  }



  function elems_restruct(){
    var scrTop = $(document).scrollTop(),
      win = {
        h: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        w: $(window).width()
      }
      
    $('.sidebarWin').each(function(){
      $('.box_i', this).css({height: win.h-60}); 
    })
    
    $('.fixBox_a.serv_box_a').each(function(){
      var box = {
        top: $(this).offset().top
      }

      if (scrTop>=box.top) {
        $(this).addClass('fixed');
      } else {
        $(this).removeClass('fixed');
      }

    })
    
    $('.notMobile .promo_box_a').each(function(){
      var $box = $(this),
        box = {
          top: $(this).offset().top,
          h: $('.box_i', this).height()
        },
        pTop = box.top - scrTop;
        
      if (pTop<0) {pTop = 0}
      $('.box_i', this).css({top: pTop});
      
    })


    $('.btn_toTopPage').each(function(){
      if (scrTop > win.h/2) {
        $(this).fadeIn(300);
      } else {
        $(this).fadeOut(300);
      }
    })
    
  }



 $( document ).ready(function() { 

  

 
  


 
 });
