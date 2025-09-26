📝 Multi-Tenant Notes SaaS
A multi-tenant SaaS Notes application built with Next.js, Tailwind CSS, MongoDB, JWT Authentication, and Brevo (SMTP).

Current Status-

Login API works (/api/auth/login) ✅

JWT tokens are being generated ✅

UI login form is functional ✅

Notes page displays for logged-in users ✅

MongoDB connected successfully ✅



## ✅ Completed Features

- User authentication (JWT-based login)
  
- Multi-tenant login system
  
- Database connection (MongoDB Atlas)
  
- Frontend login form with test accounts
  
- Environment configuration (.env)

## ⚠️ Partial Functionality
- Notes API endpoints (`/api/notes`) are created but may return errors.
- CRUD operations are not fully functional yet.

## Test Accounts
- admin@acme.test / password
- user@acme.test / password
- admin@globex.test / password
- user@globex.test / password

- <img width="1920" height="1080" alt="Screenshot (171)" src="https://github.com/user-attachments/assets/9964fde0-2fd7-4dd4-9fac-44edc5c9755b" />

<img width="1920" height="1080" alt="Screenshot (172)" src="https://github.com/user-attachments/assets/54426a41-f9e2-4911-ab3c-61dc396f1ae9" />

<img width="1920" height="1080" alt="Screenshot (173)" src="https://github.com/user-attachments/assets/8c0a8a2c-4fe4-4eea-ade2-3fdf0fcd1237" />



## How to Run
```bash

npm install

npm run dev


Open http://localhost:3000/login



## Next Steps (Planned but not completed)

- Fix Notes API (CRUD with tenant restrictions)

- Add user invitation/role upgrade for Admins

- Styling (currently minimal HTML)




📝 Multi-Tenant Notes SaaS
A multi-tenant SaaS Notes application built with Next.js, Tailwind CSS, MongoDB, JWT Authentication, and Brevo (SMTP).

This app allows multiple organizations (tenants) to manage notes independently with Free and Pro subscription plans.
✨ Features
🔑 Authentication with JWT

🏢 Multi-Tenant Architecture (each tenant has its own users & notes)
📋 Notes Management (Create, View, Delete)
🎯 Role-Based Access (Admin vs User)
💰 Plans
Free → Max 3 notes per tenant
Pro → Unlimited notes
⚡ Upgrade to Pro (Admin-only)
📧 Email (SMTP via Brevo) ready for notifications (extendable)
🛠 Seed Endpoint for creating sample tenants & test accounts
🚀 Tech Stack
Next.js
 – React Framework

Tailwind CSS
 – Styling

MongoDB
 – Database

Mongoose
 – ODM

JWT
 – Authentication

Brevo
 – SMTP Email

🛠 Setup & Installation
1️⃣ Clone repo
git clone https://github.com/your-username/notes-saas.git
cd notes-saas

2️⃣ Install dependencies
npm install

3️⃣ Configure environment

Create a .env.local file:

MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net
JWT_SECRET=your_secret
NODE_ENV=development

SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass
SENDER_EMAIL=your@email.com

4️⃣ Run seed script (creates tenants + test users)
curl -X POST http://localhost:3000/api/seed -H "x-seed-secret: myseedsecret123"


You should see:

{ "ok": true }

5️⃣ Start dev server
npm run dev


App runs on 👉 http://localhost:3000

👤 Test Accounts
Tenant: acme
Admin → admin@acme.test / password

User → user@acme.test / password

Tenant: globex

Admin → admin@globex.test / password

User → user@globex.test / password

📌 Roadmap

 Email notifications on signup

 Password reset

 Stripe integration for paid upgrades

 Tenant dashboard

📷 Current Status

✔ Authentication working
✔ Multi-tenant notes system running
✔ Free vs Pro note limit enforced
✔ Upgrade flow for tenants implemented
