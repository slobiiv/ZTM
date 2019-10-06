// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
//    {
//     username: 'Heisenberg',
//     password: 'JessIsMyBestFriend'
//    }

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
  {
    username: 'Relja',
    password: 'Jun19'
  },
  {
    username: 'Slobodan',
    password: 'Oktobar88'
  },
  {
    username: 'Sanela',
    password: 'Jul79'
  }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsFeed = [
  {
    username:'Relja',
    timeline: 'Be yourself; everyone else is already taken.'
  },
  {
    username:'Slobodan',
    timeline: 'When nothing goes right, go left.'
  },
  {
    username:'Sanela',
    timeline: 'Keep your heels, head, and standards high.'
  }
];


// Functions

// Checking every users username and password, ig correct returns true and then the second function signIn is kicking in. 
function isUserValid(username, password) {
  for(var i = 0; i < database.length; i++){
    if(database[i].username === username && database[i].password === password){
      return true;
    }
  }
  return false;
}


function signIn(username, password) {
  if(isUserValid(username, password)) { // username and password we receive in prompt
    console.log(newsFeed);
  } else {
    alert('Sorry. Wrong username and password!')
  }
}
var userNamePrompt = prompt('What is your username?');
var passwordPrompt = prompt('What is your password?');
signIn(userNamePrompt,passwordPrompt);
