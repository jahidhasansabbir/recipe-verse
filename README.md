# TickTock – Premium Watch Store

TickTock is a modern, responsive web application for showcasing and selling premium watches. Built with **Next.js** and **Tailwind CSS**, it offers users a seamless browsing experience, secure authentication, and elegant UI components.

## 🚀 [Live Demo](https://tick-tock-neon.vercel.app/) 

## 🌟 Features

- **User Authentication:**  
  Login and Sign Up using **Email/Password** and **Google OAuth**.  

- **Responsive Banner Slider:**  
  Eye-catching slider on the homepage to highlight featured watches.  

- **Best-Selling Watches Section:**  
  Displays the most popular watches based on sales.  

- **Why TickTock Section:**  
  Highlights the unique selling points of TickTock watches.  

- **Customer Reviews:**  
  Showcase user feedback to build trust and credibility.  

- **Mobile-First Design:**  
  Fully responsive and optimized for phones, tablets, and desktops.  

## 🎨 Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, DaisyUI, React Icons, Swiper  
- **Backend:** Next.js API routes + MongoDB  
- **Authentication:** NextAuth.js (Email/Password + Google)  
- **Deployment:** Vercel  

## Route Summary

### Routes
| Route            | Method | Description                                                           |
| ---------------- | ------ | --------------------------------------------------------------------- |
| `/`              | GET    | Homepage with slider, best-selling watches, Why TickTock, and reviews |
| `/auth/log-in`   | GET    | Login page (Email/Password + Google)                                  |
| `/auth/register` | GET    | Sign Up page (Email/Password + Google)                                |
| `/products`      | GET    | List of all watches                                                   |
| `/products/[id]` | GET    | Single watch details page                                             |
| `/add-product`   | GET    | Allows authenticated users to add a new watch to the database         |

### API Routes
| Route                        | Method   | Description                            |
| ---------------------------- | -------- | -------------------------------------- |
| `/api/products`              | GET      | Fetch all watches                      |
| `/api/products`              | POST     | Add a new watch                        |
| `/api/products/[id]`         | GET      | Fetch details of a single watch        |
| `/api/best-selling-products` | GET      | Fetch watches with highest total sells |
| `/api/auth/[...nextauth]`    | POST/GET | NextAuth.js authentication routes      |

## 💻 Getting Started

### Prerequisites

- Node.js >= 18.x  
- npm or yarn  

### Installation

1. Clone the repository:

```cmd
git clone https://github.com/jahidhasansabbir/recipe-verse.git
cd ticktock
```

2. Install dependencies:
```cmd
npm install
```

3. Setup environment variables:
Create a .env file in the root directory with:

```cmd
MONGO_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
DB_NAME = your_db_name
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_URL = http://localhost:3000
```

4. Run the development server:
```cmd
npm run dev
````

Open [http://localhost:3000](http://localhost:3000) to view the app.

## ⚡ Notes

- The app uses NextAuth.js for secure authentication.

- MongoDB stores all watch data, reviews, and user info.

- Tailwind CSS ensures a clean, modern, and responsive design.

---
Thanks for visiting TickTock! 💜





