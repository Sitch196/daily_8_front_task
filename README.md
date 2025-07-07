# Daily8 Frontend Task

> This is the frontend for the Daily8 project, built with [Next.js](https://nextjs.org) and TypeScript.

## 🚀 Setup

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗂️ Project Structure

- `src/app/` - Main app directory (pages, layouts, routing)
- `src/components/` - Reusable React components
- `src/context/` - React context providers (e.g., language)
- `src/locales/` - Localization files (English, Romanian)

## 🌐 Features

- Multi-language support (English & Romanian)
- Modular component structure
- Easy-to-edit pages and layouts
- Customizable header and global styles

## 📝 Editing & Navigation

- Main entry: `src/app/page.tsx`
- Layouts: `src/app/layout.tsx` and `src/app/[lang]/layout.tsx`
- Add/edit translations in `src/locales/en/` and `src/locales/ro/`

## 📦 Build & Deploy

- To build for production:
  ```bash
  npm run build
  # or
  yarn build
  ```

---
