const myTimeout=setTimeout(myGreeting,2e3);function myGreeting(){$("#modal-loding").addClass(" d-none"),$("#Cart-shop-content").addClass(" d-flexx"),$("#Cart-shop-sm-content").addClass(" d-flexx")}$(document).ready(function(){$("#togel").click(function(){$("#collapseOne").addClass(" show"),$(".overlay-custom-search").addClass(" block"),$("#togel").addClass(" border-custom-search"),$(".custom-search-bg").removeClass("custom-search-bg"),$(".coustom-posichen-search").addClass(" position-absolute")}),$(".overlay-custom-search").click(function(){$(".collapse").removeClass("show"),$(".overlay-custom-search").removeClass("block"),$("#togel").removeClass(" border-custom-search"),$("#headingOne,#togel").addClass(" custom-search-bg"),$("#togel").removeClass("position-absolute"),$(".coustom-posichen-search").removeClass("position-absolute")})}),$("#nav-link-hover").hover(function(){$("#dropdown-nav-show").addClass(" show"),$(".overlay-custom-nav").addClass(" d-block"),$("#nav-link-hover").addClass(" x")}),$(".overlay-custom-nav").hover(function(){$("#dropdown-nav-show").removeClass(" show"),$(".overlay-custom-nav").removeClass("d-block"),$("#nav-link-hover").removeClass("x")}),$(".link-1").hover(function(e){e.preventDefault(),$("#link-1").siblings("div").hide(),$(".link-1").siblings("li").removeClass("link-menue-hover"),$(".link-1").addClass(" link-menue-hover"),$("#link-1").show()}),$(".link-2").hover(function(e){e.preventDefault(),$("#link-2").siblings("div").hide(),$(".link-2").siblings("li").removeClass("link-menue-hover"),$(".link-2").addClass(" link-menue-hover"),$("#link-2").removeClass("d-none"),$("#link-2").show()}),$(".link-3").hover(function(e){e.preventDefault(),$("#link-3").siblings("div").hide(),$(".link-3").siblings("li").removeClass("link-menue-hover"),$(".link-3").addClass(" link-menue-hover"),$("#link-3").removeClass("d-none"),$("#link-3").show()}),$(".link-4").hover(function(e){e.preventDefault(),$("#link-4").siblings("div").hide(),$(".link-4").siblings("li").removeClass("link-menue-hover"),$(".link-4").addClass(" link-menue-hover"),$("#link-4").removeClass("d-none"),$("#link-4").show()}),$(".link-5").hover(function(e){e.preventDefault(),$("#link-5").siblings("div").hide(),$(".link-5").siblings("li").removeClass("link-menue-hover"),$(".link-5").addClass(" link-menue-hover"),$("#link-5").removeClass("d-none"),$("#link-5").show()}),$(".link-6").hover(function(e){e.preventDefault(),$("#link-6").siblings("div").hide(),$(".link-6").siblings("li").removeClass("link-menue-hover"),$(".link-6").addClass(" link-menue-hover"),$("#link-6").removeClass("d-none"),$("#link-6").show()}),$(".link-7").hover(function(e){e.preventDefault(),$("#link-7").siblings("div").hide(),$(".link-7").siblings("li").removeClass("link-menue-hover"),$(".link-7").addClass(" link-menue-hover"),$("#link-7").removeClass("d-none"),$("#link-7").show()}),$(".link-8").hover(function(e){e.preventDefault(),$("#link-8").siblings("div").hide(),$(".link-8").siblings("li").removeClass("link-menue-hover"),$(".link-8").addClass(" link-menue-hover"),$("#link-8").removeClass("d-none"),$("#link-8").show()}),$(".link-9").hover(function(e){e.preventDefault(),$("#link-9").siblings("div").hide(),$(".link-9").siblings("li").removeClass("link-menue-hover"),$(".link-9").addClass(" link-menue-hover"),$("#link-9").removeClass("d-none"),$("#link-9").show()}),$("#shop-Cart").click(function(e){e.preventDefault(),$("#next-shop").removeClass("active-shop"),$("#shop-Cart").addClass(" active-shop"),$("#body-Cart-shop").addClass(" d-blick"),$("#body-next-shop").addClass(" d-none"),$("#body-next-shop").removeClass("d-blick")}),$("#next-shop").click(function(e){e.preventDefault(),$("#shop-Cart").removeClass("active-shop"),$("#next-shop").addClass(" active-shop"),$("#body-Cart-shop").addClass(" d-none"),$("#body-next-shop").addClass(" d-blick"),$("#body-Cart-shop").removeClass("d-blick")}),$("#shop-Cart-sm").click(function(e){e.preventDefault(),$("#next-shop-sm").removeClass("active-shop"),$("#shop-Cart-sm").addClass(" active-shop"),$("#body-Cart-shop-sm").addClass(" d-blick"),$("#body-next-shop-sm").addClass(" d-none"),$("#body-next-shop-sm").removeClass("d-blick")}),$("#next-shop-sm").click(function(e){e.preventDefault(),$("#shop-Cart-sm").removeClass("active-shop"),$("#next-shop-sm").addClass(" active-shop"),$("#body-Cart-shop-sm").addClass(" d-none"),$("#body-next-shop-sm").addClass(" d-blick"),$("#body-Cart-shop-sm").removeClass("d-blick")}),$("#scrol-top").click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"slow")});var s=$(".fffff").val();document.addEventListener("DOMContentLoaded",function(){new Splide("#image-carousel",{perPage:6,perMove:1,pagination:!1,padding:"2rem",breakpoints:{1200:{perPage:5},900:{perPage:4},690:{perPage:3},640:{perPage:2},480:{perPage:2.2,padding:"0"},300:{perPage:1,padding:"0"}}}).mount()}),document.addEventListener("DOMContentLoaded",function(){new Splide("#main-carousel",{perPage:6,perMove:1,pagination:!1,padding:"1rem",breakpoints:{1200:{perPage:5},900:{perPage:4},690:{perPage:3},640:{perPage:2},480:{perPage:2,padding:"0"},300:{perPage:1,padding:"0"}}}).mount()}),document.addEventListener("DOMContentLoaded",function(){new Splide("#brand-slider",{perPage:6,perMove:1,pagination:!1,padding:"1rem",breakpoints:{1200:{perPage:5},900:{perPage:4},690:{perPage:4},640:{perPage:4},480:{perPage:4,padding:"0"},300:{perPage:1,padding:"0"}}}).mount()}),document.addEventListener("DOMContentLoaded",function(){new Splide("#main-carousel-cala",{perPage:4,perMove:1,pagination:!1,padding:"1rem",breakpoints:{1200:{perPage:3},900:{perPage:4},690:{perPage:3},640:{perPage:1.1},480:{arrowPath:"none",perPage:1.1,padding:"0"},300:{arrowPath:"none",perPage:1,padding:"0"}}}).mount()});