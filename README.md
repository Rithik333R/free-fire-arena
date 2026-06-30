# Free Fire Arena

A full-stack esports tournament management platform for organizing and running competitive Free Fire tournaments — built with the MERN stack (MongoDB, Express, React, Node.js).

The platform supports three tournament formats (Battle Royale, Clash Squad, Lone Wolf), automated tournament lifecycle management via a scheduled cron job, role-based access control for players vs. admins, and dynamic leaderboard/result tracking.

## Features

**Authentication & Access Control**
- JWT-based authentication with bcrypt password hashing
- Role-based access control (`USER` / `ADMIN`) enforced via middleware
- Protected admin-only routes for tournament management

**Tournament Lifecycle**
- Three supported formats: Battle Royale, Clash Squad, Lone Wolf — each with configurable match types (Solo/Duo/Squad, 1v1–4v4, Full Room)
- Automated status state machine driven by a scheduled cron job (`node-cron`):
  - `UPCOMING → LIVE` when start time passes
  - `LIVE → AWAITING_RESULTS` when end time passes
  - `AWAITING_RESULTS → COMPLETED` when an admin publishes results
  - `UPCOMING → CANCELED` (admin-triggered)
- Orphan detection for tournaments stuck `LIVE` with no end time, flagged for manual admin review
- Room credentials (room ID / password) stored with `select: false` so they're excluded from standard queries and only exposed when explicitly requested

**Tournaments & Results**
- Player registration with in-game name (IGN) and UID tracking
- Admin-managed room credential distribution
- Flexible prize structure — flat winner prize and/or per-kill rewards (for Battle Royale)
- Result publishing with rank, kills, and prize tracking per participant
- Dynamic leaderboard generation

**Admin Dashboard**
- Create, edit, and cancel tournaments
- Set room credentials for registered participants
- Publish match results

## Tech Stack

**Backend:** Node.js, Express 5, MongoDB with Mongoose, JWT, bcrypt, node-cron
**Frontend:** React 19, React Router, Tailwind CSS, Axios, Framer Motion, Vite

## Project Structure

```
free-fire-arena/
├── backend/
│   └── src/
│       ├── config/        # DB connection
│       ├── constants/     # Tournament rules/constants
│       ├── controllers/   # Route handlers
│       ├── cron/          # Scheduled tournament status updater
│       ├── middleware/    # Auth & admin guards
│       ├── models/        # User, Tournament schemas
│       ├── routes/        # Auth, tournament, admin, leaderboard, user routes
│       └── server.js
└── frontend/
    └── src/
        ├── api/            # Axios API modules per resource
        ├── components/     # Shared UI components
        ├── context/        # Auth context
        ├── hooks/          # Custom hooks (useAuth)
        ├── pages/          # Route-level pages (player + admin)
        └── utils/
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or hosted, e.g. MongoDB Atlas)

### Backend Setup
```bash
cd backend
npm install
# Create a .env file with:
#   MONGO_URI=<your_mongodb_connection_string>
#   JWT_SECRET=<your_jwt_secret>
#   PORT=5000
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
# Set VITE_API_URL to your backend URL (default: http://localhost:5000/api)
npm run dev
```

## Roadmap / Future Improvements
- Automated test coverage (currently untested)
- Refresh token flow (currently single short-lived access token)
- Payment gateway integration for entry fees
- Real-time updates (WebSocket-based live tournament status)

## Author

**Rithik Kumar M B**
[GitHub](https://github.com/Rithik333R) · [LinkedIn](https://www.linkedin.com/in/rithik-kumar-m-b-117a571ba/)
