// Input mask
$(function(){
	$("#modal_phone").mask("+7 (999) 999-99-99");
	$("#feedback_phone").mask("+7 (999) 999-99-99");
});

// Owl carousel
$(function () {
	$("#slider").slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  loop: true,
	  prevArrow: $(".prev-arrow"),
	  nextArrow: $(".next-arrow"),
	  responsive: [{
		  breakpoint: 1000,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true
		  },
		},
		{
		  breakpoint: 800,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  },
		},
	  ],
	});
});
$(function () {
	$(".benefits__slider").slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  loop: true,
	  dots: true,
	  arrows: false,
	  responsive: [{
		breakpoint: 415,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		},
	  }],
	});
});

// Modal
(function() {
	let btns = document.querySelectorAll("*[data-modal-btn]");
  
	for (let i = 0; i < btns.length; i++) {
	  btns[i].addEventListener('click', function() {
		let name = btns[i].getAttribute('data-modal-btn');
		let modal = document.querySelector("[data-modal-window='"+name+"']");
		modal.style.display = "block";
		let close = modal.querySelector(".modal__close");
		close.addEventListener('click', function() {
		  modal.style.display = "none";
		})
	  })
	}
  
	window.onclick = function (e) {
	  if(e.target.hasAttribute('data-modal-window')) {
		let modals = document.querySelectorAll("*[data-modal-window]");
		for (let i = 0; i < modals.length; i++) {
		  modals[i].style.display = "none";
		}
	  }
	}
})();

// Read more
const parentContainer =  document.querySelector('.price__list');
parentContainer.addEventListener('click', event=>{
	const current = event.target;
	const isReadMoreBtn = current.className.includes('price__btn');
	if(!isReadMoreBtn) return;
	const currentText = event.target.parentNode.querySelector('.price__hide');
	currentText.classList.toggle('price__hide--show');
	current.textContent = current.textContent.includes('Развернуть') ? "Свернуть" : "Развернуть";
})
