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



VERCEL SCREENSHOT

<img width="1920" height="1080" alt="Screenshot (178)" src="https://github.com/user-attachments/assets/a3caa6ac-6509-4c57-94ab-a4c553e1d732" />


<img width="1920" height="1080" alt="Screenshot (175)" src="https://github.com/user-attachments/assets/866c8765-5dc1-4a38-8630-5550a25b5d48" />


## How to Run
```bash

npm install

npm run dev


Open http://localhost:3000/login



## Next Steps (Planned but not completed)

- Fix Notes API (CRUD with tenant restrictions)

- Add user invitation/role upgrade for Admins

- Styling (currently minimal HTML)


Note:- node module is not being uploaded because github 100 mb limitation. so please run command after download-  npm i
