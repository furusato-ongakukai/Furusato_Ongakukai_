// ============ CONCERT HISTORY ============
const concertHistory = [
  { year:2018, text:"第1回公演 - 2018年3月16日 防府市地域交流センターアスピラート音楽ホール" },
  { year:2022, text:"初の下関市・防府市・周南市公演" },
  { year:2023, text:"山口市・下関市・その他各地で多数の公演" },
  { year:2023, text:"2023年12月19日 下関市角倉小学校 音楽鑑賞教室" },
  { year:2024, text:"まちかどコンサート・音楽鑑賞教室など継続実施" },
];
const historyEl = document.getElementById('concertHistory');
historyEl.innerHTML = concertHistory.map(c => `
  <div style="display:flex;gap:1rem;align-items:flex-start;padding:0.7rem 0;border-bottom:1px solid #e8e2d9;">
    <span style="flex-shrink:0;font-family:'Cormorant Garamond',serif;font-size:0.8rem;color:var(--accent);letter-spacing:0.1em;min-width:40px;">${c.year}</span>
    <span style="font-size:0.82rem;color:var(--text-light);font-weight:300;line-height:1.7;">${c.text}</span>
  </div>
`).join('');
