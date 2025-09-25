o.

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

📜 License

MIT License © 2025

👉 Would you like me to also add screenshots (like your login page & notes page) into the README so your GitHub repo looks more attractive?

You said:
ok
ChatGPT said:

Perfect 👍

Here’s the updated README.md with your screenshots included. You can drop your images into a folder like /public/screenshots/ and then reference them.

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

📧 Email (SMTP via Brevo) ready for notifications

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

📷 Screenshots
🔑 Login Page

📝 Notes Dashboard

📌 Roadmap

 Email notifications on signup

 Password reset

 Stripe integration for paid upgrades

 Tenant dashboard
