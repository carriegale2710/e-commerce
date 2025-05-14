# E-Commerce Project

---

# Design Documentation

---

## Doc Links

- [Trello Board](https://trello.com/invite/b/681442690fd3e2409395c65f/ATTI5213dd5bf137b3aa1c71bbdb0d5b846130ABFD1D/e-commerce-13th-may)
- [Firestore link](https://console.firebase.google.com/u/0/project/carries-firebase/firestore/databases/-default-/data/~2Fproducts~2FVbKECzzYpbnbyuVBlaNA)
- [Figma Mockups](https://www.figma.com/design/ygYxZp3P5Ly93cxN0C6lNc/E-commerce?node-id=0-1&t=RniU748WGmmkonOs-1)
- [Project Brief](https://github.com/nology-tech/chicago-consultancy/blob/main/projects/eShop/README.md)
- [Data Flow Diagram](https://dbdiagram.io/d/E-Commerce-Site-68222a6d5b2fc4582f416746)

# Progress Updates

14/05/2025
- [screen recording demo of the website](https://drive.google.com/file/d/1cWRFRAU9EQgnCrFZNK3tbS-47I9uxkOV/view?usp=drive_link)

home page
![image](https://github.com/user-attachments/assets/66e61194-183b-488d-9b7c-9ecc5c752bed)
![image](https://github.com/user-attachments/assets/7a67765a-222e-4993-882a-b8867404c308)
![image](https://github.com/user-attachments/assets/d74b6993-7125-4a5f-912c-cb8544b5dfb7)

Product Page
![image](https://github.com/user-attachments/assets/7a46cd6d-97cf-467c-8065-30fff1534719)
![image](https://github.com/user-attachments/assets/43ed6ba3-27e3-4f90-809a-8d60cc3d7c3a)


Cart Page
![image](https://github.com/user-attachments/assets/1bd5693b-851e-4563-b710-3a0d53b83b01)


# Project Outline

---

This project is designed to reinforce your React learnings and make sure that you are comfortable with most aspect of the framework.

With this project you will practice how to:

- Fetch Data within a React App
- Use react-router
- Use Firebase/Firestore

## MVP

At a minimum your e-shop website should have Three pages:

## Home Page

This will contain:

- A Grid of products
- Carousel of featured products

1. Firstly, manually put some info in
2. Next step, dynamically load products that have isFeatured: true

## Product Page (with id parameter)

Similar to a product page on another site, allows you to

- add to cart and
- select product variants

You should store the following information:

- quantity
- variants (could be colors, sizes, etc)
- price per unit
- name
- image url
- favourited or not (boolean)

There should be NO static product data in the react application.
All products should be:

- stored in Firestore
- fetched by the frontend

## Cart

A list of all products added to the user's cart and a total price

- You should not be able to add more items than are in stock to the cart
- You may want to adjust quantity of products from the Cart page
- You should be able to remove products from the cart

## Bonus

- Implement Stripe "Payment" with a developer account
- Remove items from stock when paid for

## TIPS :

- Make sure your site is scoped to one category of products
- When stripe is in test mode you can use 4242 4242 4242 4242 as a valid credit card number.
- The more cart stuff you do the more opportunity to showcase business logic
- This will seperate you from other devs

## Useful links

- [React-router-dom](https://reactrouter.com/start/framework/navigating)
- [Dummy JSON](https://dummyjson.com/)
- [Fake Store API](https://fakestoreapi.com/)
- Stripe Docs:
  - https://docs.stripe.com/payments/checkout
  - https://docs.stripe.com/payments/checkout/build-integration
  - https://docs.stripe.com/stripe-vscode
