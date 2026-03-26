# SHOKUNIN — Master Chef Landing Page 🍣

Landing page chuyên gia F&B trẻ em được xây dựng với **Next.js 16** và **Tailwind CSS v4**.

## Tính năng

- 🎨 Giao diện Sáng & Tươi tắn (Bright & Fresh theme)
- 🤖 **KidFoodie Chatbot** tích hợp AI (OpenAI-compatible API)
- 📱 Responsive hoàn toàn (mobile-first)
- 💬 Bong bóng chat với animation pop-in & typing indicator
- 🎯 Typography responsive: Inter font, leading-relaxed
- 🌈 Quick chips tư vấn nhanh cho mẹ bỉm sữa

## Cài đặt

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

## Cấu trúc dự án

```
src/
├── app/
│   ├── api/chat/route.ts   # Chatbot API (OpenAI-compatible)
│   ├── globals.css          # Design system tokens
│   ├── layout.tsx           # Root layout + Chatbot mount
│   └── page.tsx             # Home page
├── components/
│   └── Chatbot.tsx          # AI Chatbot component
chatbot_data.txt             # Dữ liệu thương hiệu cho chatbot
```

## Chatbot API

Sử dụng OpenAI SDK với custom endpoint:

- **Base URL**: `https://9router.vuhai.io.vn/v1`
- **Model**: `ces-chatbot-gpt-5.4`
- **System Prompt**: Đọc tự động từ `chatbot_data.txt`
