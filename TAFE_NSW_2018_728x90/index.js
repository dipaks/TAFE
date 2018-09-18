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
	Enabler.setProfileId(10057671);
    var devDynamicContent = {};

    devDynamicContent.TAFEDynamicBanners_728x90= [{}];
    devDynamicContent.TAFEDynamicBanners_728x90[0]._id = 0;
    devDynamicContent.TAFEDynamicBanners_728x90[0].unique_id = 1;
    devDynamicContent.TAFEDynamicBanners_728x90[0].location = "Singleton,Cessnock,Maitland,Muswellbrook,Newcastle,Central Coast,Raymond Terrace,Erina,Newcastle,New South Wales,Australia";
    devDynamicContent.TAFEDynamicBanners_728x90[0].audience_Id = 512656666;
    devDynamicContent.TAFEDynamicBanners_728x90[0].ad_name = "Animal,_Agriculture_&_Environment_Hunter_Institute_1";
    devDynamicContent.TAFEDynamicBanners_728x90[0].campus_location = "Hunter Institute";
    devDynamicContent.TAFEDynamicBanners_728x90[0].course_area = "Animal, Agriculture & Environment";
    devDynamicContent.TAFEDynamicBanners_728x90[0].logo = {};
    devDynamicContent.TAFEDynamicBanners_728x90[0].logo.Type = "file";
    devDynamicContent.TAFEDynamicBanners_728x90[0].logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180816171412200_logos.png";
    devDynamicContent.TAFEDynamicBanners_728x90[0].hero_image = {};
    devDynamicContent.TAFEDynamicBanners_728x90[0].hero_image.Type = "file";
    devDynamicContent.TAFEDynamicBanners_728x90[0].hero_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180902203336122_animal_agriculture_environmental_studies_728x90.png";
    devDynamicContent.TAFEDynamicBanners_728x90[0].be_image1 = {};
    devDynamicContent.TAFEDynamicBanners_728x90[0].be_image1.Type = "file";
    devDynamicContent.TAFEDynamicBanners_728x90[0].be_image1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180619220726768_be_1.png";
    devDynamicContent.TAFEDynamicBanners_728x90[0].be_image2 = "";
    devDynamicContent.TAFEDynamicBanners_728x90[0].backgroundColor = "#cd8bda";
    devDynamicContent.TAFEDynamicBanners_728x90[0].bub_backgroundColor = "#AA7BC9";
    devDynamicContent.TAFEDynamicBanners_728x90[0].textColour = "#FFFFFF";
    devDynamicContent.TAFEDynamicBanners_728x90[0].fontSize_HeadlineText = 20;
    devDynamicContent.TAFEDynamicBanners_728x90[0].frame1ButtonText = "BE AMBITIOUS";
    devDynamicContent.TAFEDynamicBanners_728x90[0].frame2HeadlineText = "BE EMPLOYED.";
    devDynamicContent.TAFEDynamicBanners_728x90[0].frame2SubText = "Explore <span>Animal, Agriculture & Environment<\/span> courses";
    devDynamicContent.TAFEDynamicBanners_728x90[0].frame3Text = "at the <span>Hunter Institute<\/span>.";
    devDynamicContent.TAFEDynamicBanners_728x90[0].frame4Text = "Enrolments are now open!";
    devDynamicContent.TAFEDynamicBanners_728x90[0].fontSize_Text = 17;
    devDynamicContent.TAFEDynamicBanners_728x90[0].rtoCode = "RTO 90003";
    devDynamicContent.TAFEDynamicBanners_728x90[0].buttonText = "ENROL NOW";
    devDynamicContent.TAFEDynamicBanners_728x90[0].buttonColour = "#000000";
    devDynamicContent.TAFEDynamicBanners_728x90[0].buttonTextColour = "#FFFFFF";
    devDynamicContent.TAFEDynamicBanners_728x90[0].exitUrl = {};
    devDynamicContent.TAFEDynamicBanners_728x90[0].exitUrl.Url = "https://www.tafensw.edu.au/courses/animal-agriculture-environmental-studies";
    devDynamicContent.TAFEDynamicBanners_728x90[0].isDefault = false;
    devDynamicContent.TAFEDynamicBanners_728x90[0].isActive = "YES";
    Enabler.setDevDynamicContent(devDynamicContent);



	f1_ctaText = document.getElementById('fstFramebuttontxt');
	f2_headline_text = document.getElementById('dy_headline');
	f2_subText = document.getElementById('dytxt2');
	f3_text = document.getElementById('dytxt3');
	f4_text = document.getElementById('dytxt4');
	logo = document.getElementById('talogo');
	be_image = document.getElementById('betxt');
	hero_image = document.getElementById('leftper');
	rto_code = document.getElementById('rto-code');
	banner = document.getElementById('banner');
	bub1 = document.getElementById('bub1');
	bub2 = document.getElementById('bub2');
	cta = document.getElementById('cta');
	cta_text = document.getElementById('buttontxt');

	banner.style.cssText = "background-color:" + dynamicContent.TAFEDynamicBanners_728x90[0].backgroundColor + ";";
	bub1.style.cssText = bub2.style.cssText = "background-color:" + dynamicContent.TAFEDynamicBanners_728x90[0].bub_backgroundColor + ";";
	logo.src = dynamicContent.TAFEDynamicBanners_728x90[0].logo.Url;
	be_image.src = dynamicContent.TAFEDynamicBanners_728x90[0].be_image1.Url;
	hero_image.src = dynamicContent.TAFEDynamicBanners_728x90[0].hero_image.Url;
	f1_ctaText.innerHTML = dynamicContent.TAFEDynamicBanners_728x90[0].frame1ButtonText;
	f2_headline_text.innerHTML = dynamicContent.TAFEDynamicBanners_728x90[0].frame2HeadlineText;
	f2_headline_text.style.cssText = "font-size:" + dynamicContent.TAFEDynamicBanners_728x90[0].fontSize_HeadlineText + "px; color:" + dynamicContent.TAFEDynamicBanners_728x90[0].textColour + ";";
	f2_subText.innerHTML = dynamicContent.TAFEDynamicBanners_728x90[0].frame2SubText;
	f3_text.innerHTML = dynamicContent.TAFEDynamicBanners_728x90[0].frame3Text;
	f4_text.innerHTML = dynamicContent.TAFEDynamicBanners_728x90[0].frame4Text;
	f2_subText.style.cssText = f3_text.style.cssText = f4_text.style.cssText = "font-size:" + dynamicContent.TAFEDynamicBanners_728x90[0].fontSize_Text + "px; color:" + dynamicContent.TAFEDynamicBanners_728x90[0].textColour + "; line-height:" + (dynamicContent.TAFEDynamicBanners_728x90[0].fontSize_Text+2) + "px;";
	rto_code.innerHTML = dynamicContent.TAFEDynamicBanners_728x90[0].rtoCode;
	cta_text.innerHTML = dynamicContent.TAFEDynamicBanners_728x90[0].buttonText;
	cta_text.style.cssText = "color:" + dynamicContent.TAFEDynamicBanners_728x90[0].buttonTextColour + ";";
	cta.style.cssText = "; background-color:" + dynamicContent.TAFEDynamicBanners_728x90[0].buttonColour + ";";
	exitUrl = dynamicContent.TAFEDynamicBanners_728x90[0].exitUrl.Url;

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
	
	var tl = new TimelineMax({repeat:0, repeatDelay:10});
	//var tl = new TimelineMax({onComplete:completeHandler});

	animate();
	
	function animate () {
		
	tl.to('#leftper',0.50,{left:'0px'},'+=1')
	.to('#cta-firstframe',.50,{opacity:0},'-=0.50')
	.to('#bub1',.80,{width:'236px', scaleY:1.3},'-=0.5')
	.to('#bub2',.80,{width:'142px', height:'50px', top:'40px'},'-=0.8')
	.to('#betxt',.80,{left:'12px'},'-=0.8')
	.to('#dy_headline',.50,{opacity:1, ease: Power2. easeIn},'-=0.5')
	.to('#bub1',.50,{width:'270px'},'+=0.5')
	.to('#bub2',.50,{width:'270px'},'-=0.5')
	.to('#leftper',0.50,{left:'33px'},'-=0.5')
	.to('#dytxt2',.50,{opacity:1, ease: Power2. easeIn},'-=0.5')
	.to('#dy_headline',.50,{opacity:0, ease: Power2. easeInOut},'+=2.0')
	.to('#dytxt2',.50,{opacity:0, ease: Power2. easeInOut},'-=0.5')
	.to('#dytxt3',.50,{opacity:1, ease: Power2. easeIn},'=0')
	.to('#cta',.50,{opacity:1, ease: Power2. easeIn},'-=0.0')
	.to('#rto-code',1.0,{opacity:1, onComplete:completeHandler},'+=0.30')
	.to('#dytxt3',.50,{opacity:0, ease: Power2. easeIn},'+=2.0')
	.to('#dytxt4',.50,{opacity:1, ease: Power2. easeIn},'=0')
		
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