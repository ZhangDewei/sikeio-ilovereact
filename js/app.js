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

	function updateSliderControl(){
		var links = doc.querySelectorAll('#slider-control a');

		for(var i=0,n=links.length;i<n;i++){
			var link = doc.querySelector(links[i].getAttribute('href'));

			var sectionTop = link.offsetTop;
			var sectionBottom = sectionTop + link.offsetHeight;
			
			if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
		      link.className = "active";
		    } else {
		      link.className = "";
		    }

		};

	};  // function finish;


	updateSliderControl();

};