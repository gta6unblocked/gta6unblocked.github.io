$('document').ready(function () {
	// slider
    $('.recommended-games__slider').slick({
        dots: false,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-prev"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-next"></i></button>',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    dots: false,
                    rows: 1,
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('#js-player-start').click(function(e) {
         e.preventDefault();
         $('.player-overlay').css("display","none");
         $('.game-offer__window__frame').append($(this).data('code'));

    });


});

// search
var searchGame = function() {
    if ($( window ).width() < 1040) {
        $('#search-form')[0].submit();
    }
    if ($(this).hasClass('active')) {
        $('#search-form')[0].submit();
    } else {
        $('.search-input').on('keyup input', function(){
            $(this).next().addClass('active');
            if ($(this).val() == '') {
                $(this).next().removeClass('active');
            } else {
                $(this).next().addClass('active');
                $('.btn-search.active').on('click', function(e){
                    $('#search-form')[0].submit();
                });
            }
        });

        if ($('.search').hasClass('active')) {
            $('.search').removeClass('active');
        } else {
            $('.search').addClass('active');
        }
    }
}

document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen;

function onFullScreenEnter() {
  console.log("Enter fullscreen initiated from iframe");
};

function onFullScreenExit() {
  console.log("Exit fullscreen initiated from iframe");
};

// Note: FF nightly needs about:config full-screen-api.enabled set to true.
function enterFullscreen(id) {
  onFullScreenEnter(id);
  var el =  document.getElementById(id);

    var height = $('body').height()
        $(el).css('height', height +'px');

  var onfullscreenchange =  function(e){
    var fullscreenElement = document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement;
    var fullscreenEnabled = document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled;
    console.log( 'fullscreenEnabled = ' + fullscreenEnabled, ',  fullscreenElement = ', fullscreenElement, ',  e = ', e);
  }

  el.addEventListener("webkitfullscreenchange", onfullscreenchange);
  el.addEventListener("mozfullscreenchange",     onfullscreenchange);
  el.addEventListener("fullscreenchange",             onfullscreenchange);

  if (el.webkitRequestFullScreen) {
    el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } else {
    el.mozRequestFullScreen();
  }
  document.querySelector('#'+id + ' button').onclick = function(){
    exitFullscreen(id);
  }
}

function exitFullscreen(id) {
  onFullScreenExit(id);
  document.cancelFullScreen();
  document.querySelector('#'+id + ' button').onclick = function(){
    enterFullscreen(id);
  }
} 