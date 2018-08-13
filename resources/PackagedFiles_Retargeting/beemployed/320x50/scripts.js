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
  creative.domElements.backgroundImg02 = document.getElementById('betxt');
  creative.domElements.logo = document.getElementById('talogo');
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
};


creative.dynamicDataAvailable = function () {

// Dynamic Content variables and sample values
    var devDynamicContent = {};

    devDynamicContent.TNS032_Digital_Dynamic01_Feed= [{}];
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0]._id = 0;
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Unique_ID = 1;
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Reporting_Label = "B1";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Field_1 = "BE EMPLOYED.";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Field_2 = "With connections to over <br>25,000 employers.";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Field_3 = "Mid-year enrolments <br>are now open.";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].CTA_Button = "ENROL TODAY";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Colour = "#CD8BDA";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image01 = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image01.Type = "file";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image01.Url = "mustardshorts_320x50.png";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image02 = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image02.Type = "file";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image02.Url = "be_320x50.png";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Logo = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Logo.Type = "file";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Logo.Url = "waratahlogo_300x250.png";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_RTO = "RTO 91430";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Exit_URL = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Exit_URL.Url = "http://www.google.com";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Default = true;
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Active = true;

// NOTE: Here ends the pasted section from Studio.
	creative.dynamicData = devDynamicContent.TNS032_Digital_Dynamic01_Feed[0];
	creative.domElements.backgroundClr.style.backgroundColor=creative.dynamicData.Background_Colour;
	creative.domElements.backgroundImg01.addEventListener('load', creative.imageLoadHandler.bind(creative));
	creative.domElements.backgroundImg01.src=creative.dynamicData.Background_Image01.Url;
	creative.domElements.backgroundImg02.src=creative.dynamicData.Background_Image02.Url;
	creative.domElements.logo.src=creative.dynamicData.Dynamic_Logo.Url;
	creative.domElements.ctaCopy.innerHTML=creative.dynamicData.CTA_Button;
	creative.domElements.copy01.innerHTML=creative.dynamicData.Dynamic_Field_1;
	creative.domElements.copy02.innerHTML=creative.dynamicData.Dynamic_Field_2;
	creative.domElements.copy03.innerHTML=creative.dynamicData.Dynamic_Field_3;
	creative.domElements.rto.innerHTML=creative.dynamicData.Dynamic_RTO;
	creative.dynamicExitUrl=creative.dynamicData.Exit_URL.Url;
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
	var tl=new TimelineMax();
	tl.to('#talogo',.50,{opacity:0, ease: Power2. easeInOut},'+=0.5')
	.to('#talogo',0,{left:'320px', opacity:1, top:'10px'},'=0')
	.to('#dytxt1',.50,{opacity:1, ease: Power2. easeIn},'+=0.0')
	.to('#dytxt1',.50,{opacity:0, ease: Power2. easeInOut},'+=1.5')
	.to('#betxt', 0.5,{opacity:0, ease: Power2. easeInOut}, '-=0.5')
	.to('#leftper', 0.5,{opacity:1, ease: Power2. easeIn}, '-=0.0')
	.to('#bub1',.50,{width:'230px', height:'37px'},'=0.5')
	.to('#bub2',.80,{opacity:0.1, width:'255px'},'-=0.5')
	.to('#dytxt2',.50,{opacity:1, ease: Power2. easeIn},'-=1.8')
	.to('#dytxt2',.50,{opacity:0, ease: Power2. easeIn},'+=1.5')
	.to('#dytxt3',.50,{opacity:1, ease: Power2. easeIn},'=0')
	.to('#dytxt3',.50,{opacity:0, ease: Power2. easeIn},'+=1.5')
	//.to('#talogo',.50,{opacity:0, left:'207px', top:'10px'},'-=0.5')
	.to('#bub1',.50,{width:'189px', height:'37px'},'=0.0')
	.to('#bub2',.50,{width:'158px', height:'13px', top:'37px'},'-=0.5')
	.to('#leftper', 0.5,{opacity:0, ease: Power2. easeInOut}, '-=0.5')
	//.from('#talogo',.50,{opacity:0, left:'207px', top:'10px'},'-=0.5')
	.to('#talogo',.50,{opacity:1, width:'92px', height:'24px', left:'207px', top:'8px'},'-=0.0')
	.to('#cta',.50,{opacity:1, ease: Power2. easeIn},'+=0.3')
	
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

