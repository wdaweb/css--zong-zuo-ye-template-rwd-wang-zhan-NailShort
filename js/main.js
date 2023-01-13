const wen = new Swiper('.swiper', {
  // mousewheel: true, // 滾輪使用
  // Optional parameters
  direction: 'horizontal', // 輪播圖呈現水平或垂直，'horizontal'、'vertical'
  loop: true, // true 可以循環播放
  slidesPerView: 1, // 每次顯示幾張圖片
  speed: 1000, // 動畫轉場持續時間
  autoplay: {
    delay: 5000, // 自動播放，設定幾秒播放下一張
  },

  pagination: {
    el: '.swiper-pagination',
    // dynamicBullets: true, // 動態指示器
    // type: 'progressbar', // 分頁指示器的類型 'progressbar' 、'fraction'(分數，例如 1/8)
    clickable: true, // 可以點擊
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' /* + (index + 1) */ + '</span>';
    }
  },

  // 啟用下一張、上一張功能
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Scrollbar 下方進度捲軸條
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true // true 只在滑動時顯示，如果不需要進度條，把 html 結構註解起來
  },
});