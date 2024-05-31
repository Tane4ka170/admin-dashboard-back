# Admin Dashboard

A template for setting up a Node.js server with Express and MongoDB, featuring user authentication, customer management, order management, product management, supplier management, income tracking, and dashboard functionalities.

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm (v6+)
- MongoDB instance

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/admin-dashboard.git
   cd admin-dashboard
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a .env file in the root of the project with the following content:
   ```plaintext
   DB_HOST=your_mongodb_connection_string
   ```

### Running the Server
◻︎ Development:

```bash
npm run start:dev
   ```
◻︎ Production:

```bash
npm run start
   ```
The server listens on port 7284.

### API Endpoints
◻︎ Auth: POST /api/user/register, POST /api/user/login, POST /api/user/logout

◻︎ Customers: CRUD operations at /api/customers

◻︎ Orders: CRUD operations at /api/orders

◻︎ Products: CRUD operations at /api/products

◻︎ Suppliers: CRUD operations at /api/suppliers

◻︎ Incomes: CRUD operations at /api/incomes

◻︎ Dashboard: GET /api/dashboard

### Error Handling
◻︎ 404 Not Found: Returns {"message": "Not found"}

◻︎ Server Errors: Returns {"message": "Server error"}

### Linting
◻︎ Check for linting errors:

```bash
npm run lint
   ```

◻︎ Auto-fix linting errors:

```bash
npm run lint:fix
   ```

### Project Structure
◻︎ server.mjs: Main server entry point

◻︎ app.mjs: Express app setup

◻︎ routes/api: Route handlers

◻︎ controllers: Business logic

◻︎ models: Mongoose models
