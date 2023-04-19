
![Logo](https://firebasestorage.googleapis.com/v0/b/blogarithm-bdb61.appspot.com/o/logo_detail.png?alt=media&token=9b5e610e-8f90-43b8-aa48-bb7ef1bb10f1)
# Seeker's Saga

This Application aims at evaluating people's soft skills through various puzzles and treasure hunts. The time taken to solve problems, the accuracy and the level of problem are collected from the user and processed to derive at valuable insights. The Application is reponsive to various device sizes.

![Puzzle](https://firebasestorage.googleapis.com/v0/b/blogarithm-bdb61.appspot.com/o/smartmockups_lgnyq15x.jpg?alt=media&token=d4ab65d5-3b88-40ec-9273-890844b08479)

These insights are presented to the user and the admin through graphts and charts.

There are two sections :

**A. Puzzle section :** This section contains Puzzles that measure the speed and attention to details

![Puzzle](https://firebasestorage.googleapis.com/v0/b/blogarithm-bdb61.appspot.com/o/screencapture-seekers-saga-vercel-app-puzzles-1-2023-04-19-22_54_35.png?alt=media&token=37ffe564-2fc3-4505-9ded-837c5681995d)

**B. Hunt section :** This section contains Treasure Hunts, that helps in measuring the creativity in solving the riddles and the intelligence needed to solve the same.

![Hunt](https://firebasestorage.googleapis.com/v0/b/blogarithm-bdb61.appspot.com/o/screencapture-seekers-saga-vercel-app-hunts-1-2023-04-19-22_54_58.png?alt=media&token=b387693a-0c5b-41dc-90c4-f1cb185e43c2)

Overall the user will have to attempt both the puzzle and a hunt, in order to derive at a conclusion.


## Solving the puzzle 

Following is the complete demonstration of how the entire application works:

### A. Hunts
The Hunts are like the usual treasure hunts, but done virtually here.

- The Hunt consists of several riddles and each riddle will take the user one step closer to completion

- The story starts by solving the riddle for a continent, then the story goes to a country, then its capital and then to a town nearby its capital and then to place in the town, where the treasure is hidden.

- The riddle are very interactive, users have to find the locations and places by locating it on the map ( not enterring it manually ). 

- This hunts help in evaluating the intellectual and creative part of the user.

Here, we can have two attempts for each puzzle and at the end of the 9th we will evaluate the user based on time taken and correctness of answer.

### B. Puzzles
The puzzles set is simple, there are 9 of them in total

- In each puzzle, the user have to find the picture which is different from the rest.

- For each Puzzle, 15 seconds will be the time limit.
- Here the user after finding the right picture, he has to enter the row number and column number as its answer. 
- This puzzle not only requires speed and attention to detail. But also the presence of mind to enter the corrent row and column under timed situation.

Here, we can have two attempts for each puzzle and at the end of the 9th we will evaluate the user based on time taken and correctness of answer.

So, that was it about the introduction of the Project.

## Technical Aspects

The project has three parts :

#### A. Client Website
Here the users will solve puzzles and riddles. The outcomes of the puzzles will be stored for measuring the attributes of the user.

- The User need to register himself/herself by providing : **First Name, Last Name, Email, Password**

- Then the user can login, then attempt the puzzles and hunt the treasures.

#### B. Admin Website
Here the admins can moderate the roles of the users, can also check the stats and insights of users.

- Admin can see the progress of the user

#### C. Server 
This is an API connected to the database.

- This is serves all the reaquests and data.
- Data is fetched from and stored in the database, and are accessed through the API.




## How to run this project

All the parts of the project are deployed on the web, here are the deployed links

Client Website : 

Admin Website : 

Server :

**Still, if you want to make a new version of this project for yourself. Follow these steps:**

1. Fork the Repo

2. Clone the project

```bash
  git clone <forked repo url>
```

You will see three directories named client, admin & server

**For Client and Admin, the steps are the same ( Both React Applications ):**

Go to the project directory i.e. client or admin

```bash
  cd client
```

Install dependencies

```bash
  npm install --legacy-peer-deps
```

**--legacy-peer-deps** is added because there are some dependencies, which work on lower versions of react.

Start the server

```bash
  npm run start
```

**For the server, you can follow these steps:**

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

After that you need to make a **.env** file and create three entries there:

- **DB_URL :** this should have the mongo db URI for connecting the server to the database

- **TOKEN_SECRET :** This token will be used to sign the JWT tokens for authentication and authorisation.
## Features Checklist

Following are the features that has been planned, some of them are implemented ( &check; ) and some of them are yet to implement ( &cross; ).

- [x] &nbsp;&nbsp; Authentication
- [x] &nbsp;&nbsp; Authorisation
- [x] &nbsp;&nbsp; Responsive Design
- [x] &nbsp;&nbsp; CI/CD done with Vercel and Railway
- [x] &nbsp;&nbsp; Clients Deployment
- [x] &nbsp;&nbsp; Server Deployment
- [x] &nbsp;&nbsp; Puzzles 
- [x] &nbsp;&nbsp; Treasure Hunt 
- [x] &nbsp;&nbsp; Interactive Maps
- [x] &nbsp;&nbsp; Creative Story line for the hunt
- [ ] &nbsp;&nbsp; Measure Soft Skills of the user
- [ ] &nbsp;&nbsp; Display the stats to the user
- [ ] &nbsp;&nbsp; Display user information & stats in the admin site
- [ ] &nbsp;&nbsp; Store user's data in the database 
- [ ] &nbsp;&nbsp; User Data Analysis
- [ ] &nbsp;&nbsp; Data Analysis ( Charts & Graphs )
- [ ] &nbsp;&nbsp; Leaderboard



## License

[MIT](https://choosealicense.com/licenses/mit/)

