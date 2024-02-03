This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

# veltech

This is an web assessment test for veltech Group

backend api to use: [mock json](https://jsonplaceholder.typicode.com/)

what to serve from backend:

1. users
   1. name
   2. username
   3. email
2. Albums
   1. Album id
   2. User id
   3. Album title
3. Photos
   1. Album id
   2. photo title
   3. image Url

## Screens required for the application:

1. landing page
   1. brief description of what our application does
2. Auth page
   1. login/sign up (with firebase) and session management(with firebase too)
3. Logged-in pages
   1. you cannot access this pages if you are not logged in
      - home - displays a list of all users (get request for users) - tells you how many albums each user has (get request for albums)
      - User - individual user page, which show when a user is clicked (run a get request for user) - it should display a list of users albums (get request for users album)
      - Album information page - Album information and its photos - get request for album information and its photos
      - Photo information page - photo display - user can edit title of photo - put/patch request to backend to save the edited title

## Software requirements

1. responsive for both mobile, tablet and pc
2. the application should be able to run with simple commands:
   - How to run this project:
     - clone the repo
     - cd into the repo
     - npm install (to install dependecies)
     - npm run start (visit [local host](http://localhost:3000/) browser)
3. the code should have production and development environments
   - production branches - main
   - development branches - production
4. pages should retain information after initial loading
5. nformative commit messages that follow conventional commit messaging formats
6. Proper documentation of the code
7. Software unit tests that verify the software’s correctness.
8. A pipeline job to run linting and unit tests automatically
9. A pipeline job to automatically deploy the software project once certain checks have been met
10. Having the application deployed. Use any deployment services with free tiers e.g. heroku, vercel

# Good To Have:

1. Linters:
   - Javascript / Typescript
   - Less/SCSS/CSS
   - Commits
2. Loaders to show that data is being fetched
3. Logging service for application errors$ git push production
   fatal: 'production' does not appear to be a git repository
   fatal: Could not read from remote repository.
4. Use of a UI library for a polished-looking application e.g. Tailwind, Bootstrap, Foundation,Material, Bulma etc

## TECHNOLOGY USED:

1. Material UI
2. NextJS
3. Tailwind CSS

design isnpiration for the landing page [design](https://dribbble.com/shots/23437431-Banking-Website-Landing-Page-Design)
