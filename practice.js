/*
   JAVASCRIPT PRACTICE
   -- Each of the problems below ask you to write code in JavaScript.
   -- Behind the scenes, a file called 'test.spec.js' will check to see
        if you return the correct values.

   -- To run these tests and see the results, you simply need to open this
        folder in a browser. The index page will show your results.

   -- NOTE:
        If you have a syntax error anywhere in your code (e.g. missing brace), all tests will fail. Open your console in the browser to
        find the line on which you have an error. Mentors can help with this.
*/

// SAMPLE

// Task
   // Define a function called speakTheTruth, which returns "Brian is amazing" when called.

// Solution
   function speakTheTruth() {
      return "Brian is amazing";
   }


// SAMPLE FAILING TEST
// Notice what a failing test looks like in the test runner.

// Task
   // Define a function called speakFalsehood, which returns "Shea is the best" when called.

// Incorrect Answer
   function speakFalsehood() {
      return "Shea is the best"
   }
// Check the test
   // Click on the failing test (labeled "returns the truth") to see what you produced and what it expected


// 1. isEven
   // Write a function called isEven, which takes in an integer as a parameter and returns true if the integer is even and false if the integer is odd.

   // N.B. Return the boolean value true or false, not the string values of the words.

   function isEven(num) {

     if (num % 2 === 0) {
       return true
     }else{
       return false;
     }

   }

// 2. returnSmallest
  // Write a function called returnSmallest that takes in an array of numbers as a parameter and returns the smallest value in the array.



function returnSmallest(nums) {
var smallestNum = nums[0];
 for (var i = 0; i < nums.length; i++) {
   // if a number is smaller than the smallest, make that the new smallest numbers
   if (nums[i] < smallestNum) {
    smallestNum = nums[i];
   }
}
return smallestNum;
}




// 3. addUser
  // Write a function called createUser, which takes in two parameters, an array of usernames and a new username. Create a new array which contains all of the usernames, including the new username. Return the new array.

function addUser (username, newUser) {
    var copyOfUsernames = username.slice()
    copyOfUsernames.push(newUser);
    return copyOfUsernames;
}


// 4. reverseName
   // Were you ever obsessed with saying your name backwards as a kid? I was for some reason. Write a function called reverseName which takes in a name and returns the reverse of the name. HINT: You can build a string through concatenation:
   // var newString = oldString + 'a';
   // OR:
   // oldString += 'a';
function reverseName (str) {

  var split = str.split("");
  var reverseStr = split.reverse();
  var join = reverseStr.join("");

  return join;

}
// 5. countVowels
   // Write a function called countVowels that takes in a string and returns the number of vowels in the string.
function countVowels(str) {
  var vowelCount = 0;
  str=str.split("");
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a"){
      vowelCount++;
    } else if (str[i] === "e") {
      vowelCount++;
    } else if (str[i] === "i") {
      vowelCount++;
    } else if (str[i] === "o") {
      vowelCount++;
    }else if (str[i] === "u") {
      vowelCount++;

    }
    
  }
  return vowelCount;
}



// 6. alertMessage
   // Write a function called alertMessage, which alerts any message to the user.
function alertMessage(hello) {
  alert("Hey you");
}


// 7. promptMessage
   // Write a function called promptUsername, which asks a user for a username using the window.prompt method. Return the username to the user.

function promptUsername () {
  var name = prompt("What's your name?")
  return name;
}

// 8. callbackPractice
   // Write a function called callbackPractice that takes in two parameters, a string value and a callback function (you can call it cb). In your function, call the callback function (cb) and pass it the string value.

function callbackPractice(value, callback) {
  callback(value)
}
