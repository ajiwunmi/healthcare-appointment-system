# Healthcare Appointment System

The Healthcare Appointment System MVP is designed to streamline appointment scheduling between patients and doctors. It features authentication, role-based dashboards, and calendar-based appointment management, all implemented with a Laravel backend and React frontend.

## Features

### Core Features

- **Patient Features:**
  - Book, view, and manage appointments.
  - Receive email/SMS reminders for upcoming appointments.
- **Doctor Features:**
  - Manage availability (time slots).
  - View and update schedules.
- **Admin Features:**
  - Monitor all appointments.
  - Manage users and system settings.

### Technology Stack

- **Backend:** Laravel 9 with REST API and Passport for authentication.
- **Frontend:** React with React-Bootstrap for styling and FullCalendar.js for interactive scheduling.
- **Database:** MySQL (or PostgreSQL) for relational data management.
- **Notifications:** Twilio (SMS) and SendGrid (email) integration.
- **Compliance:** Basic adherence to HIPAA standards.

---

## Installation and Setup

### Prerequisites

1. PHP >= 8.1 with Composer installed.
2. Node.js >= 16.x with npm installed.
3. MySQL or PostgreSQL database.

### Backend Setup

1. Install dependencies:

   ```bash
   composer install
   ```
3. Configure environment variables:

   ```bash
   cp .env.example .env
   ```

   Update `.env` with database, mail, and Twilio configurations:

   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=healthcare_db
   DB_USERNAME=root
   DB_PASSWORD=password

   MAIL_MAILER=smtp
   MAIL_HOST=smtp.example.com
   MAIL_PORT=587
   MAIL_USERNAME=your-email@example.com
   MAIL_PASSWORD=your-password
   MAIL_ENCRYPTION=tls

   TWILIO_SID=your-twilio-sid
   TWILIO_AUTH_TOKEN=your-twilio-auth-token
   TWILIO_PHONE_NUMBER=+1234567890
   ```
4. Generate application key:

   ```bash
   php artisan key:generate
   ```
5. Run migrations and seed the database:

   ```bash
   php artisan migrate --seed
   ```
6. Start the development server:

   ```bash
   php artisan serve
   ```

---

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd ../frontendUI
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

1. **Patients:**
   * Register and log in.
   * Book appointments using the calendar interface.
   * Manage existing appointments from the dashboard.
2. **Doctors:**
   * Log in to view assigned appointments.
   * Manage availability in the "Availability" section.
3. **Admins:**
   * Access all user and appointment data via the admin dashboard.

---

## API Endpoints

### Authentication

* **POST** `/api/register` - Register a new user.
* **POST** `/api/login` - Log in and receive an access token.

### Appointment Management

* **GET** `/api/appointments` - Retrieve user-specific or all appointments.
* **POST** `/api/appointments` - Create a new appointment.
* **PUT** `/api/appointments/{id}` - Update an appointment.
* **DELETE** `/api/appointments/{id}` - Delete an appointment.

### Availability Management

* **GET** `/api/doctors/{id}/availability` - Get doctor availability.
* **POST** `/api/doctors/{id}/availability` - Add/update availability slots.

---

## Testing

### Backend Testing

Run unit tests for Laravel:

```bash
php artisan test
```

### Frontend Testing

Run React tests:

```bash
npm test
```

---

## Roadmap

1. **Next Steps:**
   * Implement advanced analytics with Chart.js.
   * Add push notifications via Firebase or real-time updates with Pusher.
2. **Future Features:**
   * Predictive analytics for appointment no-shows.
   * Comprehensive EHR (Electronic Health Record) integration.

---
