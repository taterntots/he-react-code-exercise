# Documentation

You can find the deployed project on [Netlify](https://eager-curie-6f78bc.netlify.app).

## Project Overview

This is a simple web application that let's users search and filter through Github repositories using Github's search API.

### Key Features

- Searching Github repositories via keyword
- Sorting searched repositories by best match or number of stars
- Filtering search results by coding language

# Installation Instructions

To get the server running locally:

```bash
- Clone this repo
- **npm i** to install all required dependencies
- **npm start** to start the local server listening on [localhost:3000](http://localhost:3000)
```

For testing:
```bash
- **npm run cypress:open** to run testing with cypress
- **open my_tests.js under 'INTEGRATION TESTS' to find and run tests
```

## Tech Stack

### Front end built using:

- [React](https://reactjs.org/): Current industry standard for web applications, using React let us displaying large amounts of data effectively by implementing Components. It is also very scalable, perfect for large applications with huge growth potential.
- [Tailwind](https://tailwindcss.com/): Tailwind CSS lets you rapidly build modern websites without ever leaving your HTML. Simple to implement and build beautiful looking apps fast.
- [Cypress](https://docs.cypress.io/): Fast, easy and reliable testing for anything that runs in a browser. Amazing UI tool for making setting up, writing, and running tests a breeze and easy to visualize.

#### Front end deployed to [Netlify](https://eager-curie-6f78bc.netlify.app).

# APIs

## Authentication API

This project uses Github's search API at the following address to grab repository data:
https://api.github.com/search/repositories

# Environment Variables

No environment variables are needed to run this project.

# Testing

I chose [cypress](https://docs.cypress.io/) for its flexibility and ease of use. Cypress has amazing UI tools that lets us see our tests running in real time, which relieves a lot of headaches.