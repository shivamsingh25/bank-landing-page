# ABC Bank Landing Page with Sign in

Hey, This is Shivam Singh Rathore, and as a part of my internship assignment, this repository contains of frontend React application of a Sample Bank's Landing Page with Signup/ Signin Form.
The application UI layout has been kept simple, and interactive after going through various existing classic and modern banking website's landing page. 

# Stack
|                |Technology
|----------------|-------------------------------|
|Framework		 |`React.js`            |
|CSS Framework   |`Tailwind CSS`            |
|Templating      |`TypeScript`|
|Hosting      |`Firebase Hosting`|

# Run this project on local environment
Make sure, Node.js, npm, and related packages are installed in your system to run a `create-react-app` application
- clone this repository: `git clone https://github.com/shivamsingh25/bank-landing-page.git`
- navigate to the project root folder: `cd bank-landing-page`
- Install dependencies: run `npm install`
- Start the local development server: run `npm start`
- Production build: run `npm build`

# Live Demo
Live Demo Link:  [https://bank-landing-page.web.app/](https://bank-landing-page.web.app/)

# Design and Study
Link to Figma File: [https://www.figma.com/file/4cU6vYEMaVHNbDcAdtRGAb/SALT-assignment---Bank-Landing-Page?node-id=0%3A1](https://www.figma.com/file/4cU6vYEMaVHNbDcAdtRGAb/SALT-assignment---Bank-Landing-Page?node-id=0%3A1)

# General Methodology
- setup Git Repo for the project
- create react app with typescript template
- install & setup tailwind CSS and craco
- setup code layout = Components, Pages, Routes
- Create Routes and Home page Layout
- Created TSX components for required UI layout following Tailwind CSS documentation
	- Tailwind CSS Documentation: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- Created a Firebase project and enabled Hosting to deploy the application
- Updated the Github remote repository

# Future corrections that can be made

This application is not completed nor perfect, hence the following future work can be considered:

- Strict followed Design System convention components developed for reusability and consistency.
- Integrating and importing SVG icons as TypeScript components instead of inline integration.
- Using props for component's conditional rendering
- Using manual or use of validation packages for data validation of forms in frontend as well as backend.
- The app can be made more responsive
- The Signup/ Signin experience can be made seemless with better UX

---
This project application uses open source frameworks, royalty free stock images from [Pexels](https://www.pexels.com/), and icons.
The text in the application has been picked up from [Salt.pe](https://salt.pe) for relevant content representation, and does not try to replicate any brand or personality in any form. 





---

Full Stack and Front end Developers Task#1
Launching a Mini Bank
1. Create/Set at least 3 users - no need to create in database, login password based login is fine.  On frontend is also fine. They have these three roles - User, User, Admin
2. When the user login, they are taken to account management page, where they can see the following
    1. Side bar with “Home”, “Transactions”, “Transfer”
    2. Home displays the current account balance and account number ( random assigned 16 digit numeric )
    3. Transactions displays all the transactions happening in the User’s account
    4. Transfer displays a form to transfer amount from their account to another user account using account number.
3. The login by admin, takes them to a bank management page, where they can see the following:
    1. A sidebar with the following: “Home”, “Users”, “Credit/Debit”
    2. Home displays the total amount deposited in the bank, total number of users
    3. Users displays a table of users with their name, account number, balance, and button to add new users.
    4. The Credit/Debit page displays a form to deposit ( credit) or withdraw ( debit) amount to or from the User’s account.
Stack required:
Node+Express, ReactJS, MongoDB
The backend has to be developed in Node
The frontend has to be developed in React
Enabling persistence using Mongo DB is optional but recommended


----

User 1 details

email: user@shivamsr.com
password: 12345
a/c no.: 8842091747046631

User 2 details

email: hello@shivamsr.com
password: 12345
a/c no.: 8842091837046631

admin 

email: admin@shivamsr.com
password: 12345