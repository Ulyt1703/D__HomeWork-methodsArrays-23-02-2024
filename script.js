/* let message = "Welcome to Bahamas!"
console.log(message.split(" ")) */

/* let clients = ["Mango", "Poly", "Ajax"]
console.log(clients.join("-")) */

/* let array = ["1", "69", "+380"]
array.push("grrr")
console.log(array) */

/* let array2 = ["1", "69", "+380"]
array.pop()
console.log(array) */

/* let array3 = ["1", "69", "+380"]
array3.shift()
console.log(array3) */

/* let array3 = ["1", "69", "+380"]
array3.unshift("gs")
console.log(array3) */

/* let array4 = ["martin", 19023, "klan", undefined, true, {}, 176, "fish"]
console.log(array4.slice(6, 8)) */

/* let array5 = ["car", "computer", "lamp", "box", "green"]
array5.splice(2,2, "phone", "dish")
console.log(array5) */

/* let array6 = [129, 9000, undefined, {}, "string)"]
let array7 = [9000000, false, "red"]
let sum = array6.concat(array7)
console.log(sum) */

/* let array8 = [123, false, NaN, "keel", "soop", 7000]
array8.push("gun")
array8.pop("TV")
array8.unshift("git")
array8.shift("box")
console.log(array8) */

/* let array9 = ["laptop", "feel", "about", 90490, 655, {}, NaN, true, "false", 877]
let newArray = array9.slice(0, 5)
console.log(newArray) */

/* let array10 = ["string", "for", "let", "join", "work"]
console.log(array10.join(", ")) */

/* let array11 = [100, 30, 40, 50, 80]
console.log(array11.indexOf(50)) */

let title = 'Top 10 benefits of React framework'
let words = title.split(" ")
let newWords = words.map(word => word.charAt(0).toLowerCase() + word.slice(1)).join("-")
console.log(newWords)