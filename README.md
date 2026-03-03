# Employee Management System
# backend

cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver

backend API = `http://localhost:8000`

## Frontend Setup

cd frontend

npm install
npm run dev


# Account urls
POST /api/auth/register/ - User registration
POST /api/auth/login/ - User login
POST /api/auth/logout/ - User logout

# Employees
GET /api/employees/ - List all employees
POST /api/employees/  - Create new employee
GET /api/employees/<id>/  - Get employee details
PUT /api/employees/<id>/  - Update employee
DELETE /api/employees/<id>/  - Delete employee

# Custom Forms
GET /api/forms/  - List all forms
POST /api/forms/  - Create new form
GET /api/forms/<id>/  - Get form details
PUT /api/forms/<id>/  - Update form
DELETE /api/forms/<id>/  - Delete form
