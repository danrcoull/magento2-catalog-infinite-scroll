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
                layoutMode: 'fitRows'
            });

            // get Isotope instance

            //TODO:: Extend to use either masony, isotope etc based on config.

            var iso = $grid.data('isotope');


            var $scroll = element.infiniteScroll({
                path: self.options.nextClass,
                append: self.options.itemSelector,
                history: 'push',
                historyTitle: false,
                outlayer: iso,
                button: self.options.button,
                // load pages on button click
                scrollThreshold: false,
                // disable loading on scroll
                onInit: function() {
                    self.hideNav()
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