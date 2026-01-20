# 🚀 Professional Hub - Arjumaan.M Portfolio

A high-performance, modern portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Featuring glassmorphism aesthetics, dynamic animations, and seamless integration with Cloudflare Pages.

## ✨ Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Dynamic Animations**: Smooth transitions and entry effects with Framer Motion.
- **Micro-interactions**: Interactive buttons, cards, and input fields.
- **Contact System**: Fully functional contact form powered by EmailJS.
- **SPA Routing**: Client-side routing with React Router.
- **Edge Deployment**: Hosted on Cloudflare Pages for lightning-fast delivery.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Hosting**: Cloudflare Pages

---

## 🚀 Getting Started

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/Arjumaan/my-portfolio-website.git

# Navigate to the directory
cd my-portfolio-website

# Install dependencies
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

### 3. Running Locally

```bash
npm run dev
```

---

## 📧 EmailJS Setup Guide

To get the contact form working, follow these steps:

1. **Sign Up**: Create a free account at [emailjs.com](https://www.emailjs.com/).
2. **Add Service**: Go to "Email Services" and connect your email provider (e.g., Gmail). Copy the **Service ID**.
3. **Create Template**: Go to "Email Templates" and create a new template. Use the following placeholders to match the code:
    - `{{from_name}}`
    - `{{from_email}}`
    - `{{message}}`
    - Copy the **Template ID**.
4. **Get Public Key**: Go to "Account" > "API Keys" and copy your **Public Key**.
5. **Cloudflare Configuration**:
    - Go to your Cloudflare Pages project settings.
    - Add the three keys listed in the "Environment Setup" section above to the **Environment Variables** section.
    - Redeploy your project.

---

## 📂 Project Structure

- `src/components`: Reusable UI components.
- `src/assets`: Static assets like images and styles.
- `public/`: Public files including `_redirects` for Cloudflare SPA routing.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
