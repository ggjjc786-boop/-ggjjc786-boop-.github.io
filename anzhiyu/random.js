var posts=["2024/08/15/69yun-airport/","2026/01/10/hello-world/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };