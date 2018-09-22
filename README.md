# Customer Orders API
API responsible for listing customers and their orders.

## Prerequisites
* A GitHub account
* Git installed on your local machine
* Node JS installed on your local machine

## Setup
Create a fork of this repository and clone your fork on to your local machine. From the app directory, open a terminal and run `npm install` this will install the local dependencies for the project. To run the API run `npm start` if the API launched successfully you should see the message: *"App listening on port: 8085"*.

## Usage
To make a request to the API make a HTTP request to one of the following routes:

* `http://localhost:8085/customer/list`
* `http://localhost:8085/customer/get` 
* `http://localhost:8085/order/list`

You can also get the orders for a customer via `http://localhost:8085/order/list?customer=39`

## Your Tasks

1. Add a search parameter to the `/customer/list` route, this should bring back any customers that have a name that contains the search term.

2. Create a simple web application that displays the customers and allows the user to search for them using the `/customer/list` route. Clicking on a customer should list all orders for a customer, if no orders are found, ensure that a messageis displayed that reads "No orders have been booked for this customer yet."

## Submitting your work

Push all your work up to your fork and send an email containing your name and a link to your repository  to **ctrain@pcs-publishing.com**

If you have any questions, or run into any problems please feel free to contact me via the email.