// Array Methods Practise
//1. Length
//Ex-1: Todos example with length
let todos = [];
todos.push("breakfast");
if (todos.length == 0) {
  console.log("No tasks Today");
} else {
  console.log(`You have ${todos.length} to complete...`);
}

//Ex-2: pagaination example with length
let items = ["item1", "item2", "item1", "item2", "item1", "item2"];
let itemsPerPage = 2;
let pages = Math.ceil(items.length / itemsPerPage);
console.log(`Total No of pages: ${pages}`);

//Ex-3: check length of password
function validPassword(password) {
  if (password.length < 8) {
    console.log("Your password is too short");
  } else {
    console.log(`Password is valid`);
  }
}
validPassword("123456");
validPassword("123456789");

// 2 . toString()
// Ex-1: Convert a date to display to string
let date = new Date();
console.log(date);
console.log(date.toString());

// Ex- 2: number to binary, hexadecimal eith tostring
let num = 29;
console.log(num.toString(2));
console.log(num.toString(16));

//Ex-3: Converting an array to string
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.toString());

//3. at
//Ex-1:  Get the last product in a shopping cart
let cart4 = ["shirts", "pants", "shoes"];
console.log(cart4.at(-1));

// Ex: 2: Access Second Last message in chat app
let messages = ["Hi", "How are you", "All good", "see you soon"];
console.log(messages.at(-2));

// Ex-3: Circular Playlist Navigation
let playlist = ["song1", "song2", "song3", "song4"];
let currentIndex = 0;
console.log(`Now playing: ${playlist.at(currentIndex)}`);

currentIndex = (currentIndex + 1) % playlist.length;
console.log(`Next: ${playlist.at(currentIndex)}`);

// 4. join
// Ex-1: Making a CSV Row report
let user1 = ["Lokesh", "25", "India"];
let csvRow = user1.join(",");
console.log(csvRow);

// Ex-2: Building Url Paths
let pathParts = ["products", "electronics", "laptops"];
let url = "/" + pathParts.join("/");
console.log(url);

//Ex-3:  Displaying Tags in a Blog Post
let tags = ["Javascript ", "Web development ", "Frontend "];
console.log(`Tags: ${tags.join(" | ")}`);

// 5 . pop
// Ex-1: Browser History - go Back
let history = ["Home", "product", "productdetails", "checkout"];
let lastvistedPage = history.pop();
console.log(`Going back from: ${lastvistedPage}`);
console.log(`Current Page: ${history.at(-1)}`);

// Ex-2: Last Message in Message Queue
let messages1 = ["Hi", "How are you?", "See you soon"];
let latestMessage = messages1.pop();
console.log(`Latest nessage: ${latestMessage}`);

// Ex-3: Removing Last Order in restaurent
let orders4 = ["Burger", "French Fries", "Coke", "Salad"];
let cancelled = orders4.pop();

console.log(`Cancelled order: ${cancelled}`);
console.log(`Pending Orders: ${orders4}`);

// 6. shift
// Ex-1: Customer Queue in a bank
let queue = ["Customer1", "Customer2", "Customer3"];
let fifo = queue.shift();

console.log(`Serving: ${fifo}`);
console.log(`Waiting: ${queue}`);

// Ex - 2: Ticket Counter
let tickets = ["T001", "T002", "T003"];
let nextTicket = tickets.pop();

console.log(`Now serving Ticket: ${nextTicket}`);

// Ex-3: Processing Orders in a Restaurent
let orders3 = ["Order#101", "Order#102", "Order#103"];
let cookingOrder = orders3.shift();

console.log(`Cooking Order: ${cookingOrder}`);
console.log(`Pending Orders: ${orders3}`);

//7. push
// Ex-1: Adding Items to Shopping Cart
let cart2 = [];
function addToCart(item) {
  cart.push(item);
  console.log(`${item} added to Cart.Total items: ${cart2.length}`);
}

addToCart("shirts");
addToCart("shoes");

// Ex -2: Collecting Orders in a Restaurent
let orders1 = [];

function takeOrder(order) {
  orders1.push(order);
  console.log(`order received: ${order}`);
}

takeOrder("Pizza");
takeOrder("Burger");

// Ex - 3: Tracking Game Scores
let scores = [];
function recordScore(score) {
  scores.push(score);
  console.log(`Score recorded score: ${score}`);
}

recordScore(100);
recordScore(106);

// 8. unshift
// Ex-1: adding a Breaking News HeadLine
let newsfeed = ["Sports: Team Won ChampionShip", "Weather: Sunny day ahead"];
function addBreakingNews(news) {
  newsfeed.unshift("Breaking: " + news);
  console.log(newsfeed);
}
addBreakingNews("Stock market hits record high");

// Ex - 2: Adding Recent Searches to the top
let recentSearches = ["JavaScript Tutorials", "Weather Today"];

function addSearch(query) {
  recentSearches.unshift(query);
  console.log(recentSearches);
}

addSearch("Latest tech news");

// Ex -3: Adding the Latest Notifications
let notifications = ["Order #101 is shipped", "Friend request accepted"];

function newNotification(notification) {
  notifications.unshift(notification);
  console.log(`Notifications: ${notifications}`);
}

newNotification("Payment of 500 received");

// 9. shift
// Ex-1: Removing Sensitive User data
let user = {
  name: "Lokesh",
  email: "chigurusettisailokesh@gmail.com",
  password: "1234567890",
};

delete user.password;
console.log(user);

// Ex-2: Removing a Property from an Inventory Object
let inventory1 = {
  itemId: 101,
  name: "Laptop",
  dicount: 10,
};

delete inventory1.dicount;
console.log(inventory);

// Ex - 3: Deleting From Arrays
let numbers = [1, 2, 3];
delete numbers[1];
console.log(numbers);
console.log(numbers.length);

// 10. concat
// Ex-1: Merging Two Product Lists
let electronics = ["Laptop", "Phone"];
let accessories = ["Charger", "HeadPhones"];

let allProducts = electronics.concat(accessories);
console.log(allProducts);

// Ex-2: Merging Multiple Playlists
let playlist1 = ["Song A", "Song B", "Song C"];
let playlist2 = ["Song D"];
let playlist3 = ["Song E"];
let fullPlaylist = playlist1.concat(playlist2, playlist3);
console.log(fullPlaylist);

// Ex-3: Combining Array of Objects
let employeeDept1 = [{ name: "Alice" }, { name: "Bob" }];
let employeedept2 = [{ name: "Charlie" }];
let allEmployees = employeeDept1.concat(employeedept2);
console.log(allEmployees);

// 11. flat
// Ex-1: Flattening Categories for an Ecommerce Store
let categories = [
  ["Electronics", "Mobiles"],
  ["Fashion", "Shoes"],
  ["Home", "Furniture"],
];
let allCategories = categories.flat();
console.log(allCategories);

// Ex - 2: Flattening Multi-level Data
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(3);
console.log(flatArray);

// Ex -3: Combining Orders from Multiple Days
let orders = [
  ["Order101", "Order102"],
  ["Order103", "Order104"],
  ["Order105", "Order106"],
];

let allOrders = orders.flat();
console.log(allOrders);

// 12. slice
// Ex-1: Extracting a part of a Username
let username = "JohnDoe";

let shortName = username.slice(0, 4);
console.log(shortName);

// Ex-2: Extracting Last Few Transcations
let transactions = [100, 1000, 200, 2000, 500, 60, 1200];
let recentTransactions = transactions.slice(-2);

console.log(recentTransactions);

// Ex-3: Cloning an Array
let arr1 = ["Apple", "Banana", "cherry"];
let clone = arr1.slice();

clone.push("Mango");
console.log(clone);
console.log(arr1);

//13. indexOf
//Ex-1: Validating a username in a Blocked List
let blockedUsers = ["spam", "malicious", "attack"];
let newUser = "spam";
if (blockedUsers.indexOf(newUser) !== -1) {
  console.log(`username is blocked`);
} else {
  console.log(`Username is available`);
}

// Ex-2: Finding the position of an itrm in an inventory
let inventory = ["Laptop", "Phone", "Tablet"];
let item = "Phone";
let position = inventory.indexOf(item);
if (position !== -1) {
  console.log(`${item} is at ${position} in a inventory.`);
}

// Ex-3: Searching a word in a string
let message = "Welcome to JavaScript Learning";
let wordindex = message.indexOf("JavaScript");
console.log(wordindex);

//14. lastIndexOf
//Ex-1: Searching for Last Login Date
let loginDates = ["2025-01-01", "2025-02-14", "2025-02-14", "2025-03-05"];
let lastLogin = loginDates.lastIndexOf("2025-02-14");
console.log(lastLogin);

// Ex-2: Removing the Last Occurences of a product from cart
let cart1 = ["Apple", "Orange", "Banana", "Orange"];
let index = cart1.lastIndexOf("Orange");
if (index !== -1) {
  cart1.splice(index, 1);
}
console.log(cart1);

// Ex-3: Finding Last Occurrence in a String
let text = "The quick brown fox jumps over the lazy dog. The dog barked.";
let lastDog = text.lastIndexOf("dog");
console.log(lastDog);

//15.includes
//Ex-1: validating Allowd File Extensions
let allowedExtensions = ["jpg", "png", "gif"];
let fileName = "profile.png";

if (allowedExtensions.includes(fileName.split(".").pop())) {
  console.log("File Type allowed.");
} else {
  console.log("Invalid file Type.");
}

// Ex-2: Checking if a Sentence Contains a word
let sentence = "JavaScript is fun to learn!";
if (sentence.includes("fun")) {
  console.log("Positive sentence detected!");
}

// Ex-3: Checking User Roles
let userRoles = ["admin", "user"];
if (userRoles.includes("admin")) {
  console.log("You have admin access.");
}

//16.splice
// Ex-1: Removing an item from a Shopping Cart
let cart = ["shirt", "shoes", "hat"];
let removed = cart.splice(1, 1);
console.log(cart);
console.log(removed);

// Inserting
cart.splice(2, 0, "Comb");
console.log(cart);

// Updating
cart.splice(1, 1, "White Hat");
console.log(cart);
