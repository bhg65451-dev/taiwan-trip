# 探索台灣｜台灣觀光旅遊導覽系統

以繁體中文打造的台灣旅行靈感網站，提供景點探索、行程收藏、美食指南與自由行工具。採用本地結構化資料，無須資料庫或付費 API。

## 特色

- Next.js App Router、TypeScript 嚴格模式與 Tailwind CSS。
- 15 個台灣各地景點、即時關鍵字搜尋與地區／主題篩選。
- 景點交通、最佳季節、停留時間及在地美食介紹。
- 瀏覽器收藏、多日行程、三組範例路線、備忘錄與文字行程複製。
- 台灣小吃、六大夜市、旅遊工具箱與多幣別換算。匯率為參考估算，非即時牌告。
- Unsplash 圖片漸層備援，停用 Next Image 最佳化以支援 Vercel 部署。

## 本地啟動

需求：Node.js 20.9 以上。

    npm install && npm run dev

瀏覽 http://localhost:3000。正式驗證：

    npx tsc --noEmit
    npm run build

## 部署到 Vercel

1. 將專案推送至 GitHub。
2. 在 Vercel 選擇 Add New → Project，匯入 GitHub repository。
3. Framework Preset 選擇 Next.js，Build Command 使用 npm run build。
4. 點選 Deploy；不需環境變數或外部服務設定。

也可使用 Vercel CLI：vercel 建立預覽，vercel --prod 部署正式站。

## 結構

- app/：App Router 頁面與全域樣式
- src/components/：模組化互動元件
- src/data/taiwanData.ts：景點、美食與夜市資料
- src/types/tourism.ts：資料型別

交通、道路管制、開放資訊與匯率可能變動，出發前請以官方最新公告為準。
