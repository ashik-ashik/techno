
$(document).ready(function(){

    // banner owl carousel
    $('#banner-area .owl-carousel').owlCarousel({
        dots: true,
        items:1,
        loop: true
    });

    // top sale owl carousel
    $('#top-sale-carousel .owl-carousel').owlCarousel({
        dots: false,
        loop: true,
        nav: true,
        responsive:{
            0:{
                items: 1
            },
            500:{
                items: 2,
                nav: false
            },
            700:{
                items: 3
            },
            1000:{
                items: 5
            }
        }
    });

        // new products owl carousel
        $('#new-products .owl-carousel').owlCarousel({
            dots: true,
            loop: true,
            nav: false,
            margin:7,
            autoplay:true,
            responsive:{
                0:{
                    items: 1
                },
                500:{
                    items: 2
                },
                700:{
                    items: 3
                },
                1000:{
                    items: 5
                }
            }
        });
        // our blogs owl carousel
        $('#blog .owl-carousel').owlCarousel({
            dots: true,
            loop: true,
            nav: false,
            margin:15,
            autoplay:true,
            responsive:{
                0:{
                    items: 1
                },
                700:{
                    items: 2
                },
                900:{
                    items: 3
                }
            }
        });
        // blog page header slider owl carousel
        $('#blog-slider .owl-carousel').owlCarousel({
            dots: true,
            loop: true,
            autoplay:true,
            items:1
        });
        // blog page freatured-article owl carousel
        $('.freatured-article .owl-carousel').owlCarousel({
            dots: true,
            loop: true,
            nav: false,
            autoplay:true,
            items:1
        });
        // about page team member owl carousel
        $('#team .owl-carousel').owlCarousel({
            dots: true,
            loop: true,
            nav: false,
            autoplay:true,
            margin: 10,
            responsive:{
                0:{
                    items:1
                },
                767:{
                    items: 2
                },
                991:{
                    items: 3
                },
                1024:{
                    items: 4
                }
            }
        });

        // shop page banner owl carousel
        $('#shop-banner .owl-carousel').owlCarousel({
            dots: true,
            loop: true,
            nav: false,
            autoplay:true,
            items:1
        });
    


    // isotop grid layout
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // filter dada by clicking buttons
    $('.filter-btn-group button').on('click', function(){
        $(".filter-btn-group button").removeClass('is-checked');
        $(this).addClass('is-checked');
        
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter:filterValue});
    });

      // Porfolio isotope and filter
 /* $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });*/



    // product quantity up and down
    let $qty_up = $('.product-quantity .qty-up');
    let $qty_down = $('.product-quantity .qty-down');
    // let $qty_input = $('.product-quantity .qty-input');

    // product qty up
    $qty_up.click(function(e){
        let $qty_input = $(`.qty-input[data-id='${$(this).data("id")}']`);
        if($qty_input.val() >=1 && $qty_input.val() <=14 ){
            $qty_input.val(function(x, defaultValue){
                return ++defaultValue;
            });
        }
    });
    // product qty down
    $qty_down.click(function(e){
        let $qty_input = $(`.qty-input[data-id='${$(this).data("id")}']`);
        if($qty_input.val() >1 && $qty_input.val() <=15 ){
            $qty_input.val(function(x, defaultValue){
                return --defaultValue;
            });
        }
    });







    // add current year
    let currentYearId = $('#current-year');
    let currentYear = new Date().getFullYear();
    currentYearId.text(currentYear);

});


    // about page skill bar
      /*** Skills animation   */
      const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
    
      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      }

      let skilsContent = select('.skill-content');
      if (skilsContent) {
          new Waypoint({
          element: skilsContent,
          offset: '80%',
          handler: function(direction) {
              let progress = select('.skill-progress .skill-bar', true);
              progress.forEach((el) => {
              el.style.width = el.getAttribute('aria-valuenow') + '%'
              });
          }
          })
      }