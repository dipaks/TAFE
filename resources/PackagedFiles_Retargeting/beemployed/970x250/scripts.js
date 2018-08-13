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
		    creative.domElements.ctaCopy01 = document.getElementById('fstFramebuttontxt');
	   creative.domElements.ctaCopy = document.getElementById('buttontxt');
	  creative.domElements.copy01 = document.getElementById('dytxt1');
	    creative.domElements.copy02 = document.getElementById('dytxt2');
		  creative.domElements.copy03 = document.getElementById('dytxt3');
		   // creative.domElements.copy04 = document.getElementById('dytxt4');
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
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Field_2 = "With connections to over 25,000 employers.";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Field_3 = "Mid-year enrolments are now open.";
   // devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Field_4 = "Study online - anywhere, anytime";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].CTA_Button01 = "BE AMBITIOUS";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].CTA_Button = "ENROL TODAY";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Colour = "#CD8BDA";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image01 = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image01.Type = "file";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image01.Url = "men_970x250.png";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image02 = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image02.Type = "file";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Background_Image02.Url = "be.png";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Logo = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Logo.Type = "file";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_Logo.Url = "waratahlogo_970x250.png";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Dynamic_RTO = "RTO 91430";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Exit_URL = {};
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Exit_URL.Url = "http://www.google.com";
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Default = true;
    devDynamicContent.TNS032_Digital_Dynamic01_Feed[0].Active = true;
    


  // NOTE: Here ends the pasted section from Studio.

  // Variable "dynamicContent" gets automatically initialized by Enabler.
  // Change "Travel_Packaged_Solutions_Scheduled" to the name of your dynamic elements.
  
  //var Unique_ID = dynamicContent.TNS032_Digital_Dynamic_Feed[0].Unique_ID;
  creative.dynamicData = devDynamicContent.TNS032_Digital_Dynamic01_Feed[0];


 creative.domElements.backgroundClr.style.backgroundColor=creative.dynamicData.Background_Colour;

 //creative.domElements.backgroundImg.src="background_image.png";

 
  creative.domElements.backgroundImg01.addEventListener('load', creative.imageLoadHandler.bind(creative));
  creative.domElements.backgroundImg01.src=creative.dynamicData.Background_Image01.Url;
  creative.domElements.backgroundImg02.src=creative.dynamicData.Background_Image02.Url;
  creative.domElements.logo.src=creative.dynamicData.Dynamic_Logo.Url;
   creative.domElements.ctaCopy01.innerHTML=creative.dynamicData.CTA_Button01;
  creative.domElements.ctaCopy.innerHTML=creative.dynamicData.CTA_Button;
  creative.domElements.copy01.innerHTML=creative.dynamicData.Dynamic_Field_1;
  creative.domElements.copy02.innerHTML=creative.dynamicData.Dynamic_Field_2;
 creative.domElements.copy03.innerHTML=creative.dynamicData.Dynamic_Field_3;
 // creative.domElements.copy04.innerHTML=creative.dynamicData.Dynamic_Field_4;
   creative.domElements.rto.innerHTML=creative.dynamicData.Dynamic_RTO;
  creative.dynamicExitUrl=creative.dynamicData.Exit_URL.Url;
 // console.log( creative.domElements.copy02);

 


  //creative.dynamicExitUrl = creative.dynamicData.exit_url.Url;

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
 tl.to('#leftper',0.50,{left:'110px'},'+=1')
  .to('#cta-firstframe',.50,{opacity:0},'-=0.50')
 	.to('#bub1',.80,{width:'366px', height:'90px', left:'230px'},'-=0.5')
	.to('#bub2',.80,{width:'285px', height:'85px', top:'111px',left:'205px'},'-=0.8')
   	.to('#betxt',.80,{left:'10px'},'-=0.8')
	.to('#dytxt1',.50,{opacity:1, ease: Power2. easeIn},'-=0.5')
	.to('#dytxt2',.50,{opacity:1, ease: Power2. easeIn},'+=0.2')
	.to('#bub1',.50,{width:'280px',height:'85px',},'-=0.5')
	.to('#bub2',.50,{width:'260px', height:'87px', top:'120px'},'-=0.5')
	.to('#leftper',0.50,{left:'125px'},'-=0.5')
	.to('#cta',.50,{opacity:1, ease: Power2. easeIn},'=0')
	.to('#dytxt1',.50,{opacity:0, ease: Power2. easeOut},'+=2')
	.to('#dytxt2',.50,{opacity:0, ease: Power2. easeOut},'-=0.5')
	.to('#dytxt3',.50,{opacity:1, ease: Power2. easeIn},'=0')
	.to('#rto-code',.50,{opacity:1, ease: Power2. easeIn},'=0')
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

