# TaskFlow — Full Stack Task Tracker

A production-ready Task Tracker web application built with the MERN stack (MongoDB, Express, React, Node.js).

---

## Features

- **Full CRUD** — Create, read, update, and delete tasks
- **Search** — Filter tasks by title in real time
- **Filter** — Filter by status (Pending / In Progress / Completed) and priority (Low / Medium / High)
- **Sort** — Sort by Newest, Oldest, Due Date, Alphabetical, or Priority
- **Stats Dashboard** — Live count of total, completed, in-progress, and high-priority tasks
- **Form Validation** — Title min-length, past due-date prevention, inline error messages
- **Delete Confirmation** — Confirmation dialog before permanent deletion
- **Toast Notifications** — Instant feedback for every action
- **Loading States** — Spinners during all API operations
- **Empty State** — Helpful illustration when no tasks match
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Dark UI** — Dark theme with clean typography

---

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 18 (Vite), Tailwind CSS, Axios, React Hot Toast |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB Atlas, Mongoose           |
| Routing   | React Router DOM v6               |
| Deploy    | Frontend → Vercel, Backend → Render |

---

## Project Structure

```
task-tracker/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Filter.jsx
│   │   │   ├── Sort.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ConfirmDialog.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── hooks/
│   │   │   ├── useTasks.js
│   │   │   └── useFilteredTasks.js
│   │   ├── utils/
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── backend/
    ├── config/
    │   └── db.js
    ├── controllers/
    │   └── taskController.js
    ├── middleware/
    │   └── errorHandler.js
    ├── models/
    │   └── Task.js
    ├── routes/
    │   └── taskRoutes.js
    ├── server.js
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (free tier works)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/task-tracker.git
cd task-tracker
```

### 2. Set up the backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and add your MongoDB URI
npm run dev
```

### 3. Set up the frontend

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env — set VITE_API_URL=http://localhost:5000/api
npm run dev
```

The app will be live at `http://localhost:5173`.

---

## Environment Variables

**Backend (`backend/.env`)**

```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/tasktracker
CLIENT_URL=http://localhost:5173
```

**Frontend (`frontend/.env`)**

```
VITE_API_URL=http://localhost:5000/api
```

---

## API Endpoints

| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| GET    | /api/tasks        | Get all tasks      |
| GET    | /api/tasks/:id    | Get single task    |
| POST   | /api/tasks        | Create a task      |
| PUT    | /api/tasks/:id    | Update a task      |
| DELETE | /api/tasks/:id    | Delete a task      |

### Sample Task Object

```json
{
  "_id": "665abc...",
  "title": "Design dashboard UI",
  "description": "Create wireframes and final screens",
  "status": "In Progress",
  "priority": "High",
  "dueDate": "2025-07-15T00:00:00.000Z",
  "createdAt": "2025-06-28T10:00:00.000Z",
  "updatedAt": "2025-06-28T10:30:00.000Z"
}
```

---

## Deployment

### Backend → Render

1. Push backend to GitHub
2. Create a new Web Service on Render
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add environment variables (MONGO_URI, CLIENT_URL, PORT)

### Frontend → Vercel

1. Push frontend to GitHub
2. Import project on Vercel
3. Set `VITE_API_URL` to your Render backend URL
4. Deploy

---

## Future Improvements

- [ ] User authentication (JWT)
- [ ] Task categories / tags
- [ ] Drag-and-drop Kanban board
- [ ] Due date reminders / notifications
- [ ] Task comments and attachments
- [ ] Export tasks to CSV / PDF
- [ ] Dark / light mode toggle
- [ ] Team collaboration features

---

## Author

Built as a full-stack internship assignment demonstrating MERN stack proficiency.
