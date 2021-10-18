# About

This is a backend coding challenge that provides an API to information on user medication timings. Each user has a list of medications and how many times a day to take this medication stored in a JSON format, and this API calculates and returns the times on this current day that the user should take those medications, spaced evenly apart.

Data is stored in `/data/healthdata.json`. This is the file to be replaced if you wish to test against other data.

The server runs on port 3000 and the relevant endpoint is `localhost:3000/users/:userId/dosages`

# How to run

`npm install` for packages and run the backend with `npm run start`

`npm run test` to run tests using jest