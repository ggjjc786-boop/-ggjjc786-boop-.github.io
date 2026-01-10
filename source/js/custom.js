document.addEventListener('DOMContentLoaded', function() {
  // Add stars background
  var stars = document.createElement('div');
  stars.className = 'stars';
  document.body.insertBefore(stars, document.body.firstChild);

  // Only add banner on homepage
  var indexPage = document.getElementById('recent-posts');
  
  if (indexPage) {
    var icons = [
      { class: 'js', text: 'JS' },
      { class: 'react', text: 'Re' },
      { class: 'python', text: 'Py' },
      { class: 'swift', text: 'Sw' },
      { class: 'html', text: 'H5' },
      { class: 'css', text: 'CSS' },
      { class: 'vue', text: 'Vue' },
      { class: 'docker', text: 'Do' },
      { class: 'node', text: 'No' },
      { class: 'git', text: 'Git' }
    ];
    
    var iconsHtml = icons.map(function(item) {
      return '<div class="icon-item ' + item.class + '"><span>' + item.text + '</span></div>';
    }).join('');
    
    var trackHtml = '<div class="banner-icons-track">' + iconsHtml + '</div>' +
                    '<div class="banner-icons-track">' + iconsHtml + '</div>';
    
    var banner = document.createElement('div');
    banner.className = 'top-banner-section';
    banner.innerHTML = 
      '<div class="banner-card">' +
        '<div class="banner-text">' +
          '<h2>\u6B22\u8FCE\u6765\u5230\u6211\u7684\u535A\u5BA2</h2>' +
          '<h2>\u8BB0\u5F55\u751F\u6D3B\u4E0E\u6280\u672F ~</h2>' +
          '<span class="site-name">bk.880333.xyz</span>' +
        '</div>' +
        '<div class="banner-icons-wrapper">' +
          '<div class="banner-icons">' + trackHtml + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="category-buttons">' +
        '<a href="/tags/" class="cat-btn blue">\uD83D\uDE80 \u79D1\u5B66\u4E0A\u7F51</a>' +
        '<a href="/archives/" class="cat-btn orange">\u2708\uFE0F \u673A\u573A\u63A8\u8350</a>' +
        '<a href="/about/" class="cat-btn green">\uD83D\uDCBB \u5F00\u53D1\u7B14\u8BB0</a>' +
      '</div>';
    
    var bodyWrap = document.getElementById('body-wrap');
    var mainLayout = bodyWrap ? bodyWrap.querySelector('main.layout') : null;
    if (bodyWrap && mainLayout) {
      bodyWrap.insertBefore(banner, mainLayout);
    }
  }
});
