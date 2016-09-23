// Main Slider
$(document).ready(function(){
	'use strict';
	var options = {
		autoPlay: true,
		//nextButton: true,
		//prevButton: true,
		//navigationSkip: true,
		animateStartingFrameIn: true,
		autoPlayDelay:5000,
		pauseOnHover : false,
		transitionThreshold:100,
		preloader: true,
		preloadTheseImages: [
    "_/images/main_slide/home_banner1.jpg",
    "_/images/main_slide/home_banner2.jpg"
]
	};
	try{
		var sequence = $("#sequence").sequence(options).data("sequence");

		sequence.afterLoaded = function(){
			sequence.stopAutoPlay();

			var images_slider = $('img');
			$('.slide-bg').each(function(){
			  var el = $(this)
				, image = el.css('background-image').match(/url\((['"])?(.*?)\1\)/);
			  if(image)
				images_slider = images_slider.add($('<img>').attr('src', image.pop()));
			});
		
			images_slider.imagesLoaded(function(){
				$('.dt-loading').fadeOut(1000);
				sequence.startAutoPlay(6000);
			});
		}
	}
	catch(err){}

});



// Full width and height img background
// Full Screen Slider
$(window).resize(function(){
	'use strict';
	$('.slide-bg').css({
		marginLeft: - ($(window).width() - $('.slide-frame').outerWidth())/2,
		height: ($(window).height()),
		width : ($(window).width()) + 200
	}); 

});

// Slider 2
$(window).resize(function(){
	'use strict';
	$('.slide-2-bg').css({
		marginLeft: - ($(window).width() - $('.slide-frame').outerWidth())/2,
		width : ($(window).width())
	}); 

});

$(window).resize();

// Toggle menu on 2px scoll

$(document).scroll(function () {
	'use strict';
	var y = $(this).scrollTop();
	if (y > 2) {
		$('.home .navbar-default').fadeIn();
	} else {
		$('.home .navbar-default').fadeOut();
	}
});

// Click to scroll on targeted div

$(function() { //When the document loads
	'use strict';
	$(".btn-cta").bind("click", function() {
    $('html, body').animate({scrollTop: $(".grid-icon-container").offset().top - 68}, 1500, 'swing'); //92px is the navbar width
	});
});

// Centering Modal

$(window).resize(function(){

     $('.md-modal').css({
          position:'absolute',
          left: ($(window).width() - $('.md-modal').outerWidth()),
          top: ($(window).height() - $('.md-modal').outerHeight())/2
     });

});

// To initially run the function:
$(window).resize();

/* --- Counter Functions--- */
function dtDoCounter($this,$to) {
    "use strict";
    $j($this).css('opacity', '1');
    $j($this).countTo({
        from: 0,
        to: $to,
        speed: 1500,
        refreshInterval: 50
    })
}

function dtCounter() {
    "use strict";
    if ($j('.dt-counter').length) {
        $j('.dt-counter').each(function () {
            $j(this).appear(function () {
                var $countTo = $j(this).text();
                if ($(window).width()>480) {
                    dtDoCounter($j(this),$countTo);
                }
            }, {
                accX: 0,
                accY: -100
            })
        })
    }

}

/* --- Parallax Background Function--- */
function dtParallax() {
    "use strict";
    var $window = $(window);
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $window.scroll(function() {
            //alert($(this).width());
            if ($(this).width()>768) {
                var position=$bgobj.position();
                var yPos = (($(document).scrollTop() - position.top) / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';
     
                // Move the background
                $bgobj.css({ backgroundPosition: coords });
            }
        }); 
    });    
}


$(document).ready(function(){
    "use strict";
    dtParallax();
    dtCounter();

    $('.dt-loading').fadeOut(4000);
});



  // modified Isotope methods for gutters in masonry
  $.Isotope.prototype._getMasonryGutterColumns = function() {
    var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
        containerWidth = this.element.width();
  
    this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth ||
                  // or use the size of the first item
                  this.$filteredAtoms.outerWidth(true) ||
                  // if there's no items, use size of container
                  containerWidth;

    this.masonry.columnWidth += gutter;

    this.masonry.cols = Math.floor( ( containerWidth + gutter ) / this.masonry.columnWidth );
    this.masonry.cols = Math.max( this.masonry.cols, 1 );
  };

  $.Isotope.prototype._masonryReset = function() {
    // layout-specific props
    this.masonry = {};
    // FIXME shouldn't have to call this again
    this._getMasonryGutterColumns();
    var i = this.masonry.cols;
    this.masonry.colYs = [];
    while (i--) {
      this.masonry.colYs.push( 0 );
    }

};

  $.Isotope.prototype._masonryResizeChanged = function() {
    var prevSegments = this.masonry.cols;
    // update cols/rows
    this._getMasonryGutterColumns();
    // return if updated cols/rows is not equal to previous
    return ( this.masonry.cols !== prevSegments );
  };


 $(function() {
	'use strict';
	/* recent blog post slide */
	var owl = $("#recent-blog-post");

        owl.owlCarousel({

		items		: 4, //10 items above 1000px browser width
		itemsDesktop	: [1199,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [991,2], // 3 items betweem 900px and 601px
		itemsTablet	: false, //2 items between 600 and 0;
		itemsTabletSmall:[640,1],
		itemsMobile	: 1, // itemsMobile disabled - inherit from itemsTablet option
		pagination	: false,
		slideSpeed	: 400

    });

    owl.parent().find(".next").click(function(){
        owl.trigger('owl.next');
      });
    owl.parent().find(".prev").click(function(){
        owl.trigger('owl.prev');
      });

   	// recent featured work slide
	var ftr = $("#featured-work");

	try{

   ftr.owlCarousel({

		items		: 3, //10 items above 1000px browser width
		itemsDesktop	: [1023,2], //5 items between 1000px and 901px
		itemsDesktopSmall : [768,2], // 3 items betweem 900px and 601px
		itemsTablet	: [600,1], //2 items between 600 and 0;
		itemsMobile	: false, // itemsMobile disabled - inherit from itemsTablet option
		pagination	: false,
		slideSpeed	: 400
    });

   }
	catch(err){}


    ftr.parent().find(".next").click(function(){
        ftr.trigger('owl.next');
      });
    ftr.parent().find(".prev").click(function(){
        ftr.trigger('owl.prev');
      });


	$(".owl-slide",ftr)
		.each(function(){
				this.slide = $(this).find('.top-image img');
				this.desc = $(this).find('.description').height(this.slide.height());
				$(this).height(this.slide.height());
		})
		.hover(function(){
		//		$(this).height(this.slide.height());
		//		this.slide.animate({'opacity':'0.3'});
				this.desc.animate({'margin-top':-this.slide.height()});
		},function(){
		//		this.slide.animate({'opacity':'1'});
				this.desc.animate({'margin-top':'0px'});
		});

    // recent post //
    var rct=$('#recent-post');

    try{
	    rct.owlCarousel({

			items		: 1, //10 items above 1000px browser width
			itemsDesktop	: [1000,1], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,1], // 3 items betweem 900px and 601px
			itemsTablet	: [600,1], //2 items between 600 and 0;
			itemsMobile	: false, // itemsMobile disabled - inherit from itemsTablet option
			pagination	: true,
			slideSpeed	: 400
	    });
	}
	catch(err){}

    // popup gallery

	$(window).resize(function(){
			'use strict';

			$('.popup-gallery').css({
		          position:'fixed',
		          'z-index':99999
		     });

	});

	$(window).resize();


	// featured work 2

	var data= $('#featured-work-2'),colWidth=(data.outerWidth(true)/3)-60;

	if($(window).width() >= 480 && $(window).width() < 768){
			colWidth=(data.outerWidth(true)/2)-40;	

	}else if($(window).width() < 480){
			colWidth=data.outerWidth(true)-40;	
	}


	$(".featured-item",data)
		.each(function(){
				this.slide = $(this).find('.top-image img');
				$(this).width(colWidth);
				this.desc = $(this).find('.description').height(this.slide.height());
				$(this).height(this.slide.height());
		})
		.hover(function(){
				this.desc.animate({'margin-top':-this.slide.height()});
		},function(){
				this.desc.animate({'margin-top':'0px'});
		});


	try{

		data.isotope({
		      itemSelector: '.featured-item',
			  resizable: false, 
			  layoutMode: 'masonry',
			  masonry: { 
			  columnWidth: colWidth,
			  gutterWidth: 40
			  },
				getSortData : {
					group : function ( $elem ) {
					  return $elem.attr('group');
					},
					
					random: function ($elem) {
				        if($elem.hasClass('ignore-shuffle')) {
				             return -1;   
				        }
						else if($elem.hasClass('more-post')){
							return 1; 
						}
				        return Math.random();
				    },
					blograndom: function ($elem) {
				        if($elem.hasClass('filter_title')) {
				             return -1;   
				        }
						else if($elem.hasClass('more-post')){
							return 1; 
						}
				        
						return Math.random();
				    }
			  	}
	    });

	}
	catch(err){

	}

	$(window).smartresize(function(){
		'use strict';

		var colWidth=(data.outerWidth(true)/3)-60;

			if($(window).width() >= 480 && $(window).width() < 768){
					colWidth=(data.outerWidth(true)/2)-40;	

			}else if($(window).width() < 480){
					colWidth=data.outerWidth(true)-40;	
			}

		$(".featured-item",data)
		.each(function(){
				$(this).width(colWidth);
				this.slide = $(this).find('.top-image img');
				this.desc = $(this).find('.description').height(this.slide.height());
				$(this).height(this.slide.height());
		});


		try{
			data.isotope({						   
			  masonry: { 
			  columnWidth: colWidth,
			  gutterWidth: 40
			  }
			});
		}
		catch(err){

		}


	});

    var filter=jQuery('.featured-work-2 #featured-filter a');
	
	if(filter.length && data.length){


		
				filter.click(function(e){
				
				var selector = $(this).data('filter');

				if(selector!==undefined){
					
				
						e.preventDefault();

								if(selector=='*'){


			
										data.isotope( {filter:selector}).isotope('reloadItems');
								}else{
									data.isotope( {filter:selector} );

								}							
				}

				$(this).parents('ul').find('a,li').removeClass('active');
				$(this).addClass('active').parent().addClass('active');
				return false;
						
			});
				
	}

	/* client testimonial */

	var testimoni= $('#client-testimonial');

	try{
	    testimoni.owlCarousel({

			items		: 1, //10 items above 1000px browser width
			itemsDesktop	: false, //5 items between 1000px and 901px
			itemsDesktopSmall : false, // 3 items betweem 900px and 601px
			itemsTablet	: false, //2 items between 600 and 0;
			itemsMobile	: false, // itemsMobile disabled - inherit from itemsTablet option
			pagination	: false,
			slideSpeed	: 400
	    });

        $(".client-testimoni .next").click(function(){
	        testimoni.trigger('owl.next');
 	     });

    	$(".client-testimoni .prev").click(function(){
        	testimoni.trigger('owl.prev');
      	});


	}
	catch(err){}


	/* portfolio 4 and 5 col */

	var portfolio=$('#portfolios'),masonryCol=portfolio.hasClass('portfolio-5col')?5 : 4;


	masonryCol=(portfolio.outerWidth(true)-(20*(masonryCol - 1)))/masonryCol;


	try{



		var reloadMore=function(){

			'use strict';

			jQuery('.more-post',portfolio).unbind('click').click(function(e){
													   
				e.preventDefault();
													   
				var scriptUrl=jQuery(this).find('a').attr('href'),hashChanged=true,removeItem = jQuery(this);

				portfolio.isotope('remove', removeItem);

				$.ajax({
					url: scriptUrl+'?'+$.now(),
					type: 'get',
					dataType: 'html',
					async: false,
					success: function(html) {

						var filtered=jQuery(html).find('.portfolio-item');	
						
						filtered.each(function(i,el){
							portfolio.isotope('insert',$(el));
						});
						var popup=jQuery(html).find('.popup-gallery');	
						if($(popup).length){
							popup.each(function(i,el){
								$(el).insertBefore('.md-overlay');
							});
	
							initModal();

						}

						reloadMore();
						hashChanged=false;
					} 
				 });

			});

			$(".portfolio-item.hover-this",portfolio)
			.each(function(){
					this.slide = $(this);
					this.slide.find('.top-image').height(this.slide.height());
					this.desc 	= $(this).find('.description').height(this.slide.height());
			})
			.hover(function(){
					this.desc.animate({'margin-top':-this.slide.height()});
			},function(){
					this.desc.animate({'margin-top':'0px'});
			});

		},

		initModal=function () {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	};



		portfolio.isotope({
				      itemSelector: '.portfolio-item',
					  resizable: false, 
					  layoutMode: 'masonry',
					  masonry: { 
					  	columnWidth: masonryCol,
					  	gutterWidth:20	
					  },
					  sortBy:'sortir',
						getSortData : {
							group : function ( $elem ) {
							  return $elem.attr('group');
							},
							
							sortir: function ($elem) {
						        if($elem.hasClass('ignore-shuffle')) {
						             return -1;   
						        }
								else if($elem.hasClass('more-post')){
									return 1; 
								}
						        return 0;
						    },
							blograndom: function ($elem) {
						        if($elem.hasClass('filter_title')) {
						             return -1;   
						        }
								else if($elem.hasClass('more-post')){
									return 1; 
								}
						        
								return Math.random();
						    }
					  	},
			    
					  filter:'*:not(.more-post)'

		 });

	 	reloadMore();




	 	$(window).smartresize(function(){
		'use strict';
		try{
			portfolio.isotope({						   
			  	masonry: { 
					columnWidth: masonryCol,
					gutterWidth: 20
				}
			});
		}
		catch(err){

		}




		});

	}
	catch(err){

	}





	var filter=jQuery('.portfolio #featured-filter a');
	
	if(filter.length && portfolio.length){
		
				filter.click(function(e){
				
				var selector = $(this).data('filter');

				if(selector!==undefined){
					
				
						e.preventDefault();

								if(selector=='*'){
			
										portfolio.isotope( {filter:'*:not(.more-post)'}).isotope('reloadItems');
								}else{
									portfolio.isotope({filter:selector});
								}							
				}

				$(this).parents('ul').find('a,li').removeClass('active');
				$(this).addClass('active').parent().addClass('active');
				return false;
						
			});
				
	}

	/* portfolio-carousel - detail portfolio */

	$('#portfolio-carousel').carousel();


	/* bog masonry 2, 3 & 4 col */ 


	var $masonry= $('#blog-masonry'),masonryCol=$masonry.hasClass('col-4')? 4 : $masonry.hasClass('col-2')?2:3;

	if($(window).width() >= 768 && $(window).width() < 1024){
		masonryCol=$masonry.hasClass('col-2')?2:3;

	}else if($(window).width() >= 480 && $(window).width() < 768){
		masonryCol=2;

	}else if($(window).width() < 480){
		masonryCol=1;
	}

	colWidth=($masonry.outerWidth(true)-(40*(masonryCol - 1)))/masonryCol;

	$(".masonry-item",$masonry)
		.each(function(){
				$(this).width(colWidth);
		});

	try{

		$masonry.isotope({
		      itemSelector: '.masonry-item',
			  resizable: false, 
			  layoutMode: 'masonry',
			  masonry: { 
			  columnWidth: colWidth,
			  gutterWidth: 40
			  },
				getSortData : {
					group : function ( $elem ) {
					  return $elem.attr('group');
					},
					
					random: function ($elem) {
				        if($elem.hasClass('ignore-shuffle')) {
				             return -1;   
				        }
						else if($elem.hasClass('more-post')){
							return 1; 
						}
				        return Math.random();
				    },
					blograndom: function ($elem) {
				        if($elem.hasClass('filter_title')) {
				             return -1;   
				        }
						else if($elem.hasClass('more-post')){
							return 1; 
						}
				        
						return Math.random();
				    }
			  	}
	    });

	}
	catch(err){

	}

	$(window).smartresize(function(){
		'use strict';

		var masonryCol=$masonry.hasClass('col-4')? 4 : $masonry.hasClass('col-2')?2:3;

		if($(window).width() >= 768 && $(window).width() < 1024){
			masonryCol=$masonry.hasClass('col-2')?2:3;

		}else if($(window).width() >= 480 && $(window).width() < 768){
			masonryCol=2;

		}else if($(window).width() < 480){
			masonryCol=1;
		}

		colWidth=($masonry.outerWidth(true)-(40*(masonryCol - 1)))/masonryCol;

		$(".masonry-item",$masonry)
		.each(function(){
				$(this).width(colWidth);
		});


		try{
			$masonry.isotope({						   
			  masonry: { 
			  columnWidth: colWidth,
			  gutterWidth: 40
			  }
			});
		}
		catch(err){

		}


	});


});
// @prepros-prepend "rio.js"
// @prepros-prepend "dasril.js"
// @prepros-prepend "ata.js"

