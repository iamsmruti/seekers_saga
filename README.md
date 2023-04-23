![Logo](https://firebasestorage.googleapis.com/v0/b/blogarithm-bdb61.appspot.com/o/logo_detail.png?alt=media&token=9b5e610e-8f90-43b8-aa48-bb7ef1bb10f1)

# Seeker's Saga

This is a Treasure Hunt + Puzzle website, featuring various puzzles and treasure hunts which requires a curious & an attentive mind. The Application is reponsive to various device sizes.

![Puzzle](https://firebasestorage.googleapis.com/v0/b/blogarithm-bdb61.appspot.com/o/smartmockups_lgnyq15x.jpg?alt=media&token=d4ab65d5-3b88-40ec-9273-890844b08479)

This has an admin dashboard where we can see all the insights from the users

The Website has Puzzles and Hunts

**A. Puzzle section :** This section has various sets of images where we have to find the one from many similar images, which tests one's attention.

![Puzzle](https://firebasestorage.googleapis.com/v0/b/blogarithm-bdb61.appspot.com/o/screencapture-seekers-saga-vercel-app-puzzles-1-2023-04-19-22_54_35.png?alt=media&token=37ffe564-2fc3-4505-9ded-837c5681995d)

**B. Hunt section :** This section has various riddles with specific themes to each hunt. For example, a Geographic Hunt will have riddles related to continents and countries.

![Hunt](https://firebasestorage.googleapis.com/v0/b/blogarithm-bdb61.appspot.com/o/screencapture-seekers-saga-vercel-app-hunts-1-2023-04-19-22_54_58.png?alt=media&token=b387693a-0c5b-41dc-90c4-f1cb185e43c2)

Overall, this app is a fun experience. This also supports a leaderboard where you can see how ur friends are doing along with you.


## Solving the puzzle 

Following is the complete demonstration of how the entire application works:

### A. Hunts
The Hunts are like the usual treasure hunts, but done virtually here.

- The Hunt consists of several riddles and each riddle will take the user one step closer to completion

- The story starts by solving the riddle for a continent, then the story goes to a country, then its capital and then to a town nearby its capital and then to place in the town, where the treasure is hidden.

- The riddle are very interactive, users have to find the locations and places by locating it on the map ( not enterring it manually ). 

- This hunts help in incorporating ideas and values related to geographic maps.

Here, we can have two attempts for each puzzle and at the end, we can know the time taken and the number of attempts for each step.

### B. Puzzles
The puzzle set is simple, there are 9 of them in total

- In each puzzle, the user have to find the picture which is different from the rest.

- For each Puzzle, 25 seconds will be the time limit.

- Here the user after finding the right picture, he has to click the odd picture.

- This is a fun way of checking ones attention to detail skills

Here, The user can attempt multiple times. The idea is to get the right answer, the wrong answer will reduce points. 

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

Client Website : [seekers-saga.vercel.app](https://seekers-saga.vercel.app/)

Admin Website : [seekers-admin.vercel.app](https://seekers-admin.vercel.app/)

Server : [seekerssaga-production.up.railway.app](https://seekerssaga-production.up.railway.app/)

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
- [x] &nbsp;&nbsp; Leaderboard
- [x] &nbsp;&nbsp; Interactive Maps
- [x] &nbsp;&nbsp; Save States of the Game, the user can refresh the page
- [x] &nbsp;&nbsp; Creative Story line for the hunt
- [x] &nbsp;&nbsp; Dashboard for Admin
- [x] &nbsp;&nbsp; Measure Soft Skills of the user
- [x] &nbsp;&nbsp; Display the stats to the user
- [x] &nbsp;&nbsp; Display user information & stats in the admin site
- [x] &nbsp;&nbsp; Store user's data in the database 
- [x] &nbsp;&nbsp; User Data Analysis
- [x] &nbsp;&nbsp; Data Analysis ( Charts & Graphs )
- [ ] &nbsp;&nbsp; Create Puzzles from Admin site
- [ ] &nbsp;&nbsp; Create Hunts from Admin site
- [ ] &nbsp;&nbsp; Delete PuzzlesReports via Admin Site
- [ ] &nbsp;&nbsp; Delete HuntsReports via Admin Site
- [ ] &nbsp;&nbsp; Work on structuring the client, to make puzzles and hunts dynamic templates
- [ ] &nbsp;&nbsp; Write Tests



## License

[MIT](https://choosealicense.com/licenses/mit/)

