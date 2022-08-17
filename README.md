# Activity Boards E-Commerce Shop
Just as the name suggests - this is a Next.JS e-commerce.

The demo of the shop is selling hand-made activity boards for developing child\'s fine motor skills. I actually sometimes make these things for friends. You can easily convert the shop to sell any other type of product, as it has every function a generic shop should have.

## Live Preview
The demo is live and every functionality works as expected. You can view it here: https://activity-boards-ecommerce.vercel.app/

## Stack
- TypeScript
- Next.JS
- Styled Components and Framer Motion for styling
- Firebase as the database
- Formik for forms and Yup for validation

Check the [package.json](https://github.com/matt-jb/activity-boards-ecommerce/blob/main/package.json "package.json") for more.

## App Architecture
Atomic Design is the architecture of choice for this project. It\'s popular, well-known and easy to implement with a large number of generic modules.

## Branching strategy
As I was the only developer on this project, I used the Feature Branch strategy. 

## Functionality
This list is not extensive - these are just the major functions.

- Account
	- Creating an account
	- Deleting an account
	- Logging in and out
	- Managing account data
	- Displaying completed orders
	- Resetting user\'s password
	- Auth via email, Google and GitHub accounts


- Products
	- Displaying a product
	- Product gallery
	- Products\' details page
	- Categories views


- Cart
	- Adding / removing / clearing from Cart
	- Cart controls
	- Cart preserved between sessions in LocalStorage


- Buying
	- Multi-step form with Formik
	- User details updated every time the user provides shipping data
	- Stripe payments
	- Server-side auth on the payment status


- WishList
	- Adding / removing from WishList
	- Preserving WishList on the user\'s account


- Testing
	- Unit testing in Jest
	- E2E testing with Cypress


- Search functionality
- Alerts
- Flexible pagination system based on a custom hook
- Basic framer-motion animations
- Extensive use of the React Context API

## TODOs:
- [ ] Blog
- [ ] Mini-cart
- [ ] Filtering products
- [ ] Product reviews
- [ ] Discount codes
- [ ] Newsletter
