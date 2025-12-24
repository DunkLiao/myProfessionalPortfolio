# Dunk 專業資歷與證照組合

專業履歷網站，展示金融、資訊安全、AI 數據分析及專利發明等跨領域專業能力。

## 專案結構

```
my/
├── index.html          # 主頁面
├── assets/
│   ├── main.js        # 互動邏輯（深淺模式、ECharts、導覽高亮）
│   └── styles.css     # 自訂樣式
└── README.md          # 說明文件
```

## 技術棧

- **Tailwind CSS** (CDN) - 實用優先的 CSS 框架
- **ECharts** (v5.4.3) - 技能雷達圖視覺化
- **Font Awesome** (v6.5.1) - 圖示庫
- **Google Fonts** - Noto Sans TC / Playfair Display

## 主要功能

### 🎨 深淺模式切換
- 根據系統偏好自動初始化
- 手動切換並持久化至 `localStorage`
- 圖表主題同步切換

### 📊 技能雷達圖
- 六維度能力分佈（金融專業、資訊安全、數據分析、AI 應用、系統開發、法規遵循）
- 響應式設計，自動適應視窗大小
- 深淺模式下不同配色

### 🧭 導覽列互動
- 固定頂部導覽，滾動時增加陰影
- 錨點導航偏移 (`scroll-mt-20`) 避免被導覽列遮蓋
- 自動高亮當前段落對應連結（IntersectionObserver）

## 啟動方式

### 方法 1：直接開啟
雙擊 `index.html` 在瀏覽器中開啟。

### 方法 2：本地伺服器（推薦）
使用任何靜態伺服器，例如：

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server -p 8000

# VS Code Live Server
# 安裝 Live Server 擴充套件後，右鍵點擊 index.html → "Open with Live Server"
```

然後在瀏覽器訪問 `http://localhost:8000`

## 自訂調整

### 修改技能雷達數值
編輯 [assets/main.js](assets/main.js) 第 85 行附近：

```javascript
value: [95, 85, 90, 88, 80, 90],  // 調整各維度分數
```

### 修改配色
編輯 [index.html](index.html) 的 Tailwind 配置（第 20-35 行）：

```javascript
colors: {
    brand: {
        red: '#9A0036',     // 主題紅
        darkRed: '#700025', // 深紅
        pink: '#EEBAC0',    // 粉紅
        purple: '#941C61',  // 紫
        gold: '#D4AF37',    // 金
    }
}
```

### 修改導覽高亮靈敏度
編輯 [assets/main.js](assets/main.js) 第 121-123 行的 `rootMargin`：

```javascript
rootMargin: '-20% 0px -70% 0px',  // 調整觸發範圍
```

## 瀏覽器支援

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

建議使用現代瀏覽器以獲得最佳體驗。

## 授權

© 2025 Dunk
