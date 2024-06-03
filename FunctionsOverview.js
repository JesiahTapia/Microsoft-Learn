

function displayGreeting(name) { 
    const message = `Hello, ${name}!`
    console.log(message);
}

displayGreeting(`User`)

function createGreetingMessage(name) {
    const message = `Hello, ${name}`;
    return message;
  }
return createGreetingMessage(`User`)

setTimeout(
    () => { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)