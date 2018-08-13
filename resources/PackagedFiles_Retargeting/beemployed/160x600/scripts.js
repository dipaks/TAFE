// Setup namespace for ad.
var creative = {};

creative.init = function () {
  creative.setupDOMElements();
  creative.enablerInitHandler();
};

creative.setupDOMElements = function () {
	creative.domElements = {};
	creative.domElements.backgroundClr=document.getElementById('content');
	creative.domElements.backgroundImg01 = document.getElementById('leftper');
	creative.domElements.backgroundImg02 = document.getElementById('btxt');
	creative.domElements.backgroundImg03 = document.getElementById('etxt');
	creative.domElements.logo = document.getElementById('talogo');
	creative.domElements.ctaCopy01 = document.getElementById('fstFramebuttontxt');
	creative.domElements.ctaCopy = document.getElementById('buttontxt');
	creative.domElements.copy01 = document.getElementById('dytxt1');
	creative.domElements.copy02 = document.getElementById('dytxt2');
	creative.domElements.copy03 = document.getElementById('dytxt3');
	creative.domElements.rto = document.getElementById('rto-code');
	creative.domElements.cta = document.getElementById('border');
};

creative.enablerInitHandler = function (event) {

  creative.dynamicDataAvailable();
  creative.domElements.cta.addEventListener('click', creative.exitClickHandler);

  if (Enabler.isPageLoaded()) {
    creative.pageLoadHandler();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.PAGE_LOADED,
      creative.pageLoadHandler);
  }
};

creative.dynamicDataAvailable = function () {

// Dynamic Content variables and sample values
    Enabler.setProfileId(1115759);
    var devDynamicContent = {};

    devDynamicContent.TNS032_Digital_Dynamic01_Feed= [{}];
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0]._id = 0;
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Unique_ID = 1;
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Reporting_Label = "B1";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Field_1 = "BE EMPLOYED.";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Field_2 = "With connections to over 25,000 employers.";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Field_3 = "Mid-year enrolments are now open.";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].CTA_Button01 = "BE AMBITIOUS";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].CTA_Button02 = "ENROL TODAY";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Colour = "#CD8BDA";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image01 = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image01.Type = "file";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image01.Url = "mustardshorts_160x600.png";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image02 = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image02.Type = "file";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image02.Url = "b.png";
	devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image03 = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image03.Type = "file";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image03.Url = "e.png";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Logo = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Logo.Type = "file";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Logo.Url = "waratahlogo_160x600.png";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_RTO = "RTO 91430";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Exit_URL = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Exit_URL.Url = "http://www.google.com";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Default = true;
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Active = true;
    Enabler.setDevDynamicContent(devDynamicContent);


// NOTE: Here ends the pasted section from Studio.

// Variable "dynamicContent" gets automatically initialized by Enabler.
// Change "Travel_Packaged_Solutions_Scheduled" to the name of your dynamic elements.
  
// var Unique_ID = dynamicContent.TNS032_Digital_Dynamic_Feed[0].Unique_ID;
	creative.dynamicData = devDynamicContent.TNS032_Digital_Dynamic01_Feed[0];
	creative.domElements.backgroundClr.style.backgroundColor=creative.dynamicData.Background_Colour;
	//creative.domElements.backgroundImg.src="background_image.png";
	creative.domElements.backgroundImg01.src=creative.dynamicData.Background_Image01.Url;
	creative.domElements.backgroundImg02.src=creative.dynamicData.Background_Image02.Url;
	creative.domElements.backgroundImg03.src=creative.dynamicData.Background_Image03.Url;
	creative.domElements.logo.src=creative.dynamicData.Dynamic_Logo.Url;
	creative.domElements.ctaCopy01.innerHTML=creative.dynamicData.CTA_Button01;
	creative.domElements.ctaCopy.innerHTML=creative.dynamicData.CTA_Button02;
	creative.domElements.copy01.innerHTML=creative.dynamicData.Dynamic_Field_1;
	creative.domElements.copy02.innerHTML=creative.dynamicData.Dynamic_Field_2;
	creative.domElements.copy03.innerHTML=creative.dynamicData.Dynamic_Field_3;
	//creative.domElements.copy04.innerHTML=creative.dynamicData.Dynamic_Field_4;
	creative.domElements.rto.innerHTML=creative.dynamicData.Dynamic_RTO;
	creative.dynamicExitUrl=creative.dynamicData.Exit_URL.Url;
	//console.log( creative.domElements.copy02);
};

creative.imageLoadHandler = function (event) {
    creative.pageLoadHandler();
}

creative.exitClickHandler = function (event) {
  window.doClickthrough();
};

creative.pageLoadHandler = function (event) {
  creative.initAd();
};

creative.initAd = function () {
creative.showAd();

};

creative.animation=function()
{
	var tl=new TimelineMax({repeat:-1, repeatDelay:10});
	tl.to('#leftper',.50,{left:'13px', top:'342px'},'+=1')
	.to('#cta-firstframe',.50,{opacity:0},'-=0.2')
	.to('#bub1',.50,{width:'138px', height:'65px', left:'10px',  top:'76px'},'-=0.5')
	.to('#bub2',.50,{width:'137px', height:'159px', top:'141px'},'-=0.6')
	.to('#bub3',.50,{width:'24px', height:'46px',top:'284px'},'-=0.5')
	.to('#bub4',.50,{top:'329px', left:'23px'},'-=0.5')
	.to('#btxt',.50,{top:'302px', left:'10px'},'-=0.5')
	.to('#etxt',.50,{top:'249px', left:'85px'},'-=0.5')
	.to('#dytxt1',.50,{opacity:1, ease: Power2. easeIn},'+=0.0')
	.to('#dytxt2',.50,{opacity:1, ease: Power2. easeIn},'=0')
	.to('#bub1',.50,{width:'160px', height:'141px',left:'0px', top:'0px'},'+=2.0')
	.to('#bub2',.50,{width:'160px', height:'127px'},'-=0.6')
	.to('#bub3',.50,{top:'260px'},'-=0.6')
	.to('#bub4',.50,{top:'306px'},'-=0.6')	
	.to('#btxt',.50,{opacity:0, ease: Power2. easeInOut},'-=0.5')
	.to('#etxt',.50,{opacity:0, ease: Power2. easeInOut},'-=0.5')
	.to('#leftper',.50,{left:'-20px'},'-=0.5')
	.to('#dytxt1',.50,{opacity:0, ease: Power2. easeInOut},'-=0.5')
	.to('#dytxt2',.50,{opacity:0, ease: Power2. easeInOut},'-=0.5')
	.to('#cta',.50,{opacity:1,ease: Power2. easeIn},'-=0.5')
	.to('#dytxt3',.50,{opacity:1, ease: Power2. easeIn},'+=0')
	.to('#rto-code',1.0,{opacity:1},'+=0.30')

}

creative.showAd = function () {
  // Show content.
  document.getElementById('content').className = "show";
  // Hide loader.
  document.getElementById('loader').className = "hide";
  creative.animation();
};

// Start creative once all elements in window are loaded.
window.addEventListener('load', creative.init.bind(creative));
