var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-1315918873731360/8499883101',
    // interstitial: 'ca-app-pub-3940256099942544/1033173712',
    // rewardvideo: 'ca-app-pub-3940256099942544/5224354917',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-1315918873731360/8499883101',
    // banner: 'ca-app-pub-3940256099942544/2934735716',
    // interstitial: 'ca-app-pub-3940256099942544/4411468910',
    // rewardvideo: 'ca-app-pub-3940256099942544/1712485313',
  };
} else {
  admobid = { // for Windows Phone, deprecated
    // banner: '',
    banner: 'ca-app-pub-1315918873731360/8499883101',
    // interstitial: '',
    // rewardvideo: '',
  };
}

function initApp() {
  //ca-app-pub-1315918873731360/8499883101 -- first banner
  alert(123)
  alert(AdMob)
  console.log(AdMob);
  if (!AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: true, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: true, // TODO: remove this line when release
    autoShow: true
  });
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
    initApp(); //???

} else {
    initApp();
}