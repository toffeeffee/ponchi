$(document).ready(function(){
	
	/**
	* Логика прозрачного меню
	*/
	if($("header.istransparentlogic").length){
		if($(document).scrollTop() > 0){
			$("header").removeClass("istransparent");
		}else{
			$("header").addClass("istransparent");
		}
		$(document).on("scroll", function(){
			if($(document).scrollTop() > 0){
				$("header").removeClass("istransparent");
			}else{
				$("header").addClass("istransparent");
			}			
		});
	}
	
	/**
	* Удаление вкуса из сета
	*/
	$(document).on("click", ".set-slot-empty", function(){
		$(this).closest(".set-slot").find(".fully-box").html("");
		$(this).closest(".set-slot").removeClass("fully");
		update_set_total();
		//Пересчитываем вкусам добавленное количество
		$(".add-to-set").each(function(){
			let current_id = $(this).attr("data-id");
			if($(".fully-box[data-id='" + current_id + "']").length){
				$(this).html("Додано " + $(".fully-box[data-id='" + current_id + "']").length);
			}else{
				$(this).html("Додати");
			}
		});
		//Уплотняем добавленные вкусы, если был удален вкус в средине или вначале
		if($(".fully").length){
			$(".set-slot").each(function(){
				if($(this).hasClass("fully") == false){
					$(this).parent().appendTo($(this).closest(".row"));	
				}
			});
		}
	});
	
	/**
	* Добавление вкуса в сет
	*/
	$(document).on("click", ".add-to-set", function(){
		
		let those = $(this);
		let id = $(this).attr("data-id");
		let price = $(this).attr("data-price");
		let img = $(this).attr("data-img");
		let title = $(this).attr("data-title");
		
		$(".set-slot").each(function(){
			if($(this).hasClass("fully") == false){
				$(this).addClass("fully");
				let box_html = '';
				box_html += '<div class="d-flex flex-column justify-content-around fully-box" data-id="' + id + '">';
					box_html += '<div class="pb-2"><img src="' + img + '" class="w-100" alt="my-set"></div>';
					box_html += '<div class="comforta16 text-center">' + title + '</div>';
					box_html += '<div class="comforta18 text-center"><span class="set-slot-price">' + price + '</span> грн</div>';
				box_html += '</div>';			
				$(this).find(".fully-box").append(box_html);
				those.html("Додано " + $(".fully-box[data-id='" + id + "']").length);
				return false;
			}
		});
		
		update_set_total();
		
		return false;
	});
	
    $('.owl-carousel').on('click', 'div[data-toggle="gallery"]', function(e) {
		if($(e.target).hasClass("add-to-set")){ 
			return; 
		}
        e.preventDefault();
        var em = $(this),
            gallery,
            showGallery = function (gallery) {
                em.lightGallery({
                    dynamic: true,
                    download: false,
                    dynamicEl: gallery
                });
            };
        if ((gallery = em.data('gallery'))) {
            showGallery(gallery);
        }
        $.get(em.attr('data-target'), function(gallery) {
            if (gallery) {
                em.data('gallery', gallery);
                showGallery(gallery);
            }
        }, 'json');
        return;
    });		
	
	if($('.top-carousel.owl-carousel').length){
		$('.top-carousel.owl-carousel').owlCarousel({
			items: 1,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',		
			transitionStyle: "fade",
			loop: true,
			margin: 10,
			nav: false,    
			dots: false,
			autoplay: true,
			autoplayTimeout: 4000,
			slideSpeed: 300,
            paginationSpeed: 400,			
			autoplayHoverPause: false					
		});
	}
	
	if($('.yoursset-carousel.owl-carousel').length){
		$('.yoursset-carousel.owl-carousel').owlCarousel({
			items: 4,
			slideBy: 4,
			loop: true,
			margin: 20,
			nav: true,
			navText: [
			  '<img src="img/arrow-l.png">',
			  '<img src="img/arrow-r.png">'
			],      
			dots: true,
			responsive : {
				0 : {
					items: 2,
					slideBy: 2,
					margin: 8,
				},
				400 : {
					items: 2,
					slideBy: 2,
					margin: 15,
				},				
				576 : {
					items: 3,
					slideBy: 3,
					margin: 15,
				},
				992 : {
					margin: 20,
					slideBy: 4,
					items: 4,
				}		
			}			
		});
	}	
	if($('.thebest-carousel.owl-carousel').length){
		$('.thebest-carousel.owl-carousel').owlCarousel({
			items: 4,
			slideBy: 4,
			loop: true,
			margin: 20,
			nav: true,
			navText: [
			  '<img src="img/arrow-l.png">',
			  '<img src="img/arrow-r.png">'
			],      
			dots: true,
			responsive : {
				0 : {
					items: 2,
					slideBy: 2,
					margin: 8,
				},
				400 : {
					items: 2,
					slideBy: 2,
					margin: 15,
				},
				576 : {
					items: 3,
					slideBy: 3,
					margin: 15,
				},
				992 : {
					margin: 20,
					slideBy: 4,
					items: 4,
				}		
			}			
		});
	}
	if($('.beauty-carousel.owl-carousel').length){
		$('.beauty-carousel.owl-carousel').owlCarousel({
			items: 3,
			slideBy: 3,
			loop: true,
			margin: 10,
			nav: true,
			navText: [
			  '<img src="img/arrow-l.png">',
			  '<img src="img/arrow-r.png">'
			],      
			dots: true,
			responsive : {
				0 : {
					items: 1,
					slideBy: 1,
				},
				400 : {
					items: 2,
					slideBy: 2,
				},
				576 : {
					items: 3,
					slideBy: 3,
				}			
			}			
		});
	}
	if($('.partner-carousel.owl-carousel').length){
		$('.partner-carousel.owl-carousel').owlCarousel({
			items: 3,
			slideBy: 3,
			loop: true,
			margin: 10,
			nav: true,
			navText: [
			  '<img src="img/arrow-l.png">',
			  '<img src="img/arrow-r.png">'
			],      
			dots: true,
			responsive : {
				0 : {
					items: 1,
					slideBy: 1,
				},
				400 : {
					items: 2,
					slideBy: 2,
				},
				576 : {
					items: 3,
					slideBy: 3,
				}			
			}			
		});
	}	
	if($('.proposition-carousel.owl-carousel').length){
		$('.proposition-carousel.owl-carousel').owlCarousel({
			items: 1,
			slideBy: 3,
			loop: true,
			margin: 10,
			nav: true,
			navText: [
			  '<img src="img/arrow-l.png">',
			  '<img src="img/arrow-r.png">'
			],      
			dots: true		
		});
	}	

});

function update_set_total(){
	
	let total_summ = 0;
	let total_qty = 0;
	$(".set-slot").each(function(){
		if($(this).hasClass("fully")){
			total_qty++;
			total_summ += parseFloat($(this).find(".set-slot-price").html());
		}
	});
	
	console.log(total_summ);
	console.log(total_qty);
	
	$(".set-total").html(total_summ);
	if(total_qty < 6 ){
		$(".add-to-cart-set").prop("disabled", true);
	}else{
		$(".add-to-cart-set").prop("disabled", false);
	}
	
}