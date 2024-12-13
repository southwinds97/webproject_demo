$(function () {
  // GNB 메뉴 이벤트
  $('#header .gnb > li')
    .on('mouseenter', function () {
      $(this).addClass('on').siblings().removeClass('on');
    })
    .on('mouseleave', function () {
      $(this).removeClass('on');
    });

  //언어메뉴 이벤트
  $('#header .side_wrap .lang_wrap').on('click', function () {
    $(this).toggleClass('on');
  });

  //검색창 이벤트
  $('#header .side_wrap .search').on('click', function () {
    $('#header .search_wrap').toggleClass('Active');
  });
  $('#header .search_wrap .inner .close_btn').on('click', function () {
    $('#header .search_wrap').removeClass('Active');
  });

  //메인슬라이더
  let mainSlider = new Swiper('.main_slider .swiper', {
    loop: true,
    // 슬라이드 이동 속도
    speed: 1000,
    autoplay: {
      delay: 5000,
      // 슬라이더 내부 인터렉션발생시 자동재생 안멈추게
      disableOnInteraction: false,
    },
    slidesPerView: 'auto', // 한 번에 보여질 슬라이드의 수를 자동으로 설정합니다.
    centeredSlides: true, // 활성 슬라이드를 중앙에 배치합니다.
    spaceBetween: 200,
    pagination: {
      // 페이지네이션 클릭으로 이동
      clickable: true,
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.main_slider .autoplay_btn').on('click', function () {
    $(this).toggleClass('on');

    //재생, 일시정지
    if ($(this).hasClass('on')) {
      mainSlider.autoplay.stop();
    } else {
      mainSlider.autoplay.start();
    }
  });

  // 메인인프라
  let mainInfra = new Swiper('.main_infra .swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true, // crossFade 옵션을 활성화합니다.
    },
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.pagination_bullet',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Swiper 인스턴스가 생성된 직후에 현재 활성화된 슬라이드의 인덱스를 가져오기
  let initialIndex = mainInfra.realIndex;

  // 처음 활성화된 <li> 요소에 active 클래스를 추가
  $('.infra_btn li').eq(initialIndex).addClass('active');

  // infra_btn의 각 li 요소에 클릭 이벤트 추가
  $('.infra_btn li')
    .off('click')
    .on('click', function (e) {
      e.preventDefault();
      let slideIndex = $(this).index();
      mainInfra.slideToLoop(slideIndex);
    });

  mainInfra.on('slideChange', function () {
    let activeIndex = this.realIndex;

    $('.infra_btn li').removeClass('active');
    $('.infra_btn li').eq(activeIndex).addClass('active');
  });

  $('.main_infra .autoplay_btn').on('click', function () {
    $(this).toggleClass('on');

    //재생, 일시정지
    if ($(this).hasClass('on')) {
      mainInfra.autoplay.stop();
    } else {
      mainInfra.autoplay.start();
    }
  });

  $('#footer .familysite_wrap').on('click', function () {
    $(this).toggleClass('on');
  });

  //상단 이동 버튼
  $('#footer .top_btn').on('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  //상단이동 버튼 숨김
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      // 스크롤 위치가 0보다 크면, 상단 이동 버튼을 표시합니다.
      if (!$('#footer').hasClass('sub_footer')) {
        $('.top_btn').show();
      }
    } else {
      if (!$('#footer').hasClass('sub_footer')) {
        // 스크롤 위치가 0이면, 상단 이동 버튼을 숨깁니다.
        $('.top_btn').hide();
      }
    }
  });

  //모바일 메뉴
  $('#header .m_site').on('click', function () {
    $('body').addClass('on');
    $('header').addClass('on');
    $(this).addClass('on');
    $('#header .m_gnb_wrap').addClass('on');
    $('#header .m_gnb_wrap .scroll').addClass('on');
  });

  $('.m_depth1>li').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
  });

  $('.m_depth2>li').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('on').siblings().removeClass('on');
  });
  $('#header .m_gnb_wrap .m_close_btn').on('click', function () {
    $('body').removeClass('on');
    $('header').removeClass('on');
    $(this).removeClass('on');
    $('#header .m_gnb_wrap .scroll').removeClass('on');
  });

  // 모바일 메뉴 사라지는 시간 조정
  $('#header .m_gnb_wrap .m_close_btn').on('click', function () {
    setTimeout(function () {
      $('#header .m_gnb_wrap').removeClass('on');
    }, 500);
  });

  //모바일 서브메뉴 depth3가 있는 경우 클래스 추가
  $('.m_depth2>li:has(.m_depth3)').addClass('has-depth3');

  // 서브페이지 공지사항 외부링크버튼 열기
  $('.release .sub_location .sub_link .link_btn').on('click', function (e) {
    e.preventDefault();
    $('.release .sub_location').addClass('on');
  });
  // 서브페이지 공지사항 외부링크버튼 닫기
  $('.release .sub_location .sub_sns_link .close_btn').on(
    'click',
    function (e) {
      e.preventDefault();
      $('.release .sub_location').removeClass('on');
    }
  );
  // 서브페이지 공지사항 메뉴
  $('.release .release_gnb>li').on('mouseenter', function () {
    $(this).addClass('on').siblings().removeClass('on');
  });
  $('.release .release_gnb>li').on('mouseleave', function () {
    $(this).removeClass('on');
  });

  // 공지사항 상단 이동 버튼
  $('.release_top_btn').on('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
