var boilerplate = {};

boilerplate.loadFunction = function () {
	if (Enabler.isInitialized()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, init)
	}
}

function init() {
	if (Enabler.isPageLoaded()) {
		boilerplate.processAd ();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, boilerplate.processAd);
	}
}

boilerplate.processAd = function () {
	document.getElementById("banner").className = "show"; //show banner
	boilerplate.executeAnimation();
	boilerplate.DynamicContentElements();
}

boilerplate.DynamicContentElements = function () {

	// Dynamic Content variables
	Enabler.setProfileId(10059388);
    var devDynamicContent = {};

    devDynamicContent.TAFEDynamicBanners_970x250= [{}];
    devDynamicContent.TAFEDynamicBanners_970x250[0]._id = 0;
    devDynamicContent.TAFEDynamicBanners_970x250[0].unique_id = 1;
    devDynamicContent.TAFEDynamicBanners_970x250[0].ad_type = "";
    devDynamicContent.TAFEDynamicBanners_970x250[0].ad_name = "Generic";
    devDynamicContent.TAFEDynamicBanners_970x250[0].location = "Sydney,New South Wales,Australia";
    devDynamicContent.TAFEDynamicBanners_970x250[0].course_name = "BUSINESS & FINANCE";
    devDynamicContent.TAFEDynamicBanners_970x250[0].logo = {};
    devDynamicContent.TAFEDynamicBanners_970x250[0].logo.Type = "file";
    devDynamicContent.TAFEDynamicBanners_970x250[0].logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180619231541426_waratahlogo.png";
    devDynamicContent.TAFEDynamicBanners_970x250[0].hero_image = {};
    devDynamicContent.TAFEDynamicBanners_970x250[0].hero_image.Type = "file";
    devDynamicContent.TAFEDynamicBanners_970x250[0].hero_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180619231530710_mustardshorts.png";
    devDynamicContent.TAFEDynamicBanners_970x250[0].be_image1 = {};
    devDynamicContent.TAFEDynamicBanners_970x250[0].be_image1.Type = "file";
    devDynamicContent.TAFEDynamicBanners_970x250[0].be_image1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180619231556344_be_1.png";
    devDynamicContent.TAFEDynamicBanners_970x250[0].be_image2 = "";
    devDynamicContent.TAFEDynamicBanners_970x250[0].backgroundColor = "#cd8bda";
    devDynamicContent.TAFEDynamicBanners_970x250[0].bub_backgroundColor = "#aa7bC9";
    devDynamicContent.TAFEDynamicBanners_970x250[0].textColour = "#FFFFFF";
    devDynamicContent.TAFEDynamicBanners_970x250[0].fontSize_HeadlineText = "32px";
    devDynamicContent.TAFEDynamicBanners_970x250[0].frame1ButtonText = "BE AMBITIOUS";
    devDynamicContent.TAFEDynamicBanners_970x250[0].frame1HeadlineText = "BE EMPLOYED";
    devDynamicContent.TAFEDynamicBanners_970x250[0].frame1SubText = "With connections to over 25,000 employers.";
    devDynamicContent.TAFEDynamicBanners_970x250[0].frame2Text = "Mid-year enrolments<br>are now open at";
    devDynamicContent.TAFEDynamicBanners_970x250[0].TAFE_Location = "<br>Sydney TAFE.";
    devDynamicContent.TAFEDynamicBanners_970x250[0].fontSize_Text = "25px";
    devDynamicContent.TAFEDynamicBanners_970x250[0].rtoCode = 91430;
    devDynamicContent.TAFEDynamicBanners_970x250[0].buttonText = "ENROL TODAY";
    devDynamicContent.TAFEDynamicBanners_970x250[0].buttonColour = "#000000";
    devDynamicContent.TAFEDynamicBanners_970x250[0].buttonTextColour = "#FFFFFF";
    devDynamicContent.TAFEDynamicBanners_970x250[0].exitUrl = {};
    devDynamicContent.TAFEDynamicBanners_970x250[0].exitUrl.Url = "https://www.tafensw.edu.au/courses/hospitality-courses";
    devDynamicContent.TAFEDynamicBanners_970x250[0].isDefault = true;
    Enabler.setDevDynamicContent(devDynamicContent);

	
	frame1_ctaText = document.getElementById('fstFramebuttontxt');
	headline_text = document.getElementById('dy_headline');
	text2 = document.getElementById('dytxt2');
	text3 = document.getElementById('dytxt3');
	logo = document.getElementById('talogo');
	be_image = document.getElementById('betxt');
	hero_image = document.getElementById('leftper');
	rto_code = document.getElementById('rto-code');
	banner = document.getElementById('banner');
	bub1 = document.getElementById('bub1');
	bub2 = document.getElementById('bub2');
	bub3 = document.getElementById('bub3');
	cta = document.getElementById('cta');
	cta_text = document.getElementById('buttontxt');

	banner.style.cssText = "background-color:" + devDynamicContent.TAFEDynamicBanners_970x250[0].backgroundColor + ";";
	bub1.style.cssText = bub2.style.cssText = bub3.style.cssText = "background-color:" + devDynamicContent.TAFEDynamicBanners_970x250[0].bub_backgroundColor + ";";
	logo.src = devDynamicContent.TAFEDynamicBanners_970x250[0].logo.Url;
	be_image.src = devDynamicContent.TAFEDynamicBanners_970x250[0].be_image1.Url;
	hero_image.src = devDynamicContent.TAFEDynamicBanners_970x250[0].hero_image.Url;
	frame1_ctaText.innerHTML = devDynamicContent.TAFEDynamicBanners_970x250[0].frame1ButtonText;
	headline_text.innerHTML = devDynamicContent.TAFEDynamicBanners_970x250[0].frame1HeadlineText;
	headline_text.style.cssText = "font-size:" + devDynamicContent.TAFEDynamicBanners_970x250[0].fontSize_HeadlineText + "; color:" + devDynamicContent.TAFEDynamicBanners_970x250[0].textColour + ";";
	text2.innerHTML = devDynamicContent.TAFEDynamicBanners_970x250[0].frame1SubText;
	text3.innerHTML = devDynamicContent.TAFEDynamicBanners_970x250[0].frame2Text + " " + devDynamicContent.TAFEDynamicBanners_970x250[0].TAFE_Location;
	text2.style.cssText = text3.style.cssText = "font-size:" + devDynamicContent.TAFEDynamicBanners_970x250[0].fontSize_Text + "; color:" + devDynamicContent.TAFEDynamicBanners_970x250[0].textColour + ";";
	rto_code.innerHTML = devDynamicContent.TAFEDynamicBanners_970x250[0].rtoCode;
	cta_text.innerHTML = devDynamicContent.TAFEDynamicBanners_970x250[0].buttonText;
	cta_text.style.cssText = "color:" + devDynamicContent.TAFEDynamicBanners_970x250[0].buttonTextColour + ";";
	cta.style.cssText = "; background-color:" + devDynamicContent.TAFEDynamicBanners_970x250[0].buttonColour + ";";
	exitUrl = devDynamicContent.TAFEDynamicBanners_970x250[0].exitUrl.Url;

	boilerplate.clickTag();
}

//Clicktag
boilerplate.clickTag = function () {
	click_through.onclick = function () {
		Enabler.exitOverride('Background Exit', exitUrl);
	};		
};

//Animate contents
boilerplate.executeAnimation = function (){
	
	var tl = new TimelineMax({repeat:-1, repeatDelay:10});
	//var tl = new TimelineMax({onComplete:completeHandler});

	animate();
	
	function animate () {
		
	tl.to('#leftper',0.50,{left:'110px'},'+=1')
  	.to('#cta-firstframe',.50,{opacity:0},'-=0.50')
 	.to('#bub1',.80,{width:'366px', height:'90px', left:'230px'},'-=0.5')
	.to('#bub2',.80,{width:'285px', height:'85px', top:'111px',left:'205px'},'-=0.8')
   	.to('#betxt',.80,{left:'10px'},'-=0.8')
	.to('#dy_headline',.50,{opacity:1, ease: Power2. easeIn},'-=0.5')
	.to('#dytxt2',.50,{opacity:1, ease: Power2. easeIn},'+=0.2')
	.to('#bub1',.50,{width:'280px',height:'85px',},'-=0.5')
	.to('#bub2',.50,{width:'260px', height:'87px', top:'120px'},'-=0.5')
	.to('#leftper',0.50,{left:'125px'},'-=0.5')
	.to('#cta',.50,{opacity:1, ease: Power2. easeIn},'=0')
	.to('#dy_headline',.50,{opacity:0, ease: Power2. easeOut},'+=2')
	.to('#dytxt2',.50,{opacity:0, ease: Power2. easeOut},'-=0.5')
	.to('#dytxt3',.50,{opacity:1, ease: Power2. easeIn},'=0')
	.to('#rto-code',.50,{opacity:1, onComplete:completeHandler},'=0')
		
	}
	
	//Cta Button Effect
	function completeHandler () {
		document.getElementById('click_through').onmouseover = function() {
			TweenMax.to('#cta', 0.3, {background:'#333333', ease: Power3.easeOut});
		}

		document.getElementById('click_through').onmouseout = function() {
			TweenMax.to('#cta', 0.3, {background:'#000000', ease: Power3.easeOut});
		}
	}
}

window.onload = function() {
	boilerplate.loadFunction ();
}