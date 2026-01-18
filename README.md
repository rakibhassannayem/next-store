# Next Store - Premium Electronic Gadgets

**Live Link**: [View Live Demo](https://next-store-five-psi.vercel.app)

Next Store is a modern, high-performance e-commerce landing page and product catalog built with Next.js 15, Tailwind CSS, and DaisyUI. It features a premium design with dynamic components and a mock authentication system.

## 🚀 Features

### 🏠 Home Page Components
- **Banner**: A high-impact hero section with a call to action and modern layout.
- **Features**: A grid of service highlights (Secure Payments, Fast Delivery, Global Warranty) with interactive hover states.
- **Trending Products**: Dynamically fetched product list from internal data, showcasing popular items.
- **Stats**: A visual breakdown of company milestones using icons and clear metrics.
- **Testimonials**: Customer reviews with star ratings and avatars in a clean grid.
- **FAQ**: An organized accordion section for common customer questions.
- **CTA**: A bottom call-to-action section for user engagement.

### 🔐 Authentication
- **Mock Login System**: Supports login with hardcoded credentials (`montu@mia` / `123456`).
- **Session Management**: Uses `js-cookie` to persist user sessions.
- **Dynamic Header**: Navbar updates state based on authentication (User info + Logout).
- **Route Protection**: Implemented custom logic in `proxy.js` to handle restricted access to certain sections.

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd next-store
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📍 Route Summary

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Home landing page with all featured sections. |
| `/login` | Public | Authentication page for mock login. |
| `/products` | Protected* | Product catalog showing all available items. |
| `/products/[id]` | Protected* | Detailed view for a specific product. |

*\*Note: Route protection is currently managed via `proxy.js`.*

## 💻 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS, DaisyUI
- **Icons**: React Icons
- **Notifications**: React Toastify
- **State/Auth**: React Context, JS Cookie
