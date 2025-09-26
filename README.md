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



