const lightning = document.querySelector('.lightning');

function createBolt() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 1920 1080");

  const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");

  // 稲妻のジグザグ座標をランダム生成
  let points = `${Math.random() * 1920},0 `; // ランダム位置からスタート
  for (let y = 100; y <= 1080; y += 80) {
    const x = Math.random() * 1920;
    points += `${x},${y} `;
  }

  polyline.setAttribute("points", points);
  polyline.setAttribute("class", "lightning-line");

  svg.appendChild(polyline);
  lightning.appendChild(svg);

  // アニメ後に削除
  setTimeout(() => svg.remove(), 400);
}

// ビリビリ頻発（2秒に1回、ほぼ毎回）
setInterval(() => {
  if (Math.random() > 0.2) { // 80%の確率
    createBolt();
    if (Math.random() > 0.5) createBolt(); // たまに2本同時
  }
}, 2000);
