// ------------------
// common.js
// ------------------

(function(global, $) {
  'use strict';
  /*-----------------------*/
  // ready
  /*-----------------------*/
  $(window).on('load', function() {
    // アンカーリンク
    initFixedMenu();
    initMenu();
    initCategory();
    initAccordion();
    initAnchor();
    initOverlay();
    initSelect();
    accordion();
    if ($('#top').length) {
      initNews();
    }
    if ($('#program').length) {
      initFavNarrowDown();
    }
    if ($('#candidates').length) {
      createSortTags();
    }
  });
  /*-----------------------*/
  // セレクトタグ
  /*-----------------------*/
  function initSelect() {
    $('.js-select').each(function() {
      var $this = $(this);
      var optionLength = $(this).children('option').length;

      $this.addClass('selectArea_select');
      $this.wrap('<div class="selectArea"></div>');
      $this.after('<div class="selectArea_label"></div>');

      var $styledSelect = $this.next('div.selectArea_label');
      $styledSelect.text($this.children('option:selected').text());
      var $list = $('<ul />', {
        'class': 'selectArea_list js-selectArea_list'
      }).insertAfter($styledSelect);

      for (var i = 0; i < optionLength; i++) {
        $('<li />', {
          'class': 'selectArea_list_item',
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
        }).appendTo($list);
      }

      var $listItems = $list.children('li');

      $styledSelect.on('click', function(e) {
        e.stopPropagation();
        $('.js-myMenuList').hide();
        $('div.selectArea_label.active').not(this).each(function() {
          $(this).removeClass('active').next('ul.selectArea_list').hide();
        });
        $(this).toggleClass('active').next('ul.selectArea_list').toggle();
      });

      $listItems.on('click', function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
      });

      $(document).on('click', function(e) {
        $styledSelect.removeClass('active');
        $list.hide();
      });

    });
  };
  /*-----------------------*/
  // accordion
  /*-----------------------*/
  function accordion() {
    var $trigger = $('.js-accordion');
    var $target;
    $trigger.on('click', function(e) {
      $target = $(this).next('.js-accordionTarget');
      $(this).toggleClass('is_active');
      $target.slideToggle();
      e.preventDefault();
    });

  };
  /*-----------------------*/
  // アンカーリンク初期化
  /*-----------------------*/
  function initAnchor() {
    /*-----------------------*/
    // URLにハッシュがついているか
    /*-----------------------*/
    var hash = location.hash;
    if ($(hash).length) {
      moveAnchor(hash,true);
    }
    /*-----------------------*/
    // #で始まるアンカーをクリックした場合に処理
    /*-----------------------*/
    $(document).on('click', 'a[href^="#"]', function() {
      var $self = $(this),
        href = $self.attr('href'),
        target = href === '#' || href === '' ? 'html' : href;
      moveAnchor(target);
      // URLを書き換える
      window.history.replaceState(null, null, href);
      return false;
    });
  }
  /*-----------------------*/
  // initNews
  /*-----------------------*/
  function initNews() {
    // URL
    // var rssUrl = 'http://blog.scalamatsuri.org/rss';
    var rssUrl = '/assets/dummy/feed.xml';
    // 表示件数
    var maxNum = 5;
    $.ajax({
        url: rssUrl
      })
      .then(
        // 成功時
        function(data) {
          var $items = $(data).find('item');
          var rssLength = $items.length + 0;
          var count = 0;
          var setTimer;
          if (rssLength >= maxNum) {
            rssLength = maxNum;
          }
          if (!rssLength) {
            $('.news').hide();
            return false;
          }
          $items.each(function(i) {
            if (i >= maxNum) {
              return false;
            }
            var el = $(this);
            var htmlstr = '';
            var newsTitle = el.find('title').text();
            var newsURL = el.find('link').text();
            htmlstr += '<li class="news_item"><a href="' + newsURL + '" target="_blank">' + newsTitle + '<img src="/assets/img/common/arrow-next-w.svg" alt=""></a></li>';
            $('.news_list').append(htmlstr);
          });
          $('.news_item').eq(0).addClass('news_item-show');

          function startTimer() {
            setTimer = setInterval(function() {
              cahgeNewsView(count, rssLength);
              count++;
            }, 3000);
          };

          function stopTimer() {
            clearInterval(setTimer);
          }
          startTimer();
          $('.news_list').mouseenter(function() {
            stopTimer();
          }).mouseleave(function() {
            startTimer();
          });

        },
        // 失敗時
        function(data) {
          $('.news').hide();
        }
      );
  }
  /*-----------------------*/
  // cahgeNewsView
  /*-----------------------*/
  function cahgeNewsView(count, length) {
    var $items = $('.news_list > li');
    var prev = (count) % length;
    var current = (count + 1) % length;
    $items.removeClass('news_item-show news_item-hide').eq(current).addClass('news_item-show');
    $items.eq(prev).addClass('news_item-hide');
  }

  /*-----------------------*/
  // moveAnchor
  /*-----------------------*/
  function moveAnchor(target,hash) {
    var targetPos = $(target).offset().top,
      buffer,
      currentPos = $(window).scrollTop();
    if (!window.Util.isMobileWindow()) {
      // PCのヘッダーサイズ
      buffer = 100;
      if (currentPos > targetPos || hash) {
        buffer = buffer + 120;
      }
    } else {
      // SPのヘッダーサイズ
      buffer = 50;
    }
    var position = targetPos - buffer;
    $('html,body').animate({ scrollTop: position }, 100);
  }
  /*-----------------------*/
  // initAccordion
  /*-----------------------*/
  function initAccordion() {
    $('.js-accordion_trigger').on('click', function() {
      var $self = $(this),
        $target = $self.next('.js-accordion_target');
      if (!window.Util.isMobileWindow()) {
        return false;
      }

      $self.toggleClass('is_opend');
      if (!$target.hasClass('is_opend')) {
        $target.slideDown('fast', function() {
          $target.css('display', '').toggleClass('is_opend');
        });
      } else {
        $target.slideUp('fast', function() {
          $target.css('display', '').toggleClass('is_opend');
        });
      }
      return false;
    });
  }
  /*-----------------------*/
  // initFixedMenu
  /*-----------------------*/
  function initFixedMenu() {
    var $nav = $('.js-header'),
      $subNav = $('.js-subNav'),
      subNavH = $subNav.outerHeight(),
      navH = $nav.outerHeight(),
      startPos = 0,
      isTablet = window.Util.isTabletWindow(),
      isMobile = window.Util.isMobileWindow(),
      windowW = $(window).width(),
      navMinW = $nav.css('min-width').replace('px', '');
    var $cloneDom = $subNav.clone();
      $cloneDom.addClass('is_subNav').appendTo('body');
    $(window).on('scroll', function() {
      if (isMobile) {
        $nav.css({ 'left': '', 'width': '' });
        return false;
      }
      var currentPos = $(this).scrollTop(),
        scrollL = $(this).scrollLeft();
      if (currentPos >= startPos && currentPos > navH) {
        $nav.removeClass('is_active');
        $cloneDom.removeClass('is_showGnav');
      } else {
        $nav.addClass('is_active');
        $cloneDom.addClass('is_showGnav');
      }
      if (currentPos > navH) {
        $nav.addClass('is_fixed');
      } else if (currentPos === 0)  {
        $nav.removeClass('is_fixed');
      }
      if (isTablet) {
        if (currentPos > navH + subNavH - 150) {
          $cloneDom.addClass('is_fixed');
        } else {
          $cloneDom.removeClass('is_fixed');
        }
      } else {
        if (currentPos > navH + subNavH - 100) {
          $cloneDom.addClass('is_fixed');
        } else if (currentPos < navH + subNavH - 220) {
          $cloneDom.removeClass('is_fixed');
        }
      }
      if (navMinW > windowW && $nav.hasClass('is_fixed')) {
        $nav.css({ 'left': -scrollL, 'width': navMinW });
      } else {
        $nav.css({ 'left': '0', 'width': '100%' });
      }
      startPos = currentPos;
    });
    $(window).on('resize', function() {
      menuclose();
      windowW = $(this).width();
      navMinW = $nav.css('min-width').replace('px', '');
      navH = $nav.outerHeight();
      if (window.Util.isMobileWindow()) {
        $('.is_magazine.nav_item').insertAfter('.is_company.nav_item');
      } else {
        $('.is_magazine.nav_item').insertBefore('.is_company.nav_item');

      }
      $(this).scroll();
    });
    // リロード時にリサイズを発火
    $(window).resize();
  }
  /*-----------------------*/
  // initMenu
  /*-----------------------*/
  function initMenu() {
    var $trigger = $('.js-menu_trigger'),
      $target = $('.js-menu_target'),
      $shadow = $('.js-shadow'),
      $close = $('.js-menu_close');
    $trigger.on('click', function(e) {
      e.stopPropagation();
      $('.js-myMenuList').hide();
      $('.js-selectArea_list').hide();
      $target.slideToggle(200).toggleClass('is_active');
      $trigger.toggleClass('is_active');
      $('html').toggleClass('is_gmenuView');
      $shadow.fadeToggle('400').toggleClass('js-menu_shadow');
      $(window).off('.noScrollMenu');
      if ($('html').hasClass('is_gmenuView')) {
        $(window).on('touchmove.noScrollMenu', function(e) {
          e.preventDefault();
        });
      }
      return false;
    });
    $close.on('click', function(e) {
      e.stopPropagation();
      menuclose();
      return false;
    });
    $shadow.on('click', function(e) {
      e.stopPropagation();
      menuclose();
      return false;
    });
    var $menuList = $('.js-myMenuList');
    var $icon = $('.js-myMenuIcon');
    var $menu = $('.js-myMenu');
    $menu.on('click', function(e) {
      e.stopPropagation();
      $menuList.toggle();
      $('.js-selectArea_list').hide();
    });
    $(document).on('click', function(e) {
      $menuList.hide();
    });

  }
  /*-----------------------*/
  // menuclose
  /*-----------------------*/
  function menuclose() {
    var $menu_target = $('.js-menu_target'),
      $shadow = $('.js-menu_shadow');
    $('body').removeClass('is_fixed').css({ 'top': '' });
    if (window.Util.isMobileWindow()) {
      $menu_target.slideUp(200, function() {
        $menu_target.removeClass('is_active').css('display', '');
      });
    }
    $shadow.hide().css({ 'z-index': '', 'display': '' }).removeClass('js-menu_shadow');
    $('.js-menu_trigger').removeClass('is_active');
    $(window).off('.noScrollMenu');
    // android4系対策 clickが下のaタグに反応しないように
    setTimeout(function() {
      $('html').removeClass('is_gmenuView');
    }, 500);
  }
  /*-----------------------*/
  // initOverlay
  /*-----------------------*/
  function initOverlay() {
    var $trigger = $('.js-modal'),
      targetId = '',
      $target = '',
      $anc = $('.js-anc'),
      $close = $('.js-close');
    $anc.on('click',  function(e) {
      e.stopPropagation();
    });
    $trigger.on('click', function() {
      targetId = $(this).data('target');
      $target = $('.' + targetId);
      menuclose();
      $target.removeClass('fadeOut').addClass('is_active fadeIn animated');
      $('html').toggleClass('is_overlayView');
      $(window).off('.noScrollOverlay');
      if ($('html').hasClass('is_overlayView')) {
        $(window).on('touchmove.noScrollOverlay', function(e) {
          e.preventDefault();
        });
      }
      return false;
    });

    $close.on('click', function() {
      $target.removeClass('fadeIn').addClass('fadeOut animated').delay(1000).queue(function() {
        $(this).removeClass('is_active').dequeue();
      });
      $('html').removeClass('is_overlayView');
      $(window).off('.noScrollOverlay');
      return false;
    });
  }
  /*-----------------------*/
  // initCategory
  /*-----------------------*/
  function initCategory() {
    var $categoryTarget = $('.js-category'),
      categoryTrigger = '.js-category_target';
    $categoryTarget.hover(function() {
      // SPだったら以下の処理をしない
      if (window.Util.isMobileWindow()) {
        return false;
      }
      $(this).addClass('is_hover');
      $(this).find(categoryTrigger).toggleClass('is_active');
    }, function() {
      // SPだったら以下の処理をしない
      if (window.Util.isMobileWindow()) {
        return false;
      }
      $(this).find(categoryTrigger).toggleClass('is_active');
      $(this).removeClass('is_hover');
    });
  }
  /*-----------------------*/
  // initFavNarrowDown
  /*-----------------------*/
  function initFavNarrowDown() {
    var render,
        selected = null,
    $favLabel = $('.js-favLabel'),
    $fav = $('.js-fav');

    render = function () {
      if (selected === null) {
        $('.schedule_event, .program, .schedule_content').removeClass('is_disabled');
      } else {
        $('.schedule_event').each(function (idx, el) {
          var checked;
          checked = $(el).find('.js-fav').filter(function (idx, el) {
            return $(el).is(':checked');
          });
          if (checked.length > 0) {
            return $(el).removeClass('is_disabled');
          } else if (!$(el).hasClass('schedule_event-allArea')) {
            return $(el).addClass('is_disabled');
          }
        });
        $('.schedule_content').each(function(idx, el) {
          var checked;
          var $event = $(el).find('.schedule_event');
          var hasAllarea = $(el).find('.schedule_event').hasClass('schedule_event-allArea');
          checked = $(el).find('.js-fav').filter(function (idx, el) {
            return $(el).is(':checked');
          });
          if (checked.length > 0) {
            return $(el).removeClass('is_disabled');
          } else if (!hasAllarea) {
            return $(el).addClass('is_disabled');
          }
        });
      }
    };
    $('.js-changeView').on('click', function(e) {
      $(this).toggleClass('is_active');
      if (selected === null) {
        selected = true;
      } else {
        selected = null;
      }
      render();
      e.preventDefault();
    });
  }
  /*-----------------------*/
  // createSortTags
  //
  /*-----------------------*/
  function createSortTags(){
    var allTags,
        $labels,
        $badge,
        render,
        selected,
        tags = {},
        sortTags = [],
        cnt = 0;
    allTags = $('.js-tag').map(function (idx, el) {
      return $(el).text();
    });
    // 各タグの数を集計
    for(var i=0;i< allTags.length;i++) {
      var key = allTags[i];
      tags[key] = (tags[key])? tags[key] + 1 : 1 ;
    }
    // 連想配列に変換
    $.each(tags,function(index, el) {
      var arr = {};
      arr.name = index;
      arr.value = el;
      sortTags.push(arr);
      cnt++;
    });
    // ソート ABC順
    sortTags.sort(function(a, b) {
      if (a.name > b.name)
        return 1;
      if (a.name < b.name)
        return -1;
      return 0;
    });
    // 表示切り替え
    $.each(sortTags, function(index, val) {
       $labels = $('<li />').addClass('tagIndex_item js-tag').text(val.name).data('tag', val.name);
       $badge = $('<span />').addClass('tagIndex_item_badge').text(val.value).appendTo($labels);
       $labels.appendTo('.js-tags');
    });
    selected = null;
    render = function () {
      if (selected === null) {
        $('.schedule_event').removeClass('is_disabled');
      } else {
        $('.schedule_event').each(function (idx, el) {
          var selectedTag;
          selectedTag = $(el).find('.js-tag').filter(function (idx, tagEl) {
            return $(tagEl).data('tag') === selected;
          });
          if (selectedTag.length > 0) {
            return $(el).removeClass('is_disabled');
          } else {
            return $(el).addClass('is_disabled');
          }
        });
        $('.program').each(function(idx, el) {
          var selectedTag;
          selectedTag = $(el).find('.js-tag').filter(function (idx, tagEl) {
            return $(tagEl).data('tag') === selected;
          });
          if (selectedTag.length > 0) {
            return $(el).removeClass('is_disabled');
          } else {
            return $(el).addClass('is_disabled');
          }

        });
      }
      return $('.js-tag').each(function (idx, el) {
        if ($(el).data('tag') === selected) {
          return $(el).addClass('is_current');
        } else {
          return $(el).removeClass('is_current');
        }
      });
    };
    $('.js-tag').on('click', function (e) {
      e.stopPropagation();
      var clicked;
      clicked = $(e.currentTarget).data('tag');
      selected = clicked === selected ? null : clicked;
      return render();
    });
  }

})(this, jQuery);
