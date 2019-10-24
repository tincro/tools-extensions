var myWin = new Window("palette","Commercial Effects",undefined); // create new Window
    myWin.orientation = "row";    
    var tabGroup = myWin.add("tabbedpanel", undefined,"");

    // create tabbed panel on window
    var tabOne = tabGroup.add("tab",undefined,"Key");

    // Tab for Chroma Key Effects
    var keyBtn = tabOne.add("button", undefined, "Keylight (1.2)");
    var tabTwo = tabGroup.add("tab", undefined, "Color");

    // Tab for Color Effects
    var vibBtn = tabTwo.add("button", undefined, "Vibrance");
    var curvesBtn = tabTwo.add("button", undefined, "Curves");
    var hasBtn = tabTwo.add("button", undefined, "Hue/Saturation");
    var pFilterBtn = tabTwo.add("button", undefined, "Photo Filter");
    var coloramaBtn = tabTwo.add("button", undefined, "Colorama");
    var gradientRampBtn = tabTwo.add("button", undefined, "Gradient Ramp");
    var applyColorLutBtn = tabTwo.add("button", undefined, "Apply Color LUT")

    // Tab for Enhancements
    var tabThree = tabGroup.add("tab", undefined, "Enhance");
    var expBtn = tabThree.add("button", undefined, "Exposure");
    var lvlsBtn = tabThree.add("button", undefined, "Levels");
    var sharpBtn = tabThree.add("button", undefined, "Sharpen");
    var camLensBlurBtn = tabThree.add("button", undefined, "Camera Lens Blur");
    var gausBlurBtn = tabThree.add("button", undefined, "Gaussian Blur");
    var dShadBtn = tabThree.add("button", undefined, "Drop Shadow");
    var glowBtn = tabThree.add("button", undefined, "Glow");
    var warpStblBtn = tabThree.add("button", undefined, "Warp Stabilizer VFX");
    var lumetriBtn = tabThree.add("button", undefined, "Lumetri Color");
    var usMaskBtn = tabThree.add("button", undefined, "Unsharp Mask");

    // Button Commands
    keyBtn.onClick = function(){ btnFun(keyBtn.text); };
    vibBtn.onClick = function(){ btnFun(vibBtn.text); };
    curvesBtn.onClick = function(){ btnFun(curvesBtn.text); };
    hasBtn.onClick = function(){ btnFun(hasBtn.text); };
    pFilterBtn.onClick = function(){ btnFun(pFilterBtn.text); };
    gradientRampBtn.onClick = function(){ btnFun(gradientRampBtn.text); };
    coloramaBtn.onClick = function(){ btnFun(coloramaBtn.text); };
    expBtn.onClick = function(){ btnFun(expBtn.text); };
    lvlsBtn.onClick = function(){ btnFun(lvlsBtn.text); };
    sharpBtn.onClick = function(){ btnFun(sharpBtn.text); };
    camLensBlurBtn.onClick = function(){ btnFun(camLensBlurBtn.text); };
    gausBlurBtn.onClick = function(){ btnFun(gausBlurBtn.text); };
    dShadBtn.onClick = function(){ btnFun(dShadBtn.text); };
    glowBtn.onClick = function(){ btnFun(glowBtn.text); };
    applyColorLutBtn.onClick = function(){ btnFun(applyColorLutBtn.text); };
    warpStblBtn.onClick = function() { btnFun(warpStblBtn.text); };
    lumetriBtn.onClick = function() { btnFun(lumetriBtn.text); };
    usMaskBtn.onClick = function() { btnFun(usMaskBtn.text); };
    // Command to optimize function to run each command
    var btnFun = function(btnName){
        var curItem = app.project.activeItem;
        var selectedLayers = curItem.selectedLayers;
        for (i = 0; i<selectedLayers.length; i++){
            selectedLayers[i].property("Effects").addProperty(btnName);
        }
    };

myWin.center(); // Center Window
myWin.show(); // Show Window
