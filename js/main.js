var win = $(window).width();
console.log(win);

var $root = $('html, body');
$('a').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        window.location.hash = href;
    });
    return false;
});

if(win <= 1365 && win >= 1200) {
    $("body").css("overflow-x","hidden");
}

if(win <= 767) {
    var a =  document.getElementById("photo");
    a.src = "img/header-photo-mob.png";
}

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<img class="prev" src="img/slider-arrow.png">',
    nextArrow: '<img class="next" src="img/slider-arrow.png">',
    fade: true
});
$('.slider-nav').slick({
    slidesToShow: 6,
    slideToScroll: 0,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});

// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     fade: true,
//     asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//     slidesToShow: 5,
//     // slidesToScroll: 0,
//     asNavFor: '.slider-for',
//     dots: false,
//     centerMode: true,
//     focusOnSelect: true
// });

// $(".about__gallery-img").owlCarousel({
//     loop: true,
//     nav: true,
//     dots: false,
//     items:1
// });

// $(".gallery__block-big").owlCarousel({
//     loop: true,
//     nav: true,
//     dots: false,
//     items:1
// });

$(".review__block-text").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items:1
});

$(".boots.first .boots__block .boots__block-info-img .small-img ul li").click(function () {
    var e = $(this).attr("class");

    if($(this).hasClass("active2")) {
        $(this).addClass("active2");
        $(".boots.first .boots__block .boots__block-info-img .big-img a." + e).addClass("active2");
    } else {
        $(".boots.first .boots__block .boots__block-info-img .small-img ul li").removeClass("active2");
        $(".boots.first .boots__block .boots__block-info-img .big-img a").removeClass("active2");
        $(this).addClass("active2");
        $(".boots.first .boots__block .boots__block-info-img .big-img a." + e).addClass("active2");
    }
});

$(".boots.second .boots__block .boots__block-info-img .small-img ul li").click(function () {
    var e = $(this).attr("class");

    if($(this).hasClass("active2")) {
        $(this).addClass("active2");
        $(".boots.second .boots__block .boots__block-info-img .big-img a." + e).addClass("active2");
    } else {
        $(".boots.second .boots__block .boots__block-info-img .small-img ul li").removeClass("active2");
        $(".boots.second .boots__block .boots__block-info-img .big-img a").removeClass("active2");
        $(this).addClass("active2");
        $(".boots.second .boots__block .boots__block-info-img .big-img a." + e).addClass("active2");
    }
});

// var data = [{
//     elem: 'header__paralax-fifth',
//     start: 'transition:1s; top: 335px',
//     finish: 'transition:1s; top: -100px'
// }, {
//     elem: 'para1',
//     start: 'transition:0.5s; transform:translateY(0rem)',
//     finish: 'transition:0.5s; transform:translateY(-20rem)'
// }, {
//     elem: 'para3',
//     start: 'transition:0.5s; transform:translateY(0rem)',
//     finish: 'transition:0.5s; transform:translateY(-20rem)'
// }, {
//     elem: 'para4',
//     start: 'transition:0.5s; transform:translateY(0rem)',
//     finish: 'transition:0.5s; transform:translateY(-20rem)'
// }, {
//     elem: 'para5',
//     start: 'transition:0.5s; transform:translateY(0rem)',
//     finish: 'transition:0.5s; transform:translateY(-20rem)'
// }, {
//     elem: 'para6',
//     start: 'transition:0.5s; transform:translateY(0rem)',
//     finish: 'transition:0.5s; transform:translateY(-20rem)'
// }, {
//     elem: 'para7',
//     start: 'transition:0.5s; transform:translateY(0rem)',
//     finish: 'transition:0.5s; transform:translateY(-20rem)'
// }, {
//     elem: 'para8',
//     start: 'transition:0.5s; transform:translateY(0rem)',
//     finish: 'transition:0.5s; transform:translateY(-20rem)'
// }, {
//     elem: "para9",
//     start: 'transition:0.5s; transform:translateY(0rem)',
//     finish: 'transition:0.5s; transform:translateY(-20rem)'
// }];
// // console.log(data);
// var hf = window.innerHeight / 4;
// var hs = hf * 2;
//
// var func = function func(datas) {
//     datas.forEach(function (elem) {
//         var el = [].slice.call(document.getElementsByClassName(elem.elem));
//         el.forEach(function (block) {
//             block.setAttribute('data-' + hs + '-top', elem.start);
//             block.setAttribute('data-' + hf + '-top', elem.finish);
//         });
//     });
// };
// func(data);
//
// if (win > 980) {
//     var g = skrollr.init({ forceHeight: false });
// }


// $(".about__gallery-text .images .image.first").click(function () {
//     $(".owl-stage").css({
//         "-webkit-transform":"translate3d(-2025px, 0px, 0px)",
//         "transform":"translate3d(-2025px, 0px, 0px)"
//     });
//     $(".about__gallery-text .images .owl-next").trigger("click");
// });
//
// $(".about__gallery-text .images .image.second").click(function () {
//     $(".owl-stage").css({
//         "-webkit-transform":"translate3d(-2700px, 0px, 0px)",
//         "transform":"translate3d(-2700px, 0px, 0px)"
//     });
// });
//
// $(".about__gallery-text .images .image.third").click(function () {
//     $(".owl-stage").css({
//         "-webkit-transform":"translate3d(-3375px, 0px, 0px)",
//         "transform":"translate3d(-3375px, 0px, 0px)"
//     });
// });
//
// $(".about__gallery-text .images .image.fourth").click(function () {
//     $(".owl-stage").css({
//         "-webkit-transform":"translate3d(-4050px, 0px, 0px)",
//         "transform":"translate3d(-4050px, 0px, 0px)"
//     });
// });
//
// $(".about__gallery-text .images .image.fifth").click(function () {
//     $(".owl-stage").css({
//         "-webkit-transform":"translate3d(-4725px, 0px, 0px)",
//         "transform":"translate3d(-4725px, 0px, 0px)"
//     });
// });
//
// $(".about__gallery-text .images .image.sixth").click(function () {
//     $(".owl-stage").css({
//         "-webkit-transform":"translate3d(-5400px, 0px, 0px)",
//         "transform":"translate3d(-5400px, 0px, 0px)"
//     });
// });




// $(".gallery__gallery").owlCarousel({
//     loop: true,
//     center: true,
//     margin: 20,
//     nav: true,
//     responsive : {
//         0: {
//             items: 1
//         },
//
//         768: {
//             items: 2
//         }
//     }
// });


// $(".catalog__shoes-info .order-form input[name='phone']").closest('.form-group')
//     .after('<div class="select-box"><select class="select-elem"><option selected="selected" value="Размер" class="" disabled="disabled">Размер</option><option value="40/26.5" class="">40/26.5</option><option value="41/27" class="">41/27</option><option value="42/28" class="">42/27,5</option><option value="42/27,5" class="">43/28</option><option value="44/28" class="">44/28,5</option><option value="45/29" class="">45/29</option></select></div><p>Количество товара ограничено!</p>');
//
// $(".catalog__spray-info .order-form input[name='phone']").closest('.form-group')
//     .after('<p>Количество товара ограничено!</p>');
