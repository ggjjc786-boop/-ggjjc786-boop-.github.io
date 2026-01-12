// 注入自定义样式
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/css/custom.css">');
// 暂时禁用自定义JS，使用主题自带的home_top
// hexo.extend.injector.register('body_end', '<script src="/js/custom.js"></script>');

// 默认深色模式
hexo.extend.injector.register('head_begin', `
<script>
(function() {
  // 强制深色模式
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
})();
</script>
`);

// 注入加载页面
hexo.extend.injector.register('body_begin', `
<div id="loading-screen">
  <div class="loading-progress-bar">
    <div class="loading-progress"></div>
  </div>
  <div class="loading-avatar-wrapper">
    <img class="loading-avatar" src="/img/avatar.jpg" alt="avatar">
    <div class="loading-status"></div>
  </div>
</div>
<style>
#loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2d3436;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}
#loading-screen.loaded {
  opacity: 0;
  visibility: hidden;
}
.loading-progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255,255,255,0.1);
}
.loading-progress {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #00b894, #00cec9, #0984e3);
  transition: width 0.3s ease;
}
.loading-avatar-wrapper {
  position: relative;
  width: 150px;
  height: 150px;
}
.loading-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #636e72;
  object-fit: cover;
  animation: pulse 2s ease-in-out infinite;
}
.loading-status {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  background: #00b894;
  border-radius: 50%;
  border: 4px solid #fff;
  animation: statusPulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
@keyframes statusPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}
</style>
<script>
(function() {
  var progress = document.querySelector('.loading-progress');
  var percent = 0;
  var interval = setInterval(function() {
    percent += Math.random() * 15;
    if (percent > 90) percent = 90;
    progress.style.width = percent + '%';
  }, 200);
  window.addEventListener('load', function() {
    clearInterval(interval);
    progress.style.width = '100%';
    setTimeout(function() {
      document.getElementById('loading-screen').classList.add('loaded');
    }, 300);
  });
})();
</script>
`);
