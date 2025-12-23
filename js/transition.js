document.addEventListener("DOMContentLoaded", () => {
  const transitions = document.querySelectorAll('.page-transition');

  // ページ読み込み完了時：中央→上下に開く
  window.addEventListener("load", () => {
    setTimeout(() => {
      transitions.forEach(t => {
        t.classList.add("ready");   // 開くアニメーションに移行
      });
    }, 100);
  });
  window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("is-open");
  });


  // ページ移動時：上下→中央に閉じる
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return; // ダミーリンク無視
      e.preventDefault();

      transitions.forEach(t => {
        t.classList.remove("ready"); // 再び覆う
      });

      setTimeout(() => {
        window.location.href = href;
      }, 800);
    });
  });
});

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const btn = document.querySelector('.hamburger');
  sidebar.classList.toggle('active');

  const opened = sidebar.classList.contains('active');
  btn.textContent = opened ? "✕" : "☰";
  btn.setAttribute("aria-label", opened ? "Close menu" : "Open menu");
}