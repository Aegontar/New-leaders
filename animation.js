// home page text animations

function worldOn() {
    document.querySelector('.exposure').classList.toggle("on");
    };
    
    function worldOff() {
    document.querySelector('.exposure').classList.toggle("on");
    };
    
    function treeOn() {
    document.querySelector('.brand').classList.toggle("on");
    };
    
    function treeOff() {
    document.querySelector('.brand').classList.toggle("on");
    };
    
    function mountainOn() {
    document.querySelector('.sales').classList.toggle("on");
    };
    
    function mountainOff() {
    document.querySelector('.sales').classList.toggle("on");
    };
    
    function loop() {
    setTimeout(worldOn, 00)
    setTimeout(worldOff, 4000)
    setTimeout(treeOn, 4000)
    setTimeout(treeOff, 8000)
    setTimeout(mountainOn, 8000)  
    setTimeout(mountainOff, 12000)  
    }
    
     loop();
    
    setInterval(loop, 13000);

   