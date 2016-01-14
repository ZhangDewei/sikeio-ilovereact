window.onload = function(){

	var doc = document;

	function animateLogo(){
		TweenMax.to(
			".logo-img", 2, {
				css: {
					y:'20px',
				},
				repeat: -1,
				yoyo: true,
				ease: Power2.easeInOut
			}
		);  // animate finish;
	}; // function finish;

	animateLogo();

	function animateRobote(){
		t = new TimelineMax({yoyo: true, repeat:-1});
		t.to("#android-robot", 2, {rotation: '20deg'})
		 .to("#android-robot", 2, {rotation: '-20deg'})

	};  // function finish;

	animateRobote();

	function scrollToElement(element) {
	  var topOfElement = element.offsetTop;

	  TweenMax.to(window,1,{
	    scrollTo: {
	      y: topOfElement,
	    },

	    ease: Power2.easeInOut,
	  });
	};

	addSmoothScrolling();

	function addSmoothScrolling() {

      var links = doc.querySelectorAll('#slider-control a');

      for(var i=0;i<links.length;i++){
      	var link = links[i]
      	link.addEventListener('click', function(event){

      		var event = window.event || event;
      		event.preventDefault();

      		var href = this.getAttribute('href');

      		for(var i=0;i<links.length;i++){
      			links[i].className = '';
      		};
      		this.className = 'active';
      		scrollToElement(doc.querySelector(href));

      	});
      };
	}

	/*

	window.onscroll = function() {
	  // ...
	  updateSliderControl();
	}

	function updateSliderControl(){
		var links = doc.querySelectorAll('#slider-control a');

		for(var i=0,n=links.length;i<n;i++){
			var link = links[i];

			var section = doc.querySelector(link.getAttribute('href'));

			var sectionTop = section.offsetTop;
			var sectionBottom = sectionTop + section.offsetHeight;
			
			if(window.scrollY > sectionTop && window.scrollY < sectionBottom){
				link.className = 'active';
			}else{
				link.className = ''
			}

		};

	};  // function finish;

	*/

};