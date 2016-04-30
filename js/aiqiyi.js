function animate() {
    var list = document.getElementById("list");
    var change = document.getElementById("change");
    var oAs = list.getElementsByTagName("a");
    var otherAs = change.getElementsByTagName("a");
    for (var i = 0; i < oAs.length; i++) {
        oAs[i].index = i;
        oAs[i].onmouseover = function () {
            window.clearInterval(list.timer);
            changeTab(this.index);
        }
        oAs[i].onmouseout = function () {
            list.timer = window.setTimeout(function () {
                nextAnimate(animate())
            }, 2000);
        }
    }
    function changeTab(index) {
        for (var i = 0; i < oAs.length; i++) {
            DOM.removeClass(oAs[i], "selectLi");
            DOM.removeClass(otherAs[i], "selectTab");
        }
        DOM.addClass(oAs[index], "selectLi");
        DOM.addClass(otherAs[index], "selectTab");
    }

    var reg = /(^| +)selectLi( +|$)/;
    for (var i = 0; i < oAs.length; i++) {
        if (reg.test(oAs[i].className)) {
            return i;
        }
    }
}
animate();
function nextAnimate(i) {
    var interval = 2000;
    var list = document.getElementById("list");
    window.clearInterval(list.timer);
    function step() {
        var change = document.getElementById("change");
        var oAs = list.getElementsByTagName("a");
        var otherAs = change.getElementsByTagName("a");
        DOM.removeClass(oAs[i], "selectLi");
        DOM.removeClass(otherAs[i], "selectTab");
        i++;
        if (i > 9) {
            i = 0;
        }
        DOM.addClass(oAs[i], "selectLi");
        DOM.addClass(otherAs[i], "selectTab");
    }

    list.timer = window.setInterval(step, interval);
}
nextAnimate(animate());
function pull_menu() {
    var input = document.getElementsByTagName("form")[0].getElementsByTagName("input")[0];
    var top = document.getElementById("top");
    var pull_down = DOM.getElesByClass("pull-down", top)[0];
    document.body.onclick = function (e) {
        e = e || window.event;
        target = e.target || e.srcElement;
        if (target.tagName == "INPUT"&&target.id=="pull_down") {
            pull_down.style.display = "block";
            pull_down.style.zIndex = 1;
        } else {
            pull_down.style.display = "none";
        }
    }
}
pull_menu();
;
(function () {
    var content = document.getElementById("content");
    var pointM = DOM.getElesByClass("pointM", content)[0];
    var oLis = DOM.getElesByClass("middleTop", pointM);
    var clickLs = DOM.getElesByClass("middleTopBg_3", pointM);
    var clickRs = DOM.getElesByClass("middleTopBg_4", pointM);
    for (var i = 0; i < clickLs.length; i++) {
        clickLs[i].onclick = function () {
            clearInterval(oLis.timer);
            for (var i = 0; i < clickLs.length; i++) {
                if (clickLs[i] != this) {
                    clickLs[i].parentNode.parentNode.style.display = "block";
                } else {
                    this.parentNode.parentNode.style.display = "none";
                }
            }
            oLis.timer = window.setInterval(animate, 3000);
        };
        clickRs[i].onclick = function () {
            clearInterval(oLis.timer);
            for (var i = 0; i < clickRs.length; i++) {
                if (clickRs[i] != this) {
                    clickRs[i].parentNode.parentNode.style.display = "block";
                } else {
                    this.parentNode.parentNode.style.display = "none";
                }
            }
            oLis.timer = window.setInterval(animate, 3000);
        }
    }

    function animate() {
        var i = 0;
        if (oLis[i].style.display == "block") {
            oLis[i].style.display = "none";
            i++;
            oLis[i].style.display = 'block';
        } else {
            oLis[i].style.display = 'block';
            i++;
            oLis[i].style.display = "none";
        }
    }

    oLis.timer = window.setInterval(animate, 3000);
})();
//综艺轮播图
var autoSport1 = document.getElementById("autoSport1");
var oLis = autoSport1.getElementsByTagName("li");
var autoSport2=document.getElementById("autoSport");
var oLis2=autoSport2.getElementsByTagName("li");
function fn2(oLis,autoSport) {
    autoSport.onclick = function(e){
        fn3(oLis,e);
    };
    function fn3(oLis,e) {
        clearInterval(oLis.timer1);
        e = e || window.event;
        target = e.target || e.srcElement;
        if (target.tagName == "A" && target.parentNode.tagName == "UL") {
            [].forEach.call(oLis, function () {
                if (arguments[0].style.display == "block") {
                    arguments[0].style.display = "none";
                } else {
                    arguments[0].style.display = "block";
                }
            });
        }
        oLis.timer = window.setTimeout(fn, 2000);
    }
    function fn() {
        var n = 0;
        clearTimeout(oLis.timer);
        clearTimeout(oLis.timer1);
        function fn1() {
            if(oLis[n].style.display=="none"){
                oLis[n].style.display="block";
                n++;
                if(n>=oLis.length){
                    n=0;
                }
                oLis[n].style.display="none";
            }else{
                oLis[n].style.display="none";
                n++;
                if(n>=oLis.length){
                    n=0;
                }
                oLis[n].style.display="block";
            }
        }
        oLis.timer1 = window.setInterval(fn1, 2000);
    }
    oLis.timer = window.setTimeout(fn);
}
fn2(oLis,autoSport1);
//fn2()
fn2(oLis2,autoSport2);
reg=/^[A-z]\w{4,19}$/;
//导航onscroll
(function(){
    var top=document.getElementById("top")
    var winH=document.documentElement.clientHeight||document.body.clientHeight;
    window.onscroll=function(){
        if(document.body.scrollTop>winH){
            top.style.position="fixed";
            top.style.top=0;
            top.style.left=0;
            top.style.webkitTransition="0.2s";
        }else{
            top.style.position="absolute";
            top.style.top=0;
            top.style.left=0;
        }
    };
    var firstGuide=DOM.getElesByClass("firstGuide",top)[0];
    var dhGuide=DOM.getElesByClass("dhGuide",top)[0];
    dhGuide.onclick=function(){
        if(firstGuide.style.display=="block"){
            firstGuide.style.display="none"
        }else{
            firstGuide.style.display="block";
        }
    }
})();