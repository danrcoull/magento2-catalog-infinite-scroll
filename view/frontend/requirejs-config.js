var config = {
    paths:{
        'infinitescroll': 'SuttonSilver_InfiniteScroll/js/infinite-scroll.pkgd.min',
        'isotope': 'SuttonSilver_InfiniteScroll/js/isotope.pkgd.min',
        'jquery/bridget': 'SuttonSilver_InfiniteScroll/js/jquery-bridget',
        'imagesloaded': 'SuttonSilver_InfiniteScroll/js/imagesloaded.pkgd.min',
        'jquery/lazyload': 'SuttonSilver_InfiniteScroll/js/lazyload'

    },
    shim: {
        'infinitescroll': {
            deps: ['jquery']
        },
        'imagesloaded': {
            deps: ['jquery']
        },
        'isotope': {
            deps: ['jquery']
        },
        'jquery/bridget': {
            deps: ['jquery']
        },
        'jquery/lazyload': {
            deps: ['jquery']
        },
    },
};