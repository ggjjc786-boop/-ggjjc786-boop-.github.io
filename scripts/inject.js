// 注入自定义样式和脚本
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/css/custom.css">');
hexo.extend.injector.register('body_end', '<script src="/js/custom.js"></script>');
