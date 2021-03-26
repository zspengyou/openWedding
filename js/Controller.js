window.articleText =
  "三十多年前，有两个小生命诞生在这地球上，一个在陕西，一个在山东。2003年，她随着父母来到了加拿大，他还在中国的一个小镇读书。2013年，她研究生毕业了，他因缘巧合的申请到了加拿大的研究生。2015年，他研究生毕业，只身一人来到了多伦多。2019年8月，他们在两颗红豆上相识，在PAI相见，慢慢相知，相恋。2019年10月，他在加拿大最高的CN塔向她表白。2021年，他决定向她求婚，希望以后一生相守。他征求了全球各地朋友的祝福，希望和大家一起分享这份喜悦。";
window.titleText = "这个星球上的祝福 - the world wishes";
////////提示图层
!(function (root) {
  var Controller = function (delay, startFunc) {
    this.delay = delay; //延迟几分钟开始
    this.startFunc = startFunc;
    this.clicks();
    this.time();
    this.text(window.articleText);
    this.title(window.titleText);
    this.show();
  };

  Controller.prototype.clicks = function () {
    var self = this;
    //开始按钮
    $("#start").click(function () {
      self.clickBol = true;
      self.start();
      self.hide();
    });
  };

  Controller.prototype.start = function () {
    //场景开始后，面板开始有交互
    this.hover();
    this.hide();
    this.startFunc();
  };
  Controller.prototype.hide = function () {
    $("#controller").css("top", "-82%").css("opacity", 0.3);
    // $('#webgl').removeClass('blur');
    // $('#divDisplay').removeClass('blur');
  };

  Controller.prototype.hover = function () {
    var self = this;
    $("#controller").hover(
      function () {
        self.show();
      },
      function () {
        self.hide();
      }
    );
  };

  Controller.prototype.time = function (title) {
    //进去一个状态，过一段时间发生变化
    var self = this;
    var delay = 22000;

    setTimeout(function () {
      if (!self.clickBol) {
        $("#background").css("background", "rgb(0,180,180)");
      }
    }, delay - 2000);

    setTimeout(function () {
      if (!self.clickBol) {
        self.hide;
        self.start();
      }
    }, delay);
  };

  Controller.prototype.show = function () {
    $("#controller").css("top", "0%").css("opacity", 0.7);
    // $('#webgl').addClass('blur');
    // $('#divDisplay').addClass('blur');
  };

  Controller.prototype.text = function (text) {
    const words = text.split("。");
    for (var i = 0; i < words.length; i++) {
      var span = $("<div></div>").text(words[i]);
      // .css('font-size','1.5em');
      $("#article").append(span);
    }
    // $('#article')
    // .text(text)
  };

  Controller.prototype.title = function (title) {
    var color = "rgb(0,200,200)";
    var span = $("<div></div>")
      .css("color", color)
      .css("fontWeight", "bold")
      .css("float", "left")
      .css("fontSize", "30px")
      .css("textShadow", "rgba(255, 255, 255, 1) 1px 1px 1px")
      .css("text-align", "center")
      .text(title);
    $("#articleTitle").append(span);
  };

  Controller.prototype.bg = function (color) {
    $("#background").css("background", "#111");
    setTimeout(function () {
      $("#background").css("background", color);
    }, 1000);
  };

  Controller.prototype.all = function (dataObj) {
    //设置标题
    var title = dataObj.title;
    this.title(title);

    //设置kpi指标
    var kpiArrs = dataObj.kpis;
    for (var k = 0; k < kpiArrs.length; k++) {
      var kpiArr = kpiArrs[k];
      this.kpi(kpiArr, k);
    }
  };

  // function clearDiv(div) { ///////////////////
  //   $(div).find('div').remove();
  // }

  root.Controller = Controller;
})(window);
