// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
//    {
//     username: 'Heisenberg',
//     password: 'JessIsMyBestFriend'
//    }

// 2. Create an array which contains the object you have made above and name the array "database".
  var database = [
    {
      username: 'Heisenberg',
      password: 'JessIsMyBestFriend'
    }
  ];
  
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
  var newsfeed = [
    {
      username:'Dan88',
      timeline: 'When nothing goes right, go left.'
    },
    {
      username:'Sane79',
      timeline: 'Keep your heels, head, and standards high.'
    },
    {
      username:'Relja19',
      timeline: 'Be yourself; everyone else is already taken.'
    },
  ];

  
  var userNamePrompt = prompt('What is your username?');
  var passwordPrompt = prompt('What is your password?');

  function signIn(username, password) {
    if(username === database[0].username  && password === database[0].password ) {
      alert('You are logged in!')
      console.log(newsfeed);
    } else {
      alert('Your details are incorrect!');
    }
  }
  signIn(userNamePrompt,passwordPrompt);