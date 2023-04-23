 function merge(leftArr, rightArr) {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return sortedArr.concat(leftArr.slice().concat(rightArr.slice()));
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function sortNumbers() {
    const inputDiv = document.getElementById('input');
    const outputDiv = document.getElementById('output');
    let numbersInput = prompt('Enter 10 numbers separated by spaces:');
    const numbersArr = numbersInput.split(' ').map(Number);
    if (numbersArr.length !== 10) {
        alert('Please enter exactly 10 numbers!');
        return;
    }
    const sortedNumbers = mergeSort(numbersArr);
    inputDiv.style.display = 'none';
    outputDiv.innerHTML = '<h2>Sorted Numbers:</h2><p>' + sortedNumbers.join(', ') + '</p>';
}


function isPalindrome(word) {
    if (word.length < 2) {
        return true;
    }
    if (word[0] !== word[word.length - 1]) {
        return false;
    }
    return isPalindrome(word.slice(1, word.length - 1));
}

function checkPalindrome() {
    const wordInput = document.getElementById('word').value;
    const palindromeDiv = document.getElementById('palindrome');
    const isPal = isPalindrome(wordInput);
    let result = '';
    if (isPal) {
        result = ' is a palindrome!';
    } else {
        result = ' is not a palindrome.';
    }
    palindromeDiv.innerHTML += '<p>' + wordInput + result + '</p>';
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function checkAge() {
    const birthYear = document.getElementById('yearOfBirth').value;
    if (isNaN(birthYear)) {
        alert('Please enter a number!');
        return;
    }
    else{
    const result = document.getElementById('result');
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    if (isPrime(age)) {
        result.innerHTML += '<p>Your age is ' + age + ' and it is a prime number!</p>';
    } else {
        result.innerHTML += '<p>Your age is ' + age + ' and it is not a prime number.</p>';
    }
}}

function ReverseString() {
    let inputString = document.getElementById("inputString").value;
    let reversedString = "";
    if (inputString.length > 0) {
      let reversedArray = inputString.split("").reverse();
      reversedString = reversedArray.join("");
    }
    console.log(reversedString);
    output1=document.getElementById("output1");
    output1.innerHTML += '<p>The reversed string is ' + reversedString+'</p>';

}
function scrollToTop() {
    window.scrollTo(0, 0);
  }


function getIPAddress() {
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
        console.log("Your IP address is:", data.ip);
        const div = document.createElement("div");
        const label = document.createElement("label");
        label.textContent = `Your IP address is: ${data.ip}`;
        div.appendChild(label);
        document.getElementById("ip").appendChild(div);
      })
      .catch(error => console.error(error));
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const div = document.getElementById("location");
    div.innerHTML = `<p>Latitude: ${latitude}</p><p>Longitude: ${longitude}</p>`;
  }
  function calculateFactorial() {
    var num = document.getElementById("number").value;
  
    if (num < 0) {
      document.getElementById("fact").textContent = "Factorial of negative number does not exist.";
    } else if (num === "" || num === null) {
      document.getElementById("fact").textContent = "Please enter a number.";
    } else {
      num = parseInt(num);
      var result = 1;
      for (var i = 1; i <= num; i++) {
        result *= i;
      }
      document.getElementById("fact").textContent = "Factorial of " + num + " is " + result + ".";
    }
  }
  