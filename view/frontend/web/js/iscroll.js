define([
    'jquery',
    'jquery/ui',
    'jquery/bridget',
    'infinitescroll',
    'isotope',
    'imagesloaded',
    'jquery/lazyload',
    "domReady!"
], function($,ui,jQueryBridget,  InfiniteScroll,Isotope, imagesloaded, lazyload){
    "use strict";

    $.widget('mage.iscroll', {
        options: {
            //TODO:: Extend to use based on config.
            nextClass: '.pages-item-next .next',
            itemSelector: '.product-item',
            button: '.view-more-button'
        },
        _create: function () {
            var self = this;
            var element = self.element;

            self.runlazyLoad();

            InfiniteScroll.imagesLoaded = imagesloaded;

            jQueryBridget( 'infiniteScroll', InfiniteScroll, $ );
            jQueryBridget( 'isotope', Isotope, $ );

           var $grid = element.isotope({
                // Isotope options...
                itemSelector: self.options.itemSelector,
                layoutMode: 'fitRows',
                itemSelector: '.grid-item',
                percentPosition: true,
                fitRows: {
                    gutter: 0
                }
            });

            // get Isotope instance

            //TODO:: Extend to use either masony, isotope etc based on config.

            var iso = $grid.data('isotope');


            var $scroll = element.infiniteScroll({
                path: self.options.nextClass,
                checkLastPage: self.options.nextClass,
                status: '.page-load-status',

                scrollThreshold: ((self.options.loadonscroll == true)  ? 100 : false),
                loadOnScroll:  self.options.loadonscroll,

                append: self.options.itemSelector,
                history: 'push',
                historyTitle: true,
               // outlayer: iso,
                button: self.options.button,

                // disable loading on scroll
                onInit: function() {
                    self.hideNav()
                },
                loading: {
                    finishedMsg: "Congratulations, you've reached the end of the internet.",
                    img: self.options.image,
                    speed: 'fast',
                }

            });

            $scroll.on( 'append.infiniteScroll', function( event, response, path, items ) {
                self.runlazyLoad();
            });
        },
        runlazyLoad:function(){
            var self = this;
            $(".product-image-photo").lazyload({
                threshold : 200,
                effect : "fadeIn"
            });
        },
        hideNav : function()
        {
            var self = this;
            //check if pagination hide exists otherwise set default
            var cssClass = '.toolbar-products';
            if('paginationClass' in self.options){
                cssClass = self.options.paginationClass
            }
            $(cssClass).hide();
        }



    });
    return $.mage.iscroll;
});