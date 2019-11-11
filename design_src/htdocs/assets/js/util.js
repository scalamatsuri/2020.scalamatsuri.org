// Util
(function($) {
  'use strict';

  // Utilクラス
  var Util = function() {};

  // Utilクラスプロトタイプ
  var P = Util.prototype;

  // ウィンドウ幅でモバイル判定
  P.isMobileWindow = function() {
    var bp = 820;
    var w = window.innerWidth;
    return w <= bp;
  };
  P.isTabletWindow = function() {
    var bp = 1200;
    var w = window.innerWidth;
    return w <= bp;
  };
  // 名前空間nsにUtilクラスを追加
  window.Util = new Util();

})(jQuery);
