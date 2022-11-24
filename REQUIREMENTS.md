# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints

#### Users

* Sign Up: 
post('/users') 
Request body:
{
    "firstname": "Fai",
    "lastname": "Alqarni",
    "email": "fai@email.com",
    "password": "12345678"
}

* Login:
post('/users/login')
Request body:
{
    "email": "fai@email.com",
    "password": "12345678"
}

* Show Profile:
get('/me')

* Show Users:
get('/users')

* Show One User:
get('/users/:id')

#### Products

* Show Products:
get('/products')

* Show One Product:
get('/products/:id')

#### Orders

* Initiate Order:
post('/orders')
Request body:
{
    "user_id": 1,
    "status": "Active"
}

* Change Order Status:
put('/orders')
Request body:
{
    "order_id": 1,
    "status": "Complete"
}

* Add to Cart:
post('/carts')
Request body:
{
    "order_id": 1,
    "product_id": 1,
    "quantity": 1
}

* Show Cart:
get('/carts/:id')


## Database Schema

![store_database_schema](https://user-images.githubusercontent.com/59806790/203865215-2e6e910c-0943-454b-854d-5d48f8e78696.jpg)

