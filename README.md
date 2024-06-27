# Full Stack Developer Assignment

This project is a full-stack application developed using Django for the backend and React for the frontend. The backend exposes data via a GraphQL API, and the frontend fetches and displays this data using Apollo Client. The goal is to create a product list and detail page, demonstrating skills in both front-end and back-end development.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [GraphQL Queries](#graphql-queries)
- [Folder Structure](#folder-structure)
- [Contact](#contact)

## Features

- **Backend**: Django with a Product model, populated with sample data.
- **GraphQL**: Expose product data via a GraphQL API.
- **Frontend**: React application using Apollo Client to fetch data from the GraphQL API.
- **Styling**: Integrated with React Bootstrap for responsive and user-friendly UI.

## Technologies Used

- **Backend**: Django, Graphene-Django, SQLite
- **Frontend**: React, Apollo Client, React Bootstrap
- **Others**: CORS Headers

## Setup Instructions

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/full-stack-assignment.git
   cd full-stack-assignment/backend
   ```
2. **Create a virtual environment**:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```
4. **Create and apply migrations**:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
5. **Populate the database with sample data**:

   ```bash
   python manage.py create_sample_data
   ```
6. **Run the server**:

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd ../frontend
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```
3. **Run the React application**:

   ```bash
   npm start
   ```

## Usage

1. **Access the frontend**: Open your browser and go to `http://localhost:3000`.
2. **Product List**: The home page will display a list of products with their name, price, and stock.
3. **Product Detail**: Click on a product name to view detailed information about that product.

## GraphQL Queries

### Fetch All Products

```graphql
query {
  allProducts {
    id
    name
    description
    price
    stock
    created_at
    updated_at
  }
}
```

### Fetch a Single Product by ID

```graphql
query GetProduct($id: ID!) {
  product(id: $id) {
    id
    name
    description
    price
    stock
    created_at
    updated_at
  }
}
```

## Folder Structure

```

full-stack-assignment/
├── backend/
│   ├── manage.py
│   ├── db.sqlite3
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   └── products/
│       ├── migrations/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── schema.py
│       └── management/
│           └── commands/
│               └── create_sample_data.py
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductList.js
│   │   │   └── ProductDetail.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
└── README.md
```
