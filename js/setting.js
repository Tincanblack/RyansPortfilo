$(document).ready(function() {
	// typed.js
	$(function(){
	$(".banner-txt").typed({
		strings: [" I'm <b>Ryan.</b>", " Wellcome to <b>My Portfolio.</b>", " My ultimate goal is to become a <b>Front-End Engineer.</b>"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 20,
		// time before typing starts
		startDelay: 500,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 6,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
		});
	});
	// fullpages
	$('#fullpage').fullpage({
		sectionsColor: ['#f2f2f2', '#ededed', '#7BAABE', 'whitesmoke'],
		anchors: ['keyVision', 'aboutMe', 'mySkill', 'myCase', 'contact'],
		menu: 'header-menu',
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['首頁', '個人簡介', '專業技能', '作品案例', '聯絡方式'],
		verticalCentered: false,
		scrollOverflow: true,
		css3:false
	});
	// menu-toggle
	$('#nav-toggle').on('click', function() {
		$(this).toggleClass('active');
		$('.header-wrapper').toggleClass('active');
		$('.full-content').toggleClass('active');
	});
	//  masonry
	$('.case-wrapper').masonry({
	  itemSelector: '.case-content',
	  columnWidth: '.case-content',
	  percentPosition: true
	});
	//  easyPieChart
	$(".stats").appear(function() {
	    $(".num").countTo();
	});
	$(".piechart-holder").appear(function() {
	    $(this).find(".chart").each(function() {
	        $(".chart").easyPieChart({
	            barColor: "#292929",
	            trackColor: "#f2f2f2",
	            scaleColor: "#f2f2f2",
	            size: "150",
	            lineWidth: "40",
	            lineCap: "butt",
	            onStep: function(a, b, c) {
	                $(this.el).find(".percent").text(Math.round(c));
	            }
	        });
	    });
	});
});