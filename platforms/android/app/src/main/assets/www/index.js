
// import * as PIXI from "pixi.js"

window.onload = () => {

    let resize = () => {
        const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        const scale = Math.min(screenWidth / App.width, screenHeight / App.height);

        const enlargedWidth = Math.floor(scale * App.width);
        const enlargedHeight = Math.floor(scale * App.height);

        const horizontalMargin = (screenWidth - enlargedWidth) / 2;
        const verticalMargin = (screenHeight - enlargedHeight) / 2;

        App.view.style.width = `${enlargedWidth}px`;
        App.view.style.height = `${enlargedHeight}px`;
        App.view.style.marginLeft = App.view.style.marginRight = `${horizontalMargin}px`;
        App.view.style.marginTop = App.view.style.marginBottom = `${verticalMargin}px`;
    }


    let App;

    const minDPR = 2;

    App = new PIXI.Application({
        view: document.getElementById("pixi-canvas"),
        resolution: window.devicePixelRatio > minDPR ? window.devicePixelRatio : minDPR || 1,
        autoDensity: true,
        backgroundColor: 0xff0000,
        width: 540,
        height: 960
    });
    // App._width = 540;
    // App._height = 960;
    // App.app.ticker.add(App.update);
    window.addEventListener("resize",  resize);
    resize();
    // App.EE = new utils.EventEmitter;

    // this line enables chrome pixi dev tool
    // (globalThis as any).__PIXI_APP__ = App.app;



    document.querySelector("body").style.display = "block";
    // App.initialize(540, 960, 0x000000);
    // const loading: LoadingScene = new LoadingScene();
    // App.setScene(loading);
}