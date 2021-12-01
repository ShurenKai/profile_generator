const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also welcome :3c ', (name) => {
  rl.question('What kind of sleeper are you? ', (sleeper) => {
    rl.question('Do you know what time it is? ', (time) => {
      rl.question('What is your favourite food? ', (food) => {
        console.log(`Thank you for your valuable feedback! Your name is ${name}, you sleep like ${sleeper}, it is ${time} O'Clock, ${food} is your favourite!`);
        rl.close()
      });
    });
  });
});



