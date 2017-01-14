$(function() {
    if (typeof window.screenX === "number") {
        // 随机颜色HSL
        var randomHsl = function() {
            return "hsla(" + Math.round(360 * Math.random()) + "," + "60%, 50%, .75)";
        }
        // CSS transform变换应用
        transform = function(element, value, key) {
            key = key || "Transform";
            ["O", "Ms", "Webkit", ""].forEach(function(prefix) {
                element.style[prefix + key] = value;
            });

            return element;
        }
        // 浏览器选择器API
        $ = function(selector) {
            return document.querySelector(selector);
        }, $ = function(selector) {
            return document.querySelectorAll(selector);
        };

        // 显示图片
        var htmlPic = '', arrayPic = [1, 8, 3, 4, 6, 7, 10, 13, 15], rotate = 360 / arrayPic.length;

        arrayPic.forEach(function(i) {
//                htmlPic = htmlPic + '<img id="piece'+ i +'" src="http://image.zhangxinxu.com/image/study/s/s128/mm'+ i +'.jpg" class="piece" />';
            htmlPic = htmlPic + '<img id="piece'+ i +'" src="images/'+ i +'.jpg" class="piece" />';
        });

       var eleStage = $("#stage"), eleContainer = $("#container"), indexPiece = 0;
        // 元素
        var elePics = $(".piece"), transZ = 64 / Math.tan((rotate / 2 / 180) * Math.PI);

        eleContainer.innerHTML = htmlPic;
        // eleContainer.addEventListener("click", function() {
        //     transform(this, "rotateY("+ (-1 * rotate * ++indexPiece) +"deg)");
        // });

        arrayPic.forEach(function(i, j) {
            transform($("#piece" + i), "rotateY("+ j * rotate +"deg) translateZ("+ (transZ + 20) +"px)");
        });





        // 垂直位置居中 - Chrome浏览器
//            var funStageValign = function(element) {
//                var scrollTop = document.documentElement.scrollTop, clientHeight = document.documentElement.clientHeight;
//                offsetTop = element.getBoundingClientRect().top;
//
//                if (parseInt(window.getComputedStyle(element).top) === 0) {
//                    element.style.top = scrollTop + (window.innerHeight - 300) / 2 - offsetTop;
//                } else {
//                    element.style.top = "0px";
//                }
//            };

        if (/chrome/i.test(navigator.userAgent)) {
            // 创建Chrome浏览器视区修正按钮
            var eleButton = document.createElement("input");
            var arrValue = ["舞台位置窗体区域垂直居中", "垂直位置还原"];

            eleButton.type = "button";
            eleButton.value = arrValue[0];
            eleButton.className = "chrome_fix";
            eleButton.addEventListener("click", function() {
                this.value = arrValue[Number(this.value !== arrValue[1])];
                var stage = this.parentNode;
                funStageValign(stage);
            });

            eleStage.appendChild(eleButton);
        }
    } else {
        alert("你好，养猪场不是飞机场，是开不了战斗机的！");
    }
});