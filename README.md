# product-seller

Product seller is a simple platform to create ecommerce product pages, with a generated link that you can send to receive payments

## Overview 
![screenshot]("overview.png")

## Available functionnalities
- Login
- Sign Up
- Product creation

## Technical Stach
- ReactJS
- ExpressJs
- MongoDB

## Local running
```
# 1. clone the project
git clone https://github.com/Valeryio/product-seller/
cd product-seller

# 2. Install dependencies
cd frontend
npm install

cd ../backend
npm install

# 3. Change env variables
# Create a .env file, and and update the cors policy, and the api domain for the frontend part
# Install local mongoDB and change the connexion string used

# 4. Run the project

cd frontend
npm run dev

cd ../backend
npm run dev

```