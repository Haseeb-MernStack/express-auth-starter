# Express Auth Starter

Lightweight starter for an Express-based authentication service (JWT + email utilities).

## Project overview

This project provides a minimal authentication backend using Express, JWT tokens, and email helpers. It demonstrates how routes, controllers, services, models, and middleware are organized in a small Node.js app.

## Quick start

- Install dependencies: `npm install`
- Start server: `node server.js` (or `npm start` if configured in `package.json`)

## Folder & file overview

- `server.js`: Application entry point; starts the Express server and loads `src/app.js`.
- `src/app.js`: Sets up Express app, middleware, and mounts routes.

- `src/config/db.js`: Database connection setup (e.g., Mongoose connection logic).
- `src/config/env.js`: Loads and exports environment configuration values.
- `src/config/mail.js`: Mail transport configuration (SMTP or similar) used by mail service.

- `src/controllers/auth.controller.js`: Controller functions for authentication endpoints (register, login, etc.).

- `src/middlewares/auth.middleware.js`: Middleware that verifies JWTs and attaches user info to requests.
- `src/middlewares/error.middleware.js`: Centralized error handler that formats and returns errors.
- `src/middlewares/role.middleware.js`: Middleware to check user roles/permissions for protected routes.

- `src/models/user.model.js`: User schema/model definition (typically a Mongoose schema).

- `src/routes/auth.routes.js`: Defines authentication-related routes and links them to controller functions.

- `src/services/mail.service.js`: High-level functions to send emails (e.g., welcome, password reset) using the mail config.
- `src/services/token.service.js`: Token-related helpers (issue, verify JWTs, refresh logic).

- `src/utils/generateToken.js`: Utility to create tokens (JWT or other short-lived tokens used in flows).

## Environment

Configure required environment variables (examples): `PORT`, `MONGO_URI`, `JWT_SECRET`, SMTP credentials for email.

## Notes

- This README only documents project structure and purpose of each file — it does not modify any code behavior.
- If you want, I can expand any section (example requests, full env list, or add scripts).
