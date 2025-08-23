#  Library Management System

A library management system built with **React**, **TypeScript**, and **Redux Toolkit Query (RTK Query)**.  
The system allows users to manage books and borrowing operations through a clean UI, consuming a RESTful backend API.

---

## Project Overview

The goal of this project is to implement a functional **application** with core library features:
- View, add, edit, and delete books.
- Borrow books and track available copies.
- View a borrow summary with aggregated data.  

---

##  Features

### 1. Public Routes
- All pages are accessible without login.

### 2. Book Management 
- **Book List Table**: Title, Author, Genre, ISBN, Copies, Availability, Actions.
- **Actions**:
  -  Edit Book
  -  Delete Book
  -  Borrow Book
  - Add New Book
  - Fields: Title, Author, Genre, ISBN, Description, Copies, Available

### 3. Borrow Book
- Borrow form with:
  - Quantity
  - Due date

### 4. Borrow Summary 
- Aggregated list of borrowed books.
- Shows **Book Title, ISBN, Total Quantity Borrowed**.

---

##  Pages & Routes

| Route              | Description                                    |
|---------------------|------------------------------------------------|
| `/books`           | List of all books with core actions.           |
| `/create-book`     | Form to add a new book.                        |
| `/books/:id`       | Detailed single-book view.                     |
| `/edit-book/:id`   | Edit book details.                             |
| `/borrow/:bookId`  | Borrow form for a selected book.                |
| `/borrow-summary`  | Aggregated borrow summary.                      |

---

##  Installation & Setup

1. **Clone repo**
   ```bash
   git clone https://github.com/aticmahbub/library-management-rtk-query.git
   cd library-management-rtk-query 
   npm install 
   npm run dev
