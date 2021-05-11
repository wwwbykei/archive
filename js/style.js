
//navigation
function navCollapse(){//sub menu mobile
    if( $( window ).width() <= 1180 ){
        $( ".nav-gnb > ul > li" ).click( function(){
            $( ".nav-gnb > ul > li" ).removeClass( "active" );
            $( this ).addClass( "active" );
        });
    }else{
        $( "body, .nav-menu, .nav-gnb > ul > li, .bg-close" ).removeClass( "active" );
    }
};
function navBtn(){
    $( ".nav-btn,.nav-search" ).click( function(){
        $( "body,.nav-menu,.bg-close" ).toggleClass( "active" );
    });
    $( "header" ).append( "<div class='bg-close'></div>" );
    $( ".nav-menu" ).bind( 'webkitTransitionEnd otransitionend oTransitionEnd transitionend', function() {
        $( ".bg-close, .nav-close" ).click( function(){
            $( "body, .nav-menu, .bg-close" ).removeClass( "active" );
        });
  //$('#global-search-mobile').focus();
  //$('#global-search-mobile').blur();

    });
};

function loadHeaderFooter(){
    $( "header" ).load( "header.html", function(){
        navCollapse();
        navBtn();
    });
    $( ".global-footer" ).load( "footer.html" );
}

//datepicker
// function datepicker(){
//     $( ".i-month" ).datepicker({
//         format: 'yyyy.mm',
// 	    viewMode: "months", 
// 	    minViewMode: "months",
//         autoclose: true
//     });
//     $( ".i-date" ).datepicker({
//         format: 'yyyy.mm.dd',
//         autoclose: true,
//         todayHighlight: true
//         // startDate: 'today',
//         // daysOfWeekDisabled : [0,6],
//         // language : "kr"
//     })
// }
//tooltip
function tooltip(){
	$( ".tooltip" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['right', 'top', 'left', 'bottom']
	});
	$( ".tooltip-top" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['top', 'right', 'left', 'bottom']
	});
	$( ".tooltip-bottom" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['bottom', 'top', 'right', 'left']
	});
    $( ".tooltip-arrowless:not(.disabled)" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['right', 'top', 'left', 'bottom'],
	    theme: ['tooltipster-arrowless'],
	    arrow: false
	});
	$( ".tooltip-clickable" ).tooltipster({
		contentCloning: true,
	    minWidth: 80,
	    side: ['right', 'top', 'left', 'bottom'],
		trigger: 'custom',
		interactive: true,
		contentAsHTML: true,
		triggerOpen: {
		    mouseenter: true
		},
		triggerClose: {
		    mouseleave: true
		}
	});
	$( ".tooltip_templates a" ).on('click', function() {
		$(".tooltip_templates").hide();
	});
}

function setHiddenBtn(){
	if ( $(this).scrollTop() > 100 ) {
		$( ".btn-show-scroll" ).fadeIn();
	}else{
		$( ".btn-show-scroll" ).fadeOut();
	}
};
function setBtntop(){
	$( "a[href='#top']" ).click(function(){
        $('html,body').animate({ scrollTop:0 }, 100 );return false;
    });
};

$( document ).ready( function(){
	loadHeaderFooter();
	setBtntop();
});

$( window ).resize( function(){
    navCollapse();
});

$( window ).load( function(){
    tooltip();
});

$( window ).scroll( function(){
	setHiddenBtn();
});