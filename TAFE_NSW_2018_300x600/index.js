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
	boilerplate.DynamicContentElements();
	
	var heroImg = document.getElementById("leftper");//Load hero image
	heroImg.onload = function() {
		document.getElementById("banner").className = "show"; //show banner
		boilerplate.executeAnimation();
	};
}

boilerplate.DynamicContentElements = function () {

	// Dynamic Content variables
	Enabler.setProfileId(10059355);
    var devDynamicContent = {};

    devDynamicContent.TAFEDynamicBanners_300x600= [{}];
    devDynamicContent.TAFEDynamicBanners_300x600[0]._id = 0;
    devDynamicContent.TAFEDynamicBanners_300x600[0].unique_id = 1;
    devDynamicContent.TAFEDynamicBanners_300x600[0].location = "Singleton,Cessnock,Maitland,Muswellbrook,Newcastle,Central Coast,Raymond Terrace,Erina,Newcastle,New South Wales,Australia";
    devDynamicContent.TAFEDynamicBanners_300x600[0].audience_Id = 512656666;
    devDynamicContent.TAFEDynamicBanners_300x600[0].ad_name = "Animal,_Agriculture_&_Environment_Hunter_Institute_1";
    devDynamicContent.TAFEDynamicBanners_300x600[0].campus_location = "Hunter Institute";
    devDynamicContent.TAFEDynamicBanners_300x600[0].course_area = "Animal, Agriculture & Environment";
    devDynamicContent.TAFEDynamicBanners_300x600[0].logo = {};
    devDynamicContent.TAFEDynamicBanners_300x600[0].logo.Type = "file";
    devDynamicContent.TAFEDynamicBanners_300x600[0].logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180816165558087_logos.png";
    devDynamicContent.TAFEDynamicBanners_300x600[0].hero_image = {};
    devDynamicContent.TAFEDynamicBanners_300x600[0].hero_image.Type = "file";
    devDynamicContent.TAFEDynamicBanners_300x600[0].hero_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180920241650817_animal_agriculture_environmental_studies_300x600.png";
    devDynamicContent.TAFEDynamicBanners_300x600[0].be_image1 = {};
    devDynamicContent.TAFEDynamicBanners_300x600[0].be_image1.Type = "file";
    devDynamicContent.TAFEDynamicBanners_300x600[0].be_image1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180619211011149_be_1.png";
    devDynamicContent.TAFEDynamicBanners_300x600[0].be_image2 = {};
    devDynamicContent.TAFEDynamicBanners_300x600[0].be_image2.Type = "file";
    devDynamicContent.TAFEDynamicBanners_300x600[0].be_image2.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20180619211025542_be_2.png";
    devDynamicContent.TAFEDynamicBanners_300x600[0].backgroundColor = "#cd8bda";
    devDynamicContent.TAFEDynamicBanners_300x600[0].bub_backgroundColor = "#AA7BC9";
    devDynamicContent.TAFEDynamicBanners_300x600[0].textColour = "#FFFFFF";
    devDynamicContent.TAFEDynamicBanners_300x600[0].fontSize_HeadlineText = 25;
    devDynamicContent.TAFEDynamicBanners_300x600[0].frame1ButtonText = "BE AMBITIOUS";
    devDynamicContent.TAFEDynamicBanners_300x600[0].frame2HeadlineText = "BE EMPLOYED.";
    devDynamicContent.TAFEDynamicBanners_300x600[0].frame2SubText = "Explore <span>Animal, Agriculture & Environment<\/span> courses";
    devDynamicContent.TAFEDynamicBanners_300x600[0].frame3Text = "at the <span>Hunter Institute<\/span>.";
    devDynamicContent.TAFEDynamicBanners_300x600[0].frame4Text = "Enrolments are now open!";
    devDynamicContent.TAFEDynamicBanners_300x600[0].fontSize_Text = 18;
    devDynamicContent.TAFEDynamicBanners_300x600[0].rtoCode = "RTO 90003";
    devDynamicContent.TAFEDynamicBanners_300x600[0].buttonText = "ENROL NOW";
    devDynamicContent.TAFEDynamicBanners_300x600[0].buttonColour = "#000000";
    devDynamicContent.TAFEDynamicBanners_300x600[0].buttonTextColour = "#FFFFFF";
    devDynamicContent.TAFEDynamicBanners_300x600[0].exitUrl = {};
    devDynamicContent.TAFEDynamicBanners_300x600[0].exitUrl.Url = "https://www.tafensw.edu.au/courses/animal-agriculture-environmental-studies";
    devDynamicContent.TAFEDynamicBanners_300x600[0].isDefault = false;
    devDynamicContent.TAFEDynamicBanners_300x600[0].isActive = "YES";
    Enabler.setDevDynamicContent(devDynamicContent);

	f1_ctaText = document.getElementById('fstFramebuttontxt');
	f2_headline_text = document.getElementById('dy_headline');
	f2_subText = document.getElementById('dytxt2');
	f3_text = document.getElementById('dytxt3');
	f4_text = document.getElementById('dytxt4');
	logo = document.getElementById('talogo');
	be_image1 = document.getElementById('btxt');
	be_image2 = document.getElementById('etxt');
	hero_image = document.getElementById('leftper');
	rto_code = document.getElementById('rto-code');
	banner = document.getElementById('banner');
	bub1 = document.getElementById('bub1');
	bub2 = document.getElementById('bub2');
	bub3 = document.getElementById('bub3');
	bub4 = document.getElementById('bub4');
	cta = document.getElementById('cta');
	cta_text = document.getElementById('buttontxt');

	banner.style.cssText = "background-color:" + dynamicContent.TAFEDynamicBanners_300x600[0].backgroundColor + ";";
	bub1.style.cssText = bub2.style.cssText = bub3.style.cssText = bub4.style.cssText = "background-color:" + dynamicContent.TAFEDynamicBanners_300x600[0].bub_backgroundColor + ";";
	logo.src = dynamicContent.TAFEDynamicBanners_300x600[0].logo.Url;
	be_image1.src = dynamicContent.TAFEDynamicBanners_300x600[0].be_image1.Url;
	be_image2.src = dynamicContent.TAFEDynamicBanners_300x600[0].be_image2.Url;
	hero_image.src = dynamicContent.TAFEDynamicBanners_300x600[0].hero_image.Url;
	f1_ctaText.innerHTML = dynamicContent.TAFEDynamicBanners_300x600[0].frame1ButtonText;
	f2_headline_text.innerHTML = dynamicContent.TAFEDynamicBanners_300x600[0].frame2HeadlineText;
	f2_headline_text.style.cssText = "font-size:" + dynamicContent.TAFEDynamicBanners_300x600[0].fontSize_HeadlineText + "px; color:" + dynamicContent.TAFEDynamicBanners_300x600[0].textColour + ";";
	f2_subText.innerHTML = dynamicContent.TAFEDynamicBanners_300x600[0].frame2SubText;
	f3_text.innerHTML = dynamicContent.TAFEDynamicBanners_300x600[0].frame3Text;
	f4_text.innerHTML = dynamicContent.TAFEDynamicBanners_300x600[0].frame4Text;
	f2_subText.style.cssText = f3_text.style.cssText = f4_text.style.cssText = "font-size:" + dynamicContent.TAFEDynamicBanners_300x600[0].fontSize_Text + "px; color:" + dynamicContent.TAFEDynamicBanners_300x600[0].textColour + "; line-height:" + (dynamicContent.TAFEDynamicBanners_300x600[0].fontSize_Text+2) + "px;";
	rto_code.innerHTML = dynamicContent.TAFEDynamicBanners_300x600[0].rtoCode;
	cta_text.innerHTML = dynamicContent.TAFEDynamicBanners_300x600[0].buttonText;
	cta_text.style.cssText = "color:" + dynamicContent.TAFEDynamicBanners_300x600[0].buttonTextColour + ";";
	cta.style.cssText = "; background-color:" + dynamicContent.TAFEDynamicBanners_300x600[0].buttonColour + ";";
	exitUrl = dynamicContent.TAFEDynamicBanners_300x600[0].exitUrl.Url;
	
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
		
	tl.to('#leftper',.50,{left:'75px', top:'342px'},'+=1')
	.to('#cta-firstframe',.50,{opacity:0},'-=0.2')
	.to('#bub1',.50,{width:'218px', height:'50px', left:'40px',  top:'101px'},'-=0.5')
	.to('#bub2',.50,{width:'218px', height:'159px', top:'141px', left:'20px'},'-=0.5')
	.to('#bub3',.50,{width:'24px', height:'46px',top:'284px', left:'20px'},'-=0.5')
	.to('#bub4',.50,{top:'329px', left:'43px'},'-=0.5')
	.to('#btxt',.50,{top:'302px', left:'65px'},'-=0.5')
	.to('#etxt',.50,{top:'249px', left:'145px'},'-=0.5')
	.to('#dy_headline',.50,{opacity:1, ease: Power2. easeIn},'+=0.0')
	.to('#dytxt2',.50,{opacity:1, ease: Power2. easeIn},'=0')
	.to('#bub1',.50,{width:'300px', height:'141px',left:'0px', top:'0px'},'+=2.0')
	.to('#bub2',.50,{width:'300px',height:'167px', x:'-20px'},'-=0.6')
	.to('#bub3',.50,{top:'308px', x:'-20px'},'-=0.5')
	.to('#bub4',.50,{top:'354px', x:'-20px'},'-=0.5')
	.to('#btxt',.50,{opacity:0, ease: Power2. easeInOut},'-=0.5')
	.to('#etxt',.50,{opacity:0, ease: Power2. easeInOut},'-=0.5')
	.to('#leftper',.50,{x:'-20px'},'-=0.5')
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