#CRUD BOOK, CUSTOMER, TRANSACTION WITH MONGODB

ROUTE | HTTP | Description
------|------|------------
/books | GET | Get all book
/books/:id | GET | Get single Book By ID
/books | POST | Create a single book
/books/:id | PUT | update a book with new info
/books/:id | DELETE | Delete a book

/customers | GET | Get all customers
/customers | POST | Create a single customer
/customers/:id | PUT | Update a customer with new info
/customers/:id | DELETE | Delete a customer

/transactions | GET | Get all transactions
/transactions | POST | Create a single transaction
/transactions/:id | PUT | Update a transaction with new info
/transactions/:id | DELETE | Delete a transactions
/transactions/:id | PATCH | Update Booklist(push) on Transaction 
