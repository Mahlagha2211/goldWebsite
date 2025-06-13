# 💎 Gold Website

A fully responsive and functional e-commerce website built with **React** and **TailwindCSS**, showcasing product categories, product details, favorites management, and a working shopping cart with order form.

## 🔗 Live Demo

🌐 [View the Live Site](https://gold-website-tau.vercel.app/)

---
## 🚀 Features

- ✅ **React + TailwindCSS** based UI
- 📁 JSON file used as the product data source
- ⚡ Fetched using **Axios** and **React Query**
- 📍 Multi-page structure with:
  - `Home`
  - `Products`
  - `Workflow`
  - `Favorites`

### 🧭 Routing

- Built with **React Router v6**, using nested routes and `<Outlet />`
- Dynamic product category routes:/products/{category}
Example:  
`/products/necklaces` or `/products/rings`
- Clicking on a product redirects to its detail page using its `id`

### ❤️ Favorites

- Products can be added to **Favorites** by clicking the heart icon
- A **Toast** message confirms successful addition
- Heart icon changes color if the item is already favorited
- Favorites page displays added items with option to remove them

### 🛒 Shopping Cart

- Implemented using **React Context** + `useReducer`
- Features:
- Add to cart
- Remove from cart
- Increase/decrease quantity
- Cart UI built with **Flowbite React** components

### 🧾 Order Modal

- Clicking the **Order** button opens a **Modal**
- Modal contains a **Formik** form to collect order details

### 📋 Workflow Page

- Displays the step-by-step order process visually

---

## 🛠️ Tech Stack

- **React**
- **TailwindCSS**
- **React Router v6**
- **Axios**
- **React Query**
- **Formik**
- **React Context + useReducer**
- **Flowbite React**
- **React Toastify**

---

## 📦 Installation
```bash
git clone https://github.com/Mahlagha2211/goldWebsite.git
cd goldWebsite
npm install
npm run dev
- پ
