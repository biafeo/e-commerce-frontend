# React E-Commerce Website

## Introduction

Welcome to our E-Commerce Website GitHub repository! This project is a collaboration between Beatriz Feo and Hollis Crowder and consists of a single-page applicaiton hosting an e-commerce website created using React.

Users can browse through a variety of projects fetched from [Fake Store API](https://fakestoreapi.com/), view product details and ratings, sort products by price, search products by name, add products to their cart (and remove them), and view the total cart price.

## Features

_Product Catalog:_ Products are fetched from [Fake Store API](https://fakestoreapi.com/) upon loading so that the product catalog is always up-to-date and extensive. Products are fetched each time the application is rendered.

_Navigation:_ The website features a navigation bar allowing users to move between different product pages, including the home page, product category pages, and the shopping cart.

_Search Bar:_ Each page (except the cart) features a search bar, which enables users to search for specific products by name or keyword, providing a quick and convenient way to find items.

_Product Sorting:_ Users can sort products by price (low-to-high and high-to-low).

_Product Details:_ Clicking on a product's "See More" button reveals additional linked information about a product, such as: product description, category, star-rating, rating count, and price.

_Shopping Cart:_ The shopping cart dynamically updates as users add or remove products, relfecting changes in the quanitity of items and total cart price. Shopping cart contents are persisted to the backend, such that when users navigate away from the application and come back, the contents of the shopping cart are still intact.

_User Authentication:_ Each page contains a toggle button where users can mock "log in and out" of their accounts.

## Demo

![Demo GIF]([link](./my-app/images/E-commerc_GIF.gif)) 

## Instructions

1. Clone the repository to your local machine.
2. Install dependencies using _npm install_
3. Run the development server using _npm start_
4. Access the website through your browser at _http://localhost:3000_

## Resources

Fake Store API: https://fakestoreapi.com/

## Programs Used

- Javascript
- HTTP client for making API requests
- React: Frontend framework for building interactive user interfaces
- React Router: Library for handling navigation within a React application
