(function() {
  // Cache DOM
  var $workName = $('.project-name-overlay');
  var $btnBack = $('.prev #btn-prev');
  var $workSlider = $('.work-conveyor');
  var $wrapWork = $('.proj-wrap');
  var $loadWork = $('.project-load');
  var $mobileNav = $('.nav-toggle');

  $.ajaxSetup({cache: true});

  $workName.on('click', showWork);
  $btnBack.on('click', hideWork);
  $mobileNav.on('click', function() {
    $(this).toggleClass('open');
    $('ul').toggleClass('nav-open');
  })
  smoothScroll(500);
  fixHeight();



  function showWork() {
    var loadName = $(this).attr('data-load');
    var workPath = '/work/' + loadName + '.html';
    var loader = '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';

    $workSlider.css('left', '-100%');
    $loadWork.html(loader).load(workPath);
    $wrapWork.show(600);
  }

  function hideWork() {
    $workSlider.css('left', '0%');
    $wrapWork.hide(600);
  }

  // smoothScroll function is applied from the document ready function original from artists theme
  // https://github.com/DevTips/Artists-Theme
  function smoothScroll (duration) {
  	$('a[href^="#"]').on('click', function(event) {

  	    var target = $( $(this).attr('href') );

  	    if( target.length ) {
  	        event.preventDefault();
  	        $('html, body').animate({
  	            scrollTop: target.offset().top
  	        }, duration);
  	    }
  	});
  }

  function fixHeight() {
    wHeight = $(window).innerHeight();
    $('#home').css('min-height', wHeight);

  }

  $(window).resize(function() {
    fixHeight();
  });

})()
