# Furusato_Ongakukai_# ふるさと音楽会 公式サイト

山口県出身アーティストによる音楽団体「ふるさと音楽会」の公式Webサイトです。

---

## サイト概要

| 項目 | 内容 |
|------|------|
| 団体名 | ふるさと音楽会 |
| 活動地域 | 山口県内各地 |
| 公開URL（予定） | https://furusato-ongakukai.com |
| 現在のURL | https://jsproject0701-jpg.github.io/Furusato_Ongakukai_/ |
| ホスティング | GitHub Pages |

---

## ディレクトリ構成

```
/
├── index.html          # トップページ
├── teiki.html          # 定期公演
├── machikado.html      # まちかどコンサート
├── school.html         # 音楽鑑賞教室
├── lesson.html         # 音楽教育・レッスン
├── privacy.html        # プライバシーポリシー
├── 404.html            # エラーページ
├── favicon.ico
├── sitemap.xml
├── robots.txt
├── css/
│   └── style.css       # 共通スタイル
├── images/             # 画像ファイル
└── js/
    ├── config.js       # サイト設定（メール・電話・SNSリンク）
    ├── cms.js          # Google Apps Script からデータ取得（トップページ用）
    ├── teiki.js        # 定期公演ページ用データ取得
    ├── members.js      # メンバー一覧表示・フィルター
    ├── carousel.js     # ヒーローカルーセル
    └── ui.js           # ナビ・ハンバーガーメニュー
```

---

## データ管理（Google Apps Script）

公演情報・メンバー・動画・ヒーロー画像はすべて **Google スプレッドシート + GAS** で管理しています。

- **GAS エンドポイント URL**：`js/cms.js` および `js/teiki.js` 内の `CMS_URL` / `TEIKI_CMS_URL` を参照
- スプレッドシートのシート構成・列順は GAS 側のコードに依存します

### スプレッドシートのシート構成（GAS から返却される JSON）

| キー | 内容 | 列順 |
|------|------|------|
| `concerts` | 公演情報 | [0]タイトル, [1]日付, [2]会場, [3]開演時刻, [4]画像URL |
| `members` | メンバー | [0]名前, [1]楽器, [2]出身地, [3]プロフィール, [4]画像URL |
| `videos` | 演奏動画 | [0]タイトル, [1]Instagram URL |
| `heros` | ヒーロー画像 | [0]タグ, [1]タイトル, [2]説明, [3]画像URL, [4]リンク先, [5]ボタンラベル |

---

## サイト設定の変更

`js/config.js` を編集してください。

```js
const SITE_CONFIG = {
  email:     "furusato.ongakukai.2018@gmail.com",
  phone:     "09071234665",
  twitter:   "https://twitter.com/FurusatoOngaku",
  instagram: "https://instagram.com/furusato.ongakukai",
  youtube:   "https://youtube.com/@Furusato.ongakukai"
};
```

---

## 独自ドメイン取得後の差し替え箇所

ドメイン取得・設定後、以下のファイルを更新してください。

| ファイル | 箇所 | 変更内容 |
|----------|------|----------|
| `index.html` | `<link rel="canonical">` | ドメインURLに差し替え |
| `index.html` | `<meta property="og:image">` | ドメインURLに差し替え（SVG→PNGも推奨） |
| `index.html` | `<meta property="og:url">` | ドメインURLに差し替え |
| `index.html` | Google Analytics タグ | コメントアウト解除し、実際の `G-XXXXXXXX` を設定 |
| `index.html` | Google Search Console タグ | コメントアウト解除し、実際の認証コードを設定 |
| `sitemap.xml` | 全URL | ドメインURLに差し替え |

---

## ローカルでの確認方法

HTMLファイルをブラウザで直接開くと GAS へのfetchがCORSエラーになる場合があります。
ローカルサーバーを立てて確認してください。

```bash
# Python がある場合
python -m http.server 8000
# → http://localhost:8000 で確認
```

または VS Code の **Live Server** 拡張機能を使用してください。

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-03-16 | 初回リリース |
