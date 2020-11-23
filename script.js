// // const firstName = "Onute"
// // const secondName = "Baltrunaite"
// // const age = "28"
// // const study = "kazkas"
// // const hobby = "kazkas"
// // const futureMe = "kazkuo"




// // let text = "Labas, mano vardas yra " + firstName + " o pavarde " + secondName + " man yra " + age + " as mokausi " + study + " mano hobis yra " + hobby + " uzauges noreciau buti " + futureMe;

// // // Bus dar vasarų bus dar ---, bet trumpės ir trumpės tos ---,
// // // šauks keliai dar mane iš ---, bet tikėjimas gundys ir ---

// // const summer = "vasaru"
// // const days = "dienos"
// // const roads = "kapu"
// // const lo = "gundys"

// // let text2 = `Bus dar vasarų bus dar ${summer}, bet trumpės ir trumpės tos ${days}, šauks keliai dar mane iš ${roads}, bet tikėjimas gundys ir ${lo}`

// // console.log(text)
// // console.log(text2)






// // let firstNum = 500
// // let secondNum = (firstNum - 68)

// // console.log(secondNum)
// // console.log(secondNum / 3)




// // let no1 = 27
// // let no2 = 13
// // let no3 = 7

// // let no4 = no1 + no2 + no3
// // console.log(no4)

// // let no5 = no4 / 12
// // console.log(no5)

// // console.log(no4 + no5 - 35)

// // // sekantis

// // let lo1 = 30 / 3
// // lo1 = lo1 * 20
// // lo1 = lo1 - 15
// // lo1 = String(lo1) + " total num"

// // console.log(lo1)



// // const incorrectYear = 584
// // const incorrectMonth = 58
// // let incorrectName = "Jonas"
// // let incorrectCountry = "USA"

// // //////
// // // let makeStringCorrect = `It is ${year} now, month ${month}, my name is ${name} 
// // // i'm from ${country}`

// // let year = incorrectYear + 1436
// // let month = incorrectMonth - 48
// // incorrectName = "Onute"
// // let name = incorrectName
// // incorrectCountry = "Lithuania"
// // let country = incorrectCountry

// // let makeStringCorrect = `It is ${year} now, month ${month}, my name is ${name} 
// // i'm from ${country}`

// // console.log(makeStringCorrect)



// const textFirst = "cia pirmasis mano tekstas ir jo ilgis yra "
// const textSecond = "cia antrasis mano tekstas ir jo ilgis minus 30 yra "
// const textThird = "cia yra dvieju pries tai buvusiu tekstu ilgio suma "

// console.log(textFirst + textFirst.length)
// console.log(textSecond + (textSecond.length - 30))
// console.log(textThird + (textFirst.length + textSecond.length))


// let arr = [
//     'labas', 654, 32, 'kaip', 55, "sekasi", "tau",25
// ]
// //labas kaip tau sekasi
// console.log(arr[0], arr[3], arr[6], arr[5]);

// let var1 = arr[2] + arr[7]
// let var2 = arr[1] - var1

// console.log(var1)
// console.log(var2)


// let items = ["pienas", "chair", "agurkai", "ledai", "apelsinai", "medus", "table"]
// // create two variables with text strings one should have edible
// // items in it other whats left
// // create a variable which shows how long is items array
// // console log all variables

// let vegg = `${items[0]}, ${items[2]}, ${items[3]}, ${items[4]}, ${items[5]}`;
// console.log(vegg)

// let furniture = `${items[1]}, ${items[6]}`
// console.log(furniture)

// // console.log(items[0], items[2], items[3], items[4], items[5])
// // console.log(items[1], items[6])

// console.log(items.length)

// console.log(vegg, furniture, items.length)


// const itemCost = 15.88
// const itemsBought = ['table', 'glass', 'computer', 'lamp', 'orange']
// // Create variables and do things:
// // count total price from all bought items
// // count sum of all letters i array items
// // get orange from itemsBought array and make it to be value of new created variable
// // get 2 index item and 4 index item from array and sum up their lengths, put value to array

// let total = itemsBought.length * itemCost
// console.log(total)

// let letterSum = itemsBought[0].length + itemsBought[1].length + itemsBought[2].length + itemsBought[3].length + itemsBought[4].length;

// console.log(letterSum)

// let newOrange = itemsBought[4]

// let arr2 = itemsBought[2].length + itemsBought[4].length
// console.log(arr2)


// console.log(typeof 'labas rytas')
// console.log(typeof true)
// console.log(typeof(365/12))
// console.log(typeof prompt ("Iveskite skaiciu") )
// console.log(typeof window)
// console.log(typeof console.log)
//   uzduotis




// let myTask = "Hello, this text is in upper case or in lower case"

// console.log(myTask.toLowerCase())
// console.log(myTask.toUpperCase())

// let var1 = String(myTask)

// console.log(var1)

// let uber = myTask.replace("upper", "ubber")
// console.log(uber)

// let waze = myTask.replace("Hello", "wazeee")
// console.log(waze)

// console.log(myTask.length-1)

// let sum = myTask[0] + myTask[myTask.length-1]
// console.log(sum)





// console.log(myTask[myTask.indexOf(',')])


// let div = Math.round(myTask.length/12)
// console.log(div)

// let typesum = typeof(myTask)
// console.log(typesum)

// let naujas = myTask + ' ultra turbo'
// console.log(naujas)





// let firstString = "this is my first string"
// let secondString = "this is my second string"

// // new variable to be sum of first and second string, make the have space between

// let sum = firstString + ' ' + secondString
// console.log(sum)


// // new variable to be sum of first and second string lengths

// let noSum = firstString.length + secondString.length
// console.log(noSum)

// // new variable to have first string length multiplied by second string length

// let multi = firstString.length * secondString.length
// console.log(multi)

// // replace "this" in first and second strings to "that"

// firstString = firstString.replace("this", "that")
// console.log(firstString)

// secondString = secondString.replace("this", "that")
// console.log(secondString)

// // new variable to be "is", got from first string with indexOf

// let iii = firstString.indexOf('is') 
// let sss = firstString.indexOf('is') + 1

// console.log(firstString[iii] + firstString[sss])



// // new variable to be "my", got from second string with indexOf

// let mmm = secondString.indexOf('my')
// let yyy = secondString.indexOf('my') + 1


// console.log(secondString[mmm] + secondString[yyy])

// // new variable with past two summed up to be "my is"

// let sumsum = firstString[iii] + firstString[sss] + ' ' + secondString[mmm] + secondString[yyy]
// console.log(sumsum)




// ////////////////////////////////
// Declare five constant variables, assign different type of value to each of them

//  let var1 = 35
//  let var2 = "textas"
//  let var3 = [32, 'textas', 2, 6, 7]
//  let var4 = false
//  let var5 = undefined

// console.log(typeof var1)
// console.log(typeof var2)
// console.log(typeof var3)
// console.log(typeof var4)
// console.log(typeof var5)

// // ////////////////////////////////
// // const first = 22
// // const second = 48

//  const c1 = 22
//  const c2 = 48

//  console.log(c1 + c2)

// // let valueOfFirstAndSecond

 

// // ////////////////////////////////
// // substract second from first, divide by third, multiply by fourth

 

// const first = 100
// const second = 30
// const third = 2
// const fourth = 5


// const result = (first - second) / third * fourth
// console.log(result)
 

// // ////////////////////////////////
// // Declare a variable with value 99

//  let varvar = 99

//  let re1 = varvar / 3
//  console.log(re1)

//  let re2 = varvar - 69
//  console.log(re2)

// let re3 = varvar - 47 + " kortos yra kaladej"
// console.log(re3)


// // ----
// // log(33)
// // ---
// // log(30)
// // ---
// // log("52 kortos yra kaladej")

 

// // ////////////////////////////////
// // make result value to be "trains are cool, so i like trains"

 

// const quote1 = "trains are cool"
// const quote2 = "i like trains"

 

// let result2 = ` ${quote1} , so ${quote2}`
// console.log(result2)

 

// // ////////////////////////////////
// // make result to be "B is the second letter of alphabet"

 

// const forstOrSecond = ['first', 'second']
// const valueOne = "A is the"
// const valueTwo = "letter of alphabet"

 

// let result3 = valueOne.replace('A', 'B') + ' ' + forstOrSecond[1] + ' ' + valueTwo
// console.log(result3)

 

// // ////////////////////////////////
// // make rasult to be "this string length is ___"

 

// const string = "this string length is"

 

// let result4 = string.length
// console.log(result4)

 

// // ////////////////////////////////
// // get last object of array, and divide it by 2

 

// const arr = [5, 12, 18, 30, 40]

 

// let result5 =  arr[arr.length - 1] / 2
// console.log(result5)

 

// // ////////////////////////////////
// // change value of 'pienas' to 'jogurtas
// const shoppingList = ['duona', 'ledai', 'maisto katinui', 'bananai', 'gyvenimo prasme', 'pienas', 'sokoladas']

// let shop = shoppingList
// shop[5] = 'jogurtas'
// console.log(shop)



// // ////////////////////////////////
// // make result to be "ohh baby it's cold outside"

 

// const randomWords = [0, 20, "ohh", [78, "baby"], ['its cold', 11, 22], 'outside']

// let result6 = randomWords[2] + ' ' + randomWords[3][1] + ' ' + randomWords[4][0] + ' ' + randomWords[5]
// console.log(result6)


 

// // ////////////////////////////////

 

// let numbers = [1, 5, 2, 52, 88, 4]
// let streetName = "Kestučio gatve"

// streetName = "Kestucio"
// let newaddress = `${streetName} ${numbers[1]}${numbers[5]} - ${numbers[5]}`
// console.log(newaddress)
// // replace streetName to be "Kestucio"
// // create new variable to be "Kestucio 54-4" using back ticks and numbers from array
// // create new variable to have last symbol of before created variable multiplied by fourth number from numbers array

// let lastOne = newaddress[newaddress.length - 1] * numbers[3]
// console.log(lastOne)
















// /////
// let personAge = 18
// let phraseToSay = null


// if(personAge > 16) {
//     phraseToSay = "ok you can pass"
// } else {
//     phraseToSay = "you are to young to pass"
// }

// console.log(phraseToSay)


// //check if persons age is more than 16
// //if yes change phraseToSay to "ok you can pass"
// //if no change phraseToSay to "you are to young to pass"
// ////
// let firstSwitch = true
// let secondSwitch = true

// if (firstSwitch === secondSwitch) {
//     firstSwitch = false
// }
// if (firstSwitch !== secondSwitch) {
//     firstSwitch = false
    
// }



// // check is firstSwitch is equal to secondSwitch if yes change first to false
// // check one more time if they are different set both to false
// ////
// let string = "hello hello it is a string with many words"


// let arr 


// if (string.length > 10) {
//  arr = string[string[0]] + string[string.length-1] 
// }





// // check if string has more than 10 symbols in it
// // if yes add first and last symbol to array
// //
// let numberOne = 55
// let numberTwo = 22

// if (numberOne+numberTwo > 50) {
//     console.log("Yey it is more than 50")
// } else {
//     let newVar = numberTwo - numberOne
// }
// // check if sum of both numbers is more that 50
// // if yes console log "Yey it is more than 50"
// // if not, create new variable which has numberTwo divided from numberone


// /cia/g, vietoj replaco, kad visus isimti regular expression

// let myObject = {
//     name: "Onute",
//     secondName: "Baltrunaite",
//     number: 28,
//     city: "Rokiskis",
//     Nationality: "Lithuanian"
// }



// myObject.newObject = `${myObject.name} ${myObject.secondName}`
// myObject.dev = myObject.number/2
// myObject.letter = myObject.city[2]
// myObject.Nationality = "Lenkas"
// // myObject.newNationality = myObject.Nationality.replace('lithuanian', 'lenkas')
// console.log(myObject)



// let shop = {
//     products: ['milk', 'honey', 'bred pit', 'water', 'socks'],
//     productPrice: 164,
//     shopWorksTill: 22,
//     peopleInLine: ['first', 'second', 'third'],
//     moneyInPocket: 5000,
//     currentTime: 21,
//     wentForShopping: false,
// }

// if (shop.currentTime < shop.shopWorksTill) {
//     shop.wentForShopping = !shop.wentForShopping

//     console.log(shop.wentForShopping)
    

//     if (shop.productPrice * shop.products.length <= shop.moneyInPocket) {
//         console.log(shop.products)
//     } else {
//         shop.peopleInLine[2] = 'Onute'
//         console.log(shop.peopleInLine)
//     }
//     leftMoney = shop.moneyInPocket - 256 
//     // shop.moneyInPocket -= 256
//     console.log(`${leftMoney}  money left after shopping`)
    
// }

/*
check if current time is less then shopWorksTill
if true set wentForShopping to its opposite value.

Also check if you have enough moneyInPocket to buy all products in shop,
use .length on products and productPrice to get total price.

if there is enough money, console.log all products you have bought,
if not change third peopleInLine value to be you name
// subtract 256 from moneyInPocket and console log "___ money left after shopping" */
















// let car = {
//     wheels: 3,
//     broken: true,
//     gasoline: 3,
//     driver: "Mister Twister",
//     destination: "USA",
//     musicIsPlaying: false,
//     stuffInTrunk: ['ball', 'dolphin', 'empty bottles', 'snails', 'childhood dreams'],
//     kilometersMade: 0
// }

// if (car.broken) {
//     if (car.gasoline === 0) {
//         car.gasoline += 
    
//     } 
//     car.wheels++
//     if (car.wheels === 4) {
//         car.broken = false
//         console.log(`${car.driver} are one the way to ${car.destination}`);
//     }

// car.musicIsPlaying = true
// car.kilometersMade +=50

// if (car.kilometersMade > 350) {
//     car.broken = true
//     car.wheels-- 
//     car.musicIsPlaying = false
// }

// car.kilometersMade += 70

// if (car.kilometersMade > 350) {
//     car.broken = true
//     car.wheels--
//     car.musicIsPlaying = false
// }

// car.kilometersMade = car.kilometersMade + 120
// if (car.kilometersMade > 350) {
//     car.broken = true
//     car.wheels--
//     car.musicIsPlaying = false

// }
// car.kilometersMade = car.kilometersMade + 220
// if (car.kilometersMade > 350) {
//     car.broken = true
//     car.wheels--
//     car.musicIsPlaying = false

// }
// car.stuffInTrunk[2] = 'tuscias'
// console.log(car.stuffInTrunk)
// console.log(car.driver[0]  + car.driver[7])
// console.log(car);

// }

/*
check if car is broken if yes check if car has gasoline if no add 5 to gasoline

also check if car has all 4 wheels if yes set "broken" to false and log prideti rata???


"(driver name) are one the way to (destination)"

set musicIsPlaying to true

add add to kilometers made 50
check if kilometers made is more than 350
if yes set car broken to true, and remove one wheel
set music is playing to false
DONE

add add to kilometers made 70
check if kilometers made is more than 350
if yes set car broken to true, and remove one wheel
set music is playing to false
DONE 

add add to kilometers made 120
check if kilometers made is more than 350
if yes set car broken to true, and remove one wheel
set music is playing to false
DONE





add add to kilometers made 220
check if kilometers made is more than 350
if yes set car broken to true, and remove one wheel
set music is playing to false

change third element in stuffInTrunk array to be empty string
log driver first name letter and first second name letter
 
*/



// .shift() removes and returns first item from array 
// .pop() removes ant returns last item from array 
 
// .push() adds data to end of array 
// .unshift adds data to start of array 




// const lyricsOne = "vejas man pasake vien tavo varda"
// const lyricsTwo = "bet taves surasti as negaliu,"
// const lyricsThree = "kai pilka kregzdute padangem nardo"
// const lyricsFour = "jai labai pavydziu zydru keliu"

 

// let lyricsTotalLength = lyricsOne.length + lyricsTwo.length + lyricsThree.length + lyricsFour.length
// console.log(lyricsTotalLength);
// // Make lyricsTotalLength value to be length of all lyrics strings summed up

// let totalLengthInString = `${lyricsTotalLength}  is total length of lyrics`
// console.log(totalLengthInString);
// // Make totalLengthInString value to be " (NUMBER) is total length of lyrics"

// let lyricsStringAverageLength = lyricsTotalLength / 4
// console.log(lyricsStringAverageLength);
// // make lyricsStringAverageLength value to be mathematical expression
// // which counts average length of lyrics string

// const firstLetters = []


// firstLetters.push(lyricsOne[0], lyricsTwo[0], lyricsThree[0], lyricsFour[0])

// console.log(firstLetters);

// // Get first letter of each lyrics string, add it to array, using .push() or .unshift()


// const lastLetters = []

// lastLetters.unshift((lyricsOne[lyricsOne.length-1]), (lyricsTwo[lyricsTwo.length-1]), (lyricsThree[lyricsThree.length-1]), (lyricsFour[lyricsFour.length-1]))

// console.log(lastLetters);

// // Get last letter of each lyrics string, add it array, using .push() or .unshift()

 

// const authorsNameHidden = [
//     47,
//     'saldytuvas',
//     ['5877', [654, 'Danute'], 99, '', [88, 6547, 686, 'paprika', 1, [44, 'Neimontaite']]]
// ]
// let authorsName = authorsNameHidden[2][1][1] + ' ' + authorsNameHidden[2][4][5][1]
// console.log(authorsName)
// // Get authors name from array, make authorsName value to be string with authors name and surname




// const numbersRandom = [0, 5, 6, 8, 1, 2, 3, 7]
// const ascendingOrder = [4]


// ascendingOrder.push(numbersRandom[1], numbersRandom[2], numbersRandom[7], numbersRandom[3],)
// ascendingOrder.unshift(numbersRandom[0], numbersRandom[4], numbersRandom[5], numbersRandom[6])
// console.log(ascendingOrder);
// // Using .push() and .unshift() put numbers from numbersRandom to ascendingOrder in ascending order
// // numbersRandom array should not be updated or edited

 

// const coldThings = ['hot', 'hot', 'cold', 'cold', 'cold']
// const hotThings = ['hot', 'hot']
// // get hot strings from coldThings array, using .shift() method, and .push() it to hotThings array




// hotThings.push(coldThings.shift(coldThings[0]), coldThings.shift(coldThings[1]))
// console.log(coldThings)
// console.log(hotThings)

// const arrayVariable = [2, 0, "any", [687, 'any', true, ['Black Cat', 0, false]]]
// let cat = arrayVariable[3][3].shift()
// console.log(arrayVariable);

// let myCat = `arrayVariable has ${arrayVariable.length} items inside, i have ${cat}`
// console.log(myCat);



// // remove 'Black Cat' from arr, make myCat value to be "arrayVariable has (number) items inside, i have Black Cat"














 
// data.toUpperCase() 
// data.toLowerCase() 
// data.replace() 
// data.toFixed(2) 
// data.indexOf('is') 
 
// Math.round() 
// Math.floor() 
// Math.ceil() 
 
// < 
// > 
// >= 
// <= 
// == 
// != 
// !== 
// === 
 
// .shift() removes and returns first item from array 
// .pop() removes ant returns last item from array 
 
// .push() adds data to end of array 
// .unshift adds data to start of array 
 
// || - bent viena is salygu turi buti true 
// && - visos salygos turi buti true



// / check if counter is more than 74 * 8 if yes console.log length of firstLetters array
// console log first item from arrayItems in upperCase
// console log last item from arrayItems in lowerCase
// create a new key in data object to have Boolean type
// check if newly created key is true or false if true create one more key in data object with 

 


// let data = {
//     arrayItems: ['Zodziai ivairus', "naujas sakinys", 'sakinys be 858 skaiciu'],
//     firstLetters: [],
//     counter: 254 * 3
// }

//  if (data.counter > 74*8) {
//      console.log(data.firstLetters.length)
//  } 
//  console.log(data.arrayItems[0].toUpperCase());
//  console.log(data.arrayItems[data.arrayItems.length-1].toLowerCase());

//  data.newObject = true
//  console.log(data);

//  if (data.newObject) {
//      data.veryNewObject = "Labai naujas objektas"
//  }
//  console.log(data);

// ///////////////////////////////////////////////////////

 

// // make numbers array to have only numbers by using 
// // make words array to have only words
// // move items using - .pop() .shift() - .push(arg) .unshift(arg)

 


// let numbers = ['first', 1, 2, 3, 4, 'last']
// let words = ['word', 'any', 'word', 'world']

//  words.push(numbers.shift(), numbers.pop())
 
// //  let firstW = numbers.shift()
// //  let lastW =numbers.pop()

// // words.push(firstW, lastW)

//  console.log(numbers);
//  console.log(words);

// ///////////////////////////////////////////////////////

 

// let data2 = {
//     name: "Jerry",
//     hasToys: ['teddy bear', 'ball', 'car', 'soldier'],
//     yearsOld: 12,
//     birthDay: true,
//     totalToys: null,
//     friends: {
//         susana: "at grandparents",
//         tommy: "on pc",
//         brad: "playing football"
//     }
// }

//  if (data2.birthDay) {
//      data2.hasToys.shift()
//      console.log(data2.hasToys);
//      data2.hasToys.push('ps4')
//      console.log(data2.hasToys)
//      data2.yearsOld++
//      console.log(data2.yearsOld)

//      data2.totalToys = data2.hasToys.length
//      console.log(data2.totalToys);

// console.log(Object.keys(data2.friends))  
// //  console.log(Object.keys(data2.friends)[1])

//      console.log(data2.friends.susana);
//      console.log(data2.friends.tommy);
//      console.log(data2.friends.brad);
//  }

// // check if Jerry is having his birthday if yes do things:
// // remove teddy bear from hasToys array
// // add "ps4" to end of hasToys array
// // increment yearsOld by one
// // make totalToys key to always show length of hasToys array
// // log each of Jerry friends 

 

// ///////////////////////////////////////////////////////////


 

// let person = {
//     name: "John",
//     age: 120,
//     alive: false,
//     interest: ['swimming', 'dancing']
// }

//  person.name = "Jonas"
//  console.log(person.name);
//  person.age = 30
//  console.log(person.age);

// if (person.age < 100) {
//     person.alive = true 
//     // person.alive = !person.alive
//     console.log(person.alive)
//     if (person.alive) {
//         person.interest.push('enjoying life')
//         console.log(person.interest);
//     }
// }

// // Change Johns name to Jonas
// // Change his age to 30
// // check if john is younger than 100 if yes change his alive status to true
// // check if john is alive, if yes, add on more interest 'enjoying life' to array




// let objOne = {
//     data: ['sup', 'hello', 'hi', {name: "john", age: 88}],
//     needToRemoveObject: true
// }
// let objTwo = {
//     items: [2, 58, 68, 58],
//     john: null
// }// check if needToRemoveObject in objOne and data[0] is type of String
// // if both of them are true 
// // take object with name john from objOne and make it to be value of objTwo john key



// console.log(typeof(objOne.data[0]));
// console.log(typeof(objOne.needToRemoveObject))

// if ( typeof(objOne.data[0]) && objOne.needToRemoveObject === 'string') {
//     console.log("taip")
// } else {
//     console.log("ne abu")
// }
    
// //  objOne.data.shift()
//  objTwo.john = objOne.data.pop()

// console.log(objTwo.john);











// const redCar = {
//     model: "audi",
//     engineOn: false,
//     wheels: 4,
//     fuel: 40,
//     speed: 0,
//     broken: false,
//     people: ['John', 'Lucy', 'Marta', 'Fat Joe']
// }

//  paxNumber = redCar.people.length
//  console.log(paxNumber);

//  console.log(`red ${redCar.model} was standing by the road with ${paxNumber} people inside`);

// console.log(`${redCar.people[0]} started engine and began to ride`)
// redCar.engineOn = true


// redCar.speed = redCar.speed + 60
// redCar.fuel = redCar.fuel - 3
// console.log(`at first car speed was ${redCar.speed}, they had ${redCar.fuel} left`);

// if (redCar.speed > 100 && redCar.people.length > 3) {
//     redCar.wheels--
//     redCar.broken = !redCar.broken
//     console.log(`while driving at  ${redCar.speed} kmh, one wheel went off so car was forced to stop`)
//     redCar.engineOn = !redCar.engineOn
//     console.log(`${redCar.people[0]} got out to check the problem, and he saw only ${redCar.wheels} was left`)
//     console.log(`ohh no, said ${redCar.people[1]}, looks like car was loaded too much, so we lost one wheel`)
//     console.log(`i have an idea, said ${redCar.people[2]}, we should take ${redCar.people[redCar.people.length-1]} out and leave him by the road`);
//     console.log(`great idea! shouted ${redCar.people[0]}`)
//     let oneByTheRoad = redCar.people.pop()
//     console.log(oneByTheRoad)
//     redCar.wheels++
//     redCar.engineOn = !redCar.engineOn
//     redCar.broken = !redCar.broken
//     console.log(`few moments later car was hitting the road with ${redCar.people.length} passengers inside`);
//     console.log(`while ${oneByTheRoad} was left glancing surly at red ${redCar.model} vanishing in horizon`);

// } else {
//     if (redCar.speed < 100)
//     redCar.fuel = redCar.fuel - 6
//     console.log(`car successfully reached home with ${redCar.fuel} left and all ${redCar.people.length} people`);
// }

// Get passengers count, log string "red (Cars Model) was standing by the road with (number) people inside"
// log "(First person from people array) started engine and began to ride", change engineOn value to opposite
// increase car speed by 60, decrease fuel by 3, log "at first car speed was (speed), they had (fuel) left"
// increase car speed by 60, decrease fuel by 5, log "later car speed was (speed), they had (fuel) left"
// check if car speed is more than 100 and passengers count is more than 3
// if yes subtract 1 from wheels and change broken to opposite value
// log "while driving at (speed) kmh, one wheel went off so car was forced to stop"
// change engineOn to opposite value
// log "(first person name) got out to check the problem, and he saw only (wheels) was left"
// log "ohh no, said (any girl from people array), looks like car was loaded too much, so we lost one wheel"
// log "i have an idea, said (any girl from people array), we should take (last person in people array) out and leave him by the road"
// log "great idea! shouted (first person from people array)"
// remove last person from people array, make oneByTheRoad value to be removed persons name
// add one to wheels, change engineOn and broken values to opposite
// log "few moments later car was hitting the road with (people count) passengers inside"
// log "while (oneByTheRoad) was left glancing surly at red (car model) vanishing in horizon"

 
////// ELSE
// check if car speed is less than 100 if yes subtract 6 from fuel
// log "car successfully reached home with (fuel) left and all (people count) people"
 


// let warehouseOfTypes = {
//     items: ['wheel', 'bag', 'ball', {noteOne: 'buy some stuff', noteTwo: 'buy some more stuff'}],
//     itemsInWarehouseCount: 0,
//     rentPrice: 0,
//     warehouseSize: 50,
//     budget: 20,
//     bankrupt: false

// }

// warehouseOfTypes.notes = warehouseOfTypes.items.pop()

// warehouseOfTypes.items.push('handbag', 'channel', 'gucci')
// console.log(warehouseOfTypes)

// temsInWarehouseCount = warehouseOfTypes.items.length
// console.log(temsInWarehouseCount)

// if (warehouseOfTypes.items.length > 5) {
//     warehouseOfTypes.warehouseSize += 30
//     console.log(warehouseOfTypes.warehouseSize);
// }

// if (warehouseOfTypes.warehouseSize > 60) {
//     warehouseOfTypes.rentPrice = warehouseOfTypes.warehouseSize * 2.5
//     console.log(warehouseOfTypes.rentPrice)
// }

// if (warehouseOfTypes.budget < warehouseOfTypes.rentPrice) {
//    warehouseOfTypes.moneyFromSoldItems = 0 
//    warehouseOfTypes.notes.noteThree = "Sell some items"
//    if (warehouseOfTypes.notes.noteThree == "Sell some items" ) {
//     warehouseOfTypes.items.pop()
//     warehouseOfTypes.items.pop()
//     warehouseOfTypes.moneyFromSoldItems = 2 * 30
//     console.log(warehouseOfTypes)
//     if (warehouseOfTypes.budget > warehouseOfTypes.rentPrice) {
//             warehouseOfTypes.bankrupt = true
//     console.log(warehouseOfTypes.bankrupt)
//     }
// }

// } 



// create new key in warehouse object name 'notes', remove last object from items array and make it to be value of 'notes'
// add 3 more random items to items array
// make itemsInWarehouseCount to be total length of items in warehouse
// check if there is more than 5 items in warehouse if yes increase warehouse size by 30
// check if warehouse size is more than 60 if yes set rentPrice, rent price is 2.5 per warehouseSize unit, count total price



// check if budget enough to pay the rent, if not, create new key in object warehouseOfTypes named "moneyFromSoldItems" with value 0
// add new key to note "noteThree" which holds string value "Sell some items"

// check if noteThree value is "Sell some items", if yes sell two last items for 30units each, make moneyFromSoldItems value to be selling expresion
// check if you budget is bigger than rent price if not change bankrupt value according to it


// let me = {
//     name: "Onute",
//     surname: "Baltrunaite",
//     age: 28,
//     city: "Vilnius"


// }

// function getPersonalInfo (vardas, pavarde, miestas) {
//     console.log(vardas, pavarde, miestas);
// }

// getPersonalInfo(me.name, me.surname, me.city)







// let obj = {
//     name: "Onute",
//     surname: "Baltrunaite"
// }

// let name2 = "ne Onute"
// let surname2 = "ne Baltrunaite"



// function nameAndSurname (first, second) {
//     console.log(first, second)
// }

// nameAndSurname(obj.name, obj.surname)
// nameAndSurname(name2, surname2)
// nameAndSurname("OOOOOOnute", "BBBBBBaltrunaite")


// function multiplyFive (kazkas) {
//     return kazkas * 5
// }
// console.log(multiplyFive(3))
// console.log(multiplyFive(8))
// console.log(multiplyFive(28))




// // from inside the function change persons name age and add one interest
// // variable "person" should stay outside the function

 

// let person = {
//     name: "Andy",
//     surname: 'Dandy',
//     interests: ['sports', 'pc']
// }

// function myMethod () {
//     person.name = "Jonukas"
//     person.interests.push('swimming')
//     person.age = 28
// }
// myMethod()
// console.log(person);






// let information = {
//     jobTitle: "taxi driver",
//     location: "London",
//     marriedTo: "John",
//     amountOfKids: '12'
// }

 

// function tellFortune(be, where, married, kidz) {
//     console.log(`You will be a ${be} in ${where}, and married to ${married} with ${kidz} kids.`)
// }

// tellFortune(information.jobTitle, information.location, information.marriedTo, information.amountOfKids)

 

// // pass information object to function tellFortune as argument,
// // outputs your fortune to the console like so: "You will be a X in Y, and married to Z with N kids."



// // Write a function that returns the string "something" joined with
// // a space " " and the given argument a.



// function giveMeSomething (kazkas) {
//     return `smth ${kazkas}` 
// }

// console.log(giveMeSomething("is better than nothing"))
// console.log(giveMeSomething("Bob Jane"))
// console.log(giveMeSomething("something"))








// let data = ['data1', 'data2', 'data3', 'data4']

//  function multiplyEight(arg) {
//     if (arg.length > 3) {
//         return arg.length * 8
//     } 
//  }
 
//  console.log(multiplyEight (data))
 


// // create a function which takes data as an argument, checks if data has more than 3 items
// // in array, if yes multiply data array length by 8 and return the answer


// // Create function which returns first element of array and multiplies it by 3

 
// function arrayFunction(arg2) {
//     return arg2[0] * 3
// }

// console.log(arrayFunction([1, 2,3, 4]))
// console.log(arrayFunction([58, 5,37, 5]))
// console.log(arrayFunction([288, 23]))



// // create a function which checks if numbers (and types) are equal, return true or false

//  function isSameNum(a1, a2) {
//      if (a1 === a2) {
//          return true
//      } else {
//          return false
//      }
//  }


// //  arba return a1 === a2

// console.log(isSameNum(2,2))
// console.log(isSameNum(8,21))
// console.log(isSameNum(9,"9"))






// // Given two numbers, return true if the sum of both numbers is less than 100.
// // Otherwise return false.

// function lessThan100(num1, num2) {

//     return num1 + num2 < 100
//     // if (num1 + num2 < 100) {
//     //     return true
//     // } 
//     // return false
// }

// console.log(lessThan100(22, 15))
// console.log(lessThan100(83, 34))
// console.log(lessThan100(3, 77))




// //Write a function that takes two integers (hours, minutes),
// // converts them to seconds, and adds them.

// function convert(hours, minutes) {
//     return hours * 3600 + minutes * 60

// }

// console.log(convert(1, 3))
// console.log(convert(2, 0))
// console.log(convert(0, 0))


// // write function named calculateDogAge that:
// // takes 1 argumentL you puppy's age.
// // calculates your dog's age based on conversion rate of 1 human year to 7 dog years.
// // outputs the result to console log like so "Your doggie is (AGE) years old in dog years"
// // call the function three times with different sets of values - 3, 8, 12


// function calculateDogAge(argumentL) {
//     return `Your doggie is ${argumentL * 7} years old in dog years`
// }
// console.log(calculateDogAge(3))
// console.log(calculateDogAge(8))
// console.log(calculateDogAge(12))

// /*
// In this challenge, a farmer is asking you
// to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal
// for each species. You have to implement a function that returns the total number of legs of all the animals.

// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.

//  */

//  function animals(chickens, cows, pigs) {
//      return chickens*2 + cows*4 + pigs*4

//  }

// console.log(animals(2, 3, 5))
// console.log(animals(1, 2, 3))
// console.log(animals(5, 2, 8))



// //Create a function that takes three arguments prob, prize, pay
// // and returns true if prob * prize > pay; otherwise return false.

//  function profitableGamble(prob, prize, pay) {
//      return prob*prize > pay
//  }

// console.log(profitableGamble(0.2, 50, 9))
// console.log(profitableGamble(0.9, 1, 2))
// console.log(profitableGamble(0.9, 3, 2))

// // Create a function that takes two strings as arguments and return either true or
// // false depending on whether the total number of characters in the first
// // string is equal to the total number of characters in the second string.

//  function comp(string1, string2) {
//      return string1.length === string2.length
//  }

// console.log(comp("AB", "CD"))
// console.log(comp("ABC", "DE"))
// console.log(comp("hello", "edabit"))

// //Create a function that returns true if a string is empty and false otherwise.

//  function isEmpty(arr) {
//     //  return arr.length === ""
//     //  return !!arr tikrina ar isvis kazkas yra viduje
//     let empty = !!arr
//     return !empty
//  }

// console.log(isEmpty(""))
// console.log(isEmpty("a"))
// console.log(isEmpty(" "))

// /*
// A bartender is writing a simple program to determine whether
// he should serve drinks to someone. He only serves drinks
// to people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in session,
// create a function which returns whether he should serve drinks.

//  */

//  function shouldServeDrinks(ageAge, serve) {
//      if (ageAge > 18 && !serve) {
//         return `He should serve the drinks`
//      }
//      return `He should NOT serve the drinks`
//  }
 

// console.log(shouldServeDrinks(17, true))
// console.log(shouldServeDrinks(19, false))
// console.log(shouldServeDrinks(30, true))










// // Create a function that takes in a word and determines
// // whether or not it is plural. A plural word is one that ends in "s".

// function isPlural(plur) {
//     return plur[plur.length-1]==="s"
// }
// console.log(isPlural("changes"))
// console.log(isPlural("change"))
// console.log(isPlural("dudes"))
// console.log(isPlural("magic"))


// // Create a function that takes a string (a random name).
// // If the last character of the name is an "n", return true, otherwise return false.

//  function isLastCharacterN(name) {
//      return name[name.length-1]==="n"
//  }
// console.log(isLastCharacterN("Aiden"))
// console.log(isLastCharacterN("Piet"))
// console.log(isLastCharacterN("Bert"))
// console.log(isLastCharacterN("Dean"))


// // A typical car can hold four passengers and one driver,
// // allowing five people to travel around. Given n number of people,
// // return how many cars are needed to seat everyone comfortably.

//  function carsNeeded(nom) {
//      return Math.ceil(nom/5)

//  }
// console.log(carsNeeded(5))
// console.log(carsNeeded(11))
// console.log(carsNeeded(0))



// // Create a function that takes an array and a string as arguments and return the index of the string.

// function findIndex(array, string) {
//     return array.indexOf(string)
// }
 
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"))
// console.log(findIndex(["a", "g", "y", "d"], "d"))
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))


// // Write a function to check if an array contains a particular number.

// // use .includes() method on array to check if it has particular value inside
 
// function check(a, b) {
//     return a.includes(b)
// }
    
// console.log(check([1, 2, 3, 4, 5], 3))
// console.log(check([1, 1, 2, 1, 1], 3))
// console.log(check([5, 5, 5, 6], 5))
// console.log(check([], 5))


// // Create a function that searches for the index of a given item in an array.
// // If the item is present, it should return the index, otherwise, it should return -1.

//  function search(aaa, bbb) {
//         return aaa.indexOf(bbb) 
//  }
//  console.log(search([1, 2, 3, 4], 3))
//  console.log(search([2, 4, 6, 8, 10], 8))
//  console.log(search([1, 3, 5, 7, 9], 11))

// // Create a function that returns true if a string contains any spaces.

//  function hasSpaces(words) {
//     return words.includes(" ")
//  }
// console.log(hasSpaces("hello"))
// console.log(hasSpaces("hello, world"))
// console.log(hasSpaces(" "))
// console.log(hasSpaces(""))
// console.log(hasSpaces(",./!@#"))

// // Given two arrays, which represent two sandwiches, return whether
// // both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

//  function hasSameBread(sand1, sand2) {
//      if ( sand1[0] === sand1[sand1.length-1] && sand1[0] === sand2[sand2.length-1] && sand1[0] === sand2[0]) {
//          return `vienoda bulka`
//      } return `skirtinga bulka`
//  }

// console.log(hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
// ))

// console.log(hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
// )
// )
 
// console.log(hasSameBread(
//     ["toast", "cheese", "toast"],
//     ["brown bread", "cheese", "toast"]
// ))

 
// //Creates a function that takes a string and returns the concatenated first and last character.

//  function firstLast(india) {
//      return india[0] + india[india.length-1]

//  }

//  console.log(firstLast("ganesh"))
//  console.log(firstLast("kali"))
//  console.log(firstLast("shiva"))
//  console.log(firstLast("vishnu"))
//  console.log(firstLast("durga"))







// /*
// Write a function that stutters a word as if someone is
// struggling to read it. The first two letters are
// repeated twice with an ellipsis ...
// and space after each, and then the word is pronounced with a question mark ?.
//  */

//  function stutter(bla) {
//      return console.log(`${bla[0]}${bla[1]} ... ${bla[0]}${bla[1]} ... ${bla}? `)
//  }
 

// stutter("incredible") //➞ "in... in... incredible?"
// stutter("enthusiastic") //➞ "en... en... enthusiastic?"
// stutter("outstanding")// ➞ "ou... ou... outstanding?"



// create a for loop with 10 cycles
// log index of cycle on each iteration



// for (let x = 0; x < 10; x++) {
//     console.log(x)
// }

// // create for loop with 30 cycles, on each iteration check if
// // for loop index is more than 20 if yes, console log "cycle index is (CYCLE ID)"

// for (let x = 0; x < 30; x++) {
//     if (x>20) {
//       console.log(`cycle index is ${x}`)  
//     }
    
// }

// // go through array with for loop and flip booleans to opposite value

// let arrayOfBooleans = [true, false, false, true, true, true, false]

// for (let x = 0; x < arrayOfBooleans.length; x++) {
//    arrayOfBooleans[x] = !arrayOfBooleans[x]
// }
// console.log(arrayOfBooleans)


// // goe through array with for loop, if string is 'black mamba' console log
// // "(STRING VALUE) is (INDEX) in array, and is one of most poisonous snakes in the world"

 

// let getIndex = ['first', 'second', 'third', 'black mamba', 'fourth', 'fifth']

// for (let x = 0; x < getIndex.length; x++) {
//     if (getIndex[x] === 'black mamba') {
//       console.log(`${getIndex[x]} is ${x} in array, and is one of most poisonous snakes in the world`)  
//     }
    
// }

// // create a functions which accepts array data as an argument,
// // loops over all items in array and console logs each of them

 

// let arrayOfStrings = ['Labas', 'vakaras', 'ponios', 'ir', 'ponai']


// function method(arg) {

//    for (let x = 0; x < arg.length ; x++) {
//     console.log(arg[x])
// } 
    
// }
// method(arrayOfStrings)



// // in function loop over numbers in array multiply each by 3
// // console log answer

 

// let arrayOfNumbers = [1, 2, 3, 4, 5, 6,7,8,9]

// function multiplyThree(arrr) {
//     for (let x = 0; x < arrr.length; x++) {
//         console.log(arrr[x] * 3);
//     }

// }
// multiplyThree(arrayOfNumbers)


// // create function do this in it: 
// // with single for loop removes items from wagonsWIthCoal
// // and append them to wagonsOfGasoline after this done
// // check if wagonsWithCoal has any items, if not change coalCargo boolean to opposite
// // do the same with gasolineCargo key
// // console log modified object

 

// let freightTrain = {
//     wagonsWithCoal: [1,2,3,4,5],
//     coalCargo: true,
//     wagonsOfGasoline: [],
//     gasolineCargo: false
// }


// function toDo(doDo) {
//     let newLen = freightTrain.wagonsWithCoal.length

//     for (let x = 0; x < newLen; x++) {

//         let items = freightTrain.wagonsWithCoal.pop()
//         freightTrain.wagonsOfGasoline.push(items)
        
//     }
//     if (freightTrain.wagonsWithCoal.length === 0)
//     freightTrain.coalCargo = !freightTrain.coalCargo
//     freightTrain.gasolineCargo = !freightTrain.gasolineCargo
// }
// toDo(freightTrain)
// console.log(freightTrain)


// // crete a function which takes textObject.arrayWithWords as an argument
// // goe through array with words using for loop
// // take first letter of each word and add to aWord key in textObject
// // console log aWord key after all is done

 

// let textObject = {
//     arrayWithWords: ['firstWord', 'ipad', 'snow is snowing', 'hamburger'],
//     aWord: ''
// }

// function doStuff(words) {

//     for (let x = 0; x < words.length; x++)  {
//         textObject.aWord += (words[x][0])
//     }
//     console.log(textObject.aWord)
// }

// doStuff(textObject.arrayWithWords)


// // write a function which takes obj.numbers as an argument, gets fourth number in numbers array with for loop
// // rounds it to Ceil and puts to obj.roundedCeil, rounds it to floor and puts to obj.roundedFloor

 

// let obj = {
//     numbers: [1.1, 5.3, 6.68, 3, 2.5, 10.1],
//     roundedCeil: null,
//     roundedFloor: null
// }

// function doingSmth(numbs) {
//     for (let x = 0; x < numbs.length; x++) {
//         if (x === 4) {
//            obj.roundedCeil = Math.ceil(numbs[x])
//             obj.roundedFloor = Math.floor(numbs[x])
//         }
//     }
//    console.log(obj); 
// }

// doingSmth(obj.numbers)



// // check if stringVariable includes word 'doing' if yes create a function
// // which takes stringVariable as an argument and counts how many spaces it has
// // call that function

 

// let stringVariable = "Hello people, how are you doing ?"

// if (stringVariable.includes('doing')) {

//     function doingSmthVeryMuch(arg) {
//         let answer = 0
//         for (let x = 0; x < arg.length ; x++) {
//             if (arg[x] === ' ') {
//                 answer++
//             }
//         } 
//  console.log(answer)
//     }
//     doingSmthVeryMuch(stringVariable)
// }



// create a function which goes through array rounds all numbers to Ceil and returns array
// with rounded numbers

 

// let arrayOfNumbers = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6]
 
// function doSmth(arr) {
//     for (let x = 0; x < arr.length; x++) {
//         arr[x] = Math.ceil(arr[x]) 
//     }
// }
// doSmth(arrayOfNumbers)
// console.log(arrayOfNumbers)

// // create function which takes objectWithKeys as argument ant check which key includes
// // word 'actually' in array, make function to return string "{key name} has actually in array"

// let objectWithKeys = {
//     firstOne: ['hi', 'what', 'is', 'good'],
//     second: ['im', 'doing', 'pretty', 'well'],
//     third: ['me', 'too', 'actually']
// }

// function doingSmth(arr, name) {
//     for (let x = 0; x < arr.length; x++) {
//         if (arr[x].includes('actually')) {
//          console.log(`${name} has actually in array`)
//         }
//     }

// }
// doingSmth(objectWithKeys.firstOne, "firstOne")
// doingSmth(objectWithKeys.second, "second")
// doingSmth(objectWithKeys.third, "third")




// // Luke Skywalker has family and friends. Help him remind them who is who.
// // Given a string with a name, return the relation of that person to Luke.



// // let persons = ["Darth Vader", "Leia", "Han", "R2D2"]
// // let relationships = ["Father", "sister", "brother in law", "droid"]


 
// function relationToLuke(name) {
//     let say
//     if (name ==='Darth Vader') {
//         say = "father"
//     }
//     if (name ==='Leia') {
//         say = "sister"
//     }
//     if (name ==='Han') {
//         say = "brother in law"
//     }
//     console.log("Luke, I am your " + say);
    
// }

// relationToLuke("Darth Vader") 
// relationToLuke("Leia") 
// relationToLuke("Han") 



// // Create a function that takes an array with numbers and return an array with the elements multiplied by two.

//  function getMultipliedArr(numbers) {
//     for (let x = 0; x < numbers.length; x++) {
//         numbers[x] = numbers[x] * 2
//     }
//     console.log(numbers)
//  }

// getMultipliedArr([2, 5, 3])
// getMultipliedArr([1, 86, -5])
// getMultipliedArr([5, 382, 0])



// // Create a function that takes an array of words and transforms it into an array of each word's length.

//  function wordLengths(bla) {
//     for (let x = 0; x < bla.length; x++) {
//         bla[x] = bla[x].length
//     }
//     console.log(bla)
//  }

// wordLengths(["hello", "world"])
// wordLengths(["Halloween", "Thanksgiving", "Christmas"])
// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])


// // Create a function that returns the string "Burp"
// // with the amount of "r's" determined by the input parameters of the function.

//  function longBurp(rarNum) {
//      let r = ''
//      for (let x = 0; x < rarNum; x++) {
//          r += 'r'
//      }
//     console.log(`Bu${r}p`)
//  }

// longBurp(3)
// longBurp(5)
// longBurp(9)



// // Create a function that takes a number and return an array
// // of three numbers: half of the number, quarter of the number and an eighth of the number.
 
// function halfQuarterEighth(nom) {
//     array = [nom/2, nom/4, nom/8]
//     console.log(array)
// }

// halfQuarterEighth(6)
// halfQuarterEighth(22)
// halfQuarterEighth(25)



// // Create a function that takes a string and returns a string with spaces in between all of the characters.

// function spaceMeOut(gaga) {
//     let str = ""
    
//     for (let x = 0; x < gaga.length; x++) {
//       str = str + gaga[x] + ' '
//     }
//     console.log(str)
// }
 
// spaceMeOut("space")
// spaceMeOut("far out") 
// spaceMeOut("elongated musk") 

// // Create a function that takes an array and returns the sum of all numbers in the array.

// function getSumOfItems(arg) {
//     let sum = 0

//     for (let x = 0; x < arg.length; x++) {
//         sum += arg[x]
//     }
//     console.log(sum)
// }
 

// getSumOfItems([2, 7, 4])
// getSumOfItems([45, 3, 0]) 
// getSumOfItems([-2, 84, 23]) 



// // Given a number and an object with min and max properties,
// // return true if the number lies within the given range (inclusive).

//  function isInRange(nom, interval) {
//      if (nom => interval[0] && nom <= interval[1]) {
//         return console.log(true) 
//      } else {
//          return console.log(false) 
//      }

//  }

// isInRange(4, { min: 0, max: 5 })
// isInRange(4, { min: 4, max: 5 })
// isInRange(4, { min: 6, max: 10 }) 
// isInRange(5, { min: 5, max: 5 }) 







// // Create a function which returns the length of a string, WITHOUT using String.length property.

// function length (strArg) {
//     let ln = 0
//     for (x = 0; x < strArg.length; x++) {
//         ln++
//     }
//     console.log(ln)
// }

// length("Hello World")
// length("Edabit")
// length("wash your hands!")

// // Create a function that returns a number, based on the string provided. Here is a list of all digits (if you are non english speaker):

//     function word(nom) {
//         let answer = null

// //  arg === "one" ? answer = 1 : null
// //  arg === "two" ? answer = 2 : null
// //  arg === "three" ? answer = 3 : null
// //  arg === "four" ? answer = 4 : null

//         if (nom === 'one') {
//            answer = 1
//         }
//         if (nom === 'two') {
//             answer = 2
//          }
//          if (nom === 'three') {
//             answer = 3
//          }
//          if (nom === 'four') {
//             answer = 4
//          }
//          if (nom === 'five') {
//             answer = 5
//          }
//          if (nom === 'six') {
//             answer = 6
//          }
//          if (nom === 'seven') {
//             answer = 7
//          }
//          if (nom === 'eight') {
//             answer = 8
//          }
//          if (nom === 'nine') {
//             answer = 9
//          }
//          if (nom === 'zero') {
//             answer = 0
//          }

//         console.log(answer)
//     }

//     // function doStuff(arg) {
//     //     let words = ["zero", "one", "two", "three"]
//     //     let answ = 0
//     //     for (let x = 0; x < words.length; x++) {
//     //         arg === words[x] ? answer = x : null
//     //     }
//     //     console.log(answ)
//     // }




// word("one")
// word("two")
// word("nine")



// //Create a function that returns an array of booleans from a given number by iterating through the
//  //number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// function integerBoolean(digs) {
//     let arry = []
//     for (let x = 0; x < digs.length; x++) {
//         // Number(digs[x]) ? arry.push(true) : arry.push(false)
//         if (digs[x] == true) {
//             arry += 'true '
//         } else {
//             arry += 'false '
//         }  
//         } 
//         console.log(arry)
//     }

// integerBoolean("100101")
// integerBoolean("10")
// integerBoolean("001")



// // "one" ? 1 : null
// // arg === "one" ? 1 : null


// //Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// function filterArray(stringas) {
//     let newArray = []
//     for (let x = 0; x < stringas.length; x++) {

//         typeof stringas[x] === 'number' ? newArray.push(stringas[x]) : null


//         // if (Number(stringas[x])) {
//         //     newArray += stringas[x] + ' '
//         // }
//     }
//     console.log(newArray)
// }

// filterArray([1, 2, 3, "a", "b", 4])
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])
// filterArray(["Nothing", "here"])



// GABALAS KAZKOKS






// // Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

// function Go(numb) {
//     let veryNewLine = ''
//     for (let x = 0; x < numb; x++) {
//         veryNewLine += '-'
//     }
//     console.log(veryNewLine)
// }

// Go(1) //➞ "-"

// Go(5) //➞ "-----"

// Go(3) //➞ "---"



// // // Create a function that adds a string ending to each member in an array.

// function addEnding(data, ending) {

//     let veryNewArr = []

//     for (let x = 0; x < data.length; x++ ) {
//         // data[x]=data[x]+ending
//         veryNewArr.push(`${data[x]}${ending}`)
//     }
//     console.log(veryNewArr) 
// }



// addEnding(["clever", "meek", "hurried", "nice"], "ly")
// // //➞ ["cleverly", "meekly", "hurriedly", "nicely"]

// addEnding(["new", "pander", "scoop"], "er")
// // //➞ ["newer", "panderer", "scooper"]

// addEnding(["bend", "sharpen", "mean"], "ing")
// // //➞ ["bending", "sharpening", "meaning"]






// //Create a function to multiply all of the values in an array by the amount of values in the given array.

// function multiplyByLength(dataData) {
//     let newNewArr = []
//     for (let x = 0; x < dataData.length; x++) {
//         // dataData[x] = dataData[x] * dataData.length
//         newNewArr.push(dataData[x] * dataData.length)
//     }
//     console.log(newNewArr) 
// }

// multiplyByLength([2, 3, 1, 0]) //➞ [8, 12, 4, 0]

// multiplyByLength([4, 1, 1]) //➞ ([12, 3, 3])

// multiplyByLength([1, 0, 3, 3, 7, 2, 1]) //➞ [7, 0, 21, 21, 49, 14, 7]

// multiplyByLength([0]) //➞ ([0])




// // Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// function countdown(bum) {
//     let correctCountdown = []

//     for (let x = 0; x <= bum; x++) {

//         // correctCountdown.push(bum - x)
//         correctCountdown.unshift(x)
//     }
//     console.log(correctCountdown)
// }

// countdown(5) //➞ [5, 4, 3, 2, 1, 0]
// countdown(1) //➞ [1, 0]
// countdown(0) //➞ [0]




// Create a function that takes two arguments (item, times). The first argument (item) is the item

 // that needs repeating while the second argument (times) is the number of times the item is

 // to be repeated. Return the result in an array.


// function repeat(item, times) {
//     let newCounting = []
//     for (let x = 0; x < times; x++) {
//         newCounting.push(item)
//     }
//     console.log(newCounting)
// }

//  repeat("edabit", 3) //➞ ["edabit", "edabit", "edabit"]
//  repeat(13, 5) //➞ [13, 13, 13, 13, 13]
//  repeat("7", 2) //➞ ["7", "7"]
//  repeat(0, 0) //➞ []


//  //In this exercise you will have to:

// //Take a list of names.
//  //Add "Hello" to every name.
//  //Make one big string with all greetings.
//  //The solution should be one string with a comma in between every "Hello (Name)".

// function greetPeople(names) {
//     let greetingString = ''
//     for (let x = 0; x < names.length; x++) {
//         greetingString += `Hello ${names[x]}` 
//         if (x !== names.length -1) {
//             greetingString += ", "
//         }
//         // x !== name.length - 1 ? greetingString += ", " : ""
//     }

// console.log(greetingString)
// }

// greetPeople(["Joe"]) //➞ "Hello Joe"
// greetPeople(["Angela", "Joe"]) //➞ "Hello Angela, Hello Joe"
// greetPeople(["Frank", "Angela", "Joe"]) //➞ "Hello Frank, Hello Angela, Hello Joe"



// Create a function that repeats each character in a string n times.

// function repeat(words, timez) {
//    let string = ''

//     for (let x = 0; x < words.length; x++) {
        

//         for (let y = 0; y < words.length; y++)
//        string += words[x]
//     }

// console.log(string)
    
// }

// repeat("mice", 5) //➞ "mmmmmiiiiiccccceeeee"
// repeat("hello", 3) //➞ "hhheeellllllooo"
// repeat("stop", 1) //➞ "stop"



// //Create a function that takes in two arrays: the array of user-typed words,
//  // and the array of correctly-typed words and outputs an array containing
//  // 1s (correctly-typed words) and -1s (incorrectly-typed words).

//     function correctStream(user, correct) {
//          let newArr = []
//         for (let x = 0; x < user.length; x++) {
//            // user[x] === correct[x] ? newArr.push(1) : newArr.push(-1)
//             if (user[x] === correct[x]) {
//                 newArr.push(1)
//             } else {
//                 newArr.push(-1)
//             }   
//         }
//         console.log(newArr)
//     }

//  correctStream(

//     ["it", "is", "find"],
   
//     ["it", "is", "fine"]
   
//     ) //➞ [1, 1, -1]
   
//    correctStream(
   
//     ["april", "showrs", "bring", "may", "flowers"],
   
//     ["april", "showers", "bring", "may", "flowers"]
   
//     ) //➞ [1, -1, 1, 1, 1]


// // Create a function that filters out an array of state names into two categories based on the second parameter.
// // Abbreviations abb
// // Full names full

//     function filterStateNames(states, type) {
//             let newList = []
//             let fullList = []
//             if (type === "abb") {
   
//                 for (let x = 0; x < states.length; x++) {
//                     if (states[x].length === 2) {
//                         newList.push(states[x])
//                     }  
//                 }
//                 console.log(newList)
//             } else {
//                 for (let x = 0; x < states.length; x++) {
//                     if (states[x].length !== 2) {
//                         fullList.push(states[x])
//                     }  
//                 }
//                 console.log(fullList)
//             }    
//     }

// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")

// //➞ ["CA", "NY"]

// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")

// //➞ ["Arizona", "Nevada"]

// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")

// //➞ ["MT", "NJ", "TX", "ID", "IL"]

// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")

// //➞ []



// // Hamming distance is the number of characters that differ between two strings.
//  //To illustrate:
// //String1: "abcbba"
//  //String2: "abcbda"
// //Hamming Distance: 1 - "b" vs. "d" is the only difference.


//     function hammingDistance(string1, string2) {
//         let count = 0
//         for (let x = 0; x < string1.length; x++) {
//             if (string1[x] !== string2[x]) {
//                count = count + 1
//             }   
//         }
//         console.log(count) 
//     }

// //Create a function that computes the hamming distance between two strings.

// hammingDistance("abcde", "bcdef") 
// hammingDistance("abcde", "abcde")
// hammingDistance("strong", "strung")


// //Given a string of letters, how many capital letters are there?

//     function capitalLetters(letters) {
//         let number = 0
//         for (let x = 0; x < letters.length; x++) {
//             if (letters[x] === letters[x].toUpperCase() ) {
//                 number++
//             }
//         }
//         console.log(number)
//     }

// capitalLetters("fvLzpxmgXSDrobbgMVrc") //➞ 6
// capitalLetters("JMZWCneOTFLWYwBWxyFw") //➞ 14
// capitalLetters("mqeytbbjwqemcdrdsyvq") //➞ 0


// // Create a function that will remove the letters "a", "b" and "c"
// // from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

//     function removeABC(removing) {
//         let newString = ''
//         for (let x = 0; x < removing.length; x++) {
//             if (removing[x] === 'a' || removing[x] === 'b' || removing[x] === 'c') {
//                 newString += removing[x]
//             } 
//             if (!removing.includes('a') && !removing.includes('b') && !removing.includes('c')) {
//                 return console.log(null) 
//             }
//         }
//         console.log(newString)
//     }

// removeABC("This might be a bit hard") //➞ "This might e it hrd"
// removeABC("hello world!") //➞ null
// removeABC("") // ➞ null




// // JULIAUS UZDUOTIS NO1

// // Create a function that takes an array of strings and returns an array with
//  // only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

//  numInStr(["1a", "a", "2b", "b"]) //➞ ["1a", "2b"]
//  numInStr(["abc", "abc10"]) //➞ ["abc10"]
//  numInStr(["abc", "ab10c", "a10bc", "bcd"]) //➞ ["ab10c", "a10bc"]
//  numInStr(["this is a test", "test1"]) //➞ ["test1"]




//  // JULIAUS UZDUOTIS NO2

//  // Create a function that finds each number in the given array that is
//  // greater than every number that comes after it. Your solution should return an array of the number(s) that meet these criteria.

// leader([2, 3, 20, 15, 8, 3]) //➞ [20, 15, 8, 3]

// // Note that 20 is greater than all the elements to it's
// // right side, similarly 15 and so on.

// leader([2, 3, 20, 15, 8, 25, 3]) // ➞ [25, 3]

// // Note that 20 cannot be added because it is not greater than 25.

// leader([1, 2, 3, 4, 5]) //➞ [5]

// // 5 is technically greater than the (zero) remaining items.

// leader([8, 7, 1, 2, 10, 3, 5]) //➞[10, 5]

// // 10 is greater than all items to the right of it, so include.
// // 3 is not greater than all items to the right of it, so exclude.
// // 5 is greater than the remaining items, so include.



// .map() METHOD 

// metodas map eina per visu array objektus ir grąžina kiekiviną iš jų, taip pat grąžina index 
 
// let arr = ["Andrius", "Toma", "Jonas", "Petras", "Juste", "LT", "BG", "TT"] 
 
// arr.map( (item, index) => { 
//     console.log(item) 
// }) 
 
// arr.map(function (item) { 
//     console.log(item) 
// }) 
 
 

//Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// function jazzify(arg) {
     
//     let answer = arg.map(item => {
//         if (item[item.length-1] == '7') {
//            return item 
//         } else {
//             return item + '7' 
//         }
//     })
//     console.log(answer)
// }


// jazzify(["G", "F", "C"]) //➞ ["G7", "F7", "C7"]
// jazzify(["Dm", "G", "E", "A"]) //➞ ["Dm7", "G7", "E7", "A7"]
// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) //➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// jazzify([]) //➞ []

// //An isogram is a word that has no duplicate letters. 
//  //Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".


// //  isIsogram("Algorism") // ➞ true
// //  isIsogram("PasSword") //➞ false
// //   // Not case sensitive.
// //  isIsogram("Consecutive") //➞ false





// // Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

// function reverseCase(stringas) {
//     let newstring = ''
//     for (let x = 0; x < stringas.length; x++) {

//         if (stringas[x] === stringas[x].toUpperCase()) {
//         newstring += stringas[x].toLowerCase() 
//         } else {
//             newstring += stringas[x].toUpperCase()
//         }
     
// }
// console.log(newstring)   
//     }
   
// reverseCase("Happy Birthday") //➞ "hAPPY bIRTHDAY"
// reverseCase("MANY THANKS") //➞ "many thanks"
// reverseCase("sPoNtAnEoUs") //➞ "SpOnTaNeOuS"




// // Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

// function capMe(name) {

//     let vardai = name.map(item => {

//         let smallLetterNames = item.toLowerCase()
//         let firstLetter = item[0].toUpperCase()
//         for (let x = 1; x < item.length; x++) {
//             firstLetter += smallLetterNames[x]
//         }
//         return firstLetter
//     })
//     console.log(vardai)
// }

// capMe(["mavis", "senaida", "letty"]) //➞ ["Mavis", "Senaida", "Letty"]
// capMe(["samuel", "MABELLE", "letitia", "meridith"]) //➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) //➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]




// // Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.

// function flip(nom) {
//     nom === 1 ? console.log(0) : null
//     nom === 0 ? console.log(1) : null
// }

// flip(1) //➞ 0
// flip(0) //➞ 1




// // Create the function that takes an array with objects and returns the sum of people's budgets.

// function getBudgets(arrr) {
//     let sum = 0
//     arrr.map(item => {
//         sum += item.budget
//     })
//     console.log(sum)
// }

// getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//   ]) //➞ 65700
  
//   getBudgets([
//     { name: "John",  age: 21, budget: 29000 },
//     { name: "Steve",  age: 32, budget: 32000 },
//     { name: "Martin",  age: 16, budget: 1600 }
//   ]) //➞ 62600


//   // Create a function to check whether the given parameter is an Object or not.

//   function isObject(obj) {
//     // return console.log(typeof obj)
//     return console.log(!!obj)
//   }

// isObject(function add(x,y) {return x + y}) //➞ true
// isObject(new RegExp("^[a-zA-Z0-9]+$", "g")) //➞ true
// isObject(null) //➞ false
// isObject("") //➞ false



//Sam and Frodo need to be close. If they are side by side in the array, your    indexof frodo kintamas i froda
// function should return true. If there is a name between them, return false.

// middleEarth(["Frodo", "Sam", "Gandalf"]) //➞ true
// middleEarth(["Frodo", "Saruman", "Sam"]) //➞ false
// middleEarth(["Orc", "Sam", "Frodo", "Legolas"]) //➞ true


// function middleEarth(arr) {

//     let frodo = arr.indexOf("Frodo")
//     let sam = arr.indexOf("Sam")
//     if ( sam - frodo === 1 || sam - frodo === - 1) {
//         return console.log(true)
//     } else {
//     return console.log(false)
//     }
        
// }


// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

//To illustrate:

// largestSwap(27) //➞ false
// largestSwap(43) //➞ true

// // If 27 is our input, we should return false because swapping the
// //digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

// largestSwap(14) //➞ false
// largestSwap(53) //➞ true
// largestSwap(99) //➞ true


// function largestSwap(number) {
    
//     let numer = String(number)
    
//     if (numer[0] < numer[1]) {
//         console.log(false)
//     } else {
//         console.log(true)
//     }
// }

// Create a function that takes an array of strings and returns the words that are exactly four letters.

// isFourLetters(["Tomato", "Potato", "Pair"]) // ➞ ["Pair"]
// isFourLetters(["Kangaroo", "Bear", "Fox"]) //➞ ["Bear"]
// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) //➞ ["Ryan", "Matt"]


// function isFourLetters(words) {
//     let newArr = []
//     words.map(item => {
//       if (item.length === 4)  {
//         newArr.push(item)
//       }
//     })
// console.log(newArr)
// }


// Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

// function dictionary(first, second) {
//     let veryNewSmth = []
//     second.map(item => {
//         if ( item.includes(first)  ) {
//             veryNewSmth.push(item)
//         }

//         //indexof (string) === 0 tada pushins
//     })
//     console.log(veryNewSmth)
// }


// dictionary("bu", ["button", "breakfast", "border"]) //➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) //➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) //➞ []


// Create a function that takes two parameters and, if both parameters are strings,
// add them as if they were integers or if the two parameters are integers, concatenate them.

// stupidAddition(1, 2) //➞ "12"
// stupidAddition("1", "2") //➞ 3
// stupidAddition("1", 2) //➞ null

// function stupidAddition(no1, no2) {
//     let answer = ''
//     if ( typeof(no1)  === 'number' && typeof(no2)  === 'number') {
//         answer = (no1) + (no2)
//     }
//     if ( typeof(no1)  === 'string' && typeof(no2)  === 'string') {
//         answer = String(no1) + String(no2)
//     }
//     // if ( typeof(no1) !== typeof(no1) ) {
//     //     answer = null
//     // }
//     return null
//     console.log(answer)
// }


// Create a function that changes specific words into emoticons.
// Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

//smile :D
//grin :)
//sad :(
//mad :P

// function emotify(emoText) {
//     if (emoText.includes('smile')) {
//         emoText = 'Make me :D' 
//     }
//     if (emoText.includes('grin')) {
//         emoText = 'Make me :)'
//     }
//     if (emoText.includes('sad')) {
//         emoText = 'Make me :(' 
//     }
//     if  (emoText.includes('mad')) {
//         emoText = 'Make me :P' 
//     }
//     //  emotext = emoText.replace("smile", ":D")

// console.log(emoText)
// }

// emotify("Make me smile") //➞ "Make me :D"
// emotify("Make me grin") //➞ "Make me :)"
// emotify("Make me sad") //➞ "Make me :("



// Create a function that takes an array of hurdle heights and a jumper's jump height,
 // and determine whether or not the hurdler can clear all the hurdles.
 //A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.
 
// function hurdleJump(heights, jump) {
//     let trigger = true
//     heights.map(item => {
//         if (item > jump)  {
//              trigger = false
//         } 
//     })
//     console.log(trigger)
// }

// hurdleJump([1, 2, 3, 4, 5], 5) //➞ true
// hurdleJump([5, 5, 3, 4, 5], 3) //➞ false
// hurdleJump([5, 4, 5, 6], 10) //➞ true
// hurdleJump([1, 2, 1], 1) //➞ false


// Write a function that takes a string name and a number
// num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.


// function sayHelloBye(string, number) {
//     if (number) {
//         return console.log(`Hello ${string}`)
//     } else {
//         return console.log(`Bye ${string}`)
//     }
// }

// sayHelloBye("alon", 1) //➞ "Hello Alon"
// sayHelloBye("Tomi", 0) //➞ "Bye Tomi"
// sayHelloBye("jose", 0) //➞ "Bye Jose"


// Create a function that takes a number as an argument and returns
// true or false depending on whether the number is symmetrical or not.
// A number is symmetrical when it is the same as its reverse.


// function isSymmetrical(number) {

//     let reversinis = ''
//     number = String(number)
    
//     for (let x = 0; x < number.length; x++) {
//         reversinis = number[x] + reversinis
//     }
//     if ( number === reversinis ) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }

// }

// isSymmetrical(7227) //➞ true
// isSymmetrical(12567) //➞ false
// isSymmetrical(44444444) //➞ true
// isSymmetrical(9939) //➞ false
// isSymmetrical(1112111) //➞ true



// Arrays can be mixed with various types. Your task for this challenge
// is to sum all the number elements in the given array. Create a function
// that takes an array and returns the sum of all numbers in the array.

// function numbersSum(numo) {
//     let sum = 0
//     numo.map(item => {
//         if ( typeof(item) === 'number' ) {
//             sum += item
//         }
//     })
//     console.log(sum)
// }

// numbersSum([1, 2, "13", "4", "645"]) //➞ 3
// numbersSum([true, false, "123", "75"]) //➞ 0
// numbersSum([1, 2, 3, 4, 5, true]) //➞ 15




// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
 
// function hackerSpeak(argo) {

//     argo = argo.replace( /a/g, '4' )
//     argo = argo.replace( /s/g, '5' )
//     argo = argo.replace( /i/g, '1' )
//     argo = argo.replace( /o/g, '0' )
//     argo = argo.replace( /e/g, '3' )
//     console.log(argo)
// }

// hackerSpeak("javascript is cool") //➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") //➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") //➞ "b3c0m3 4 c0d3r"



// Create a function that takes in a year and returns the correct century.
 
// function century(year) {
//     year = Math.ceil(year / 100) 
//     console.log(`${year}th century`)
// }

// century(1756) //➞ "18th century"
// century(1555) //➞ "16th century"
// century(1000) //➞ "10th century"
// century(1001) //➞ "11th century"
// century(2005) //➞ "21st century"


// Create a function that converts Celcius to Fahrenheit and vice versa.
 
// function convert(degrees) {
//     let veryNewTemp = 0

//     if (degrees[degrees.length -1] === 'C') {
//         degrees = Number(degrees.replace("°C", "")) 
//         veryNewTemp = (degrees * 9/5) + 32
//         console.log(`${veryNewTemp}°F`)
//     } else if (degrees[degrees.length -1] === 'F') {
//         degrees = Number(degrees.replace("°F", "")) 
//         veryNewTemp = Math.round((degrees - 32) * 5/9) 
//         console.log(`${veryNewTemp}°C`)
//     } else {
//         console.log("Error")
//     } 
// }

// convert("35°C") //➞ "95°F"
// convert("19°F") //➞ "-7°C"
// convert("33") //➞ "Error"




// Create a function that takes a string and returns a string in which each character is repeated once.

// function doubleChar(stringas) {
//     let word = ''
//     for (let x = 0; x < stringas.length; x++) {

//         word += stringas[x] + stringas[x]

//     }
// console.log(word)
// }

// doubleChar("String") // ➞ "SSttrriinngg"
// doubleChar("Hello World!") // ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") // ➞ "11223344!!__  "



// // Given a number n, write a function that returns PI to n decimal places.

// function myPi(number) {
//     let pi = Math.PI
//    console.log(pi.toFixed(number)) 
// }

// myPi(5) //➞ 3.14159
// myPi(4) //➞ 3.1416
// myPi(15) //➞ 3.141592653589793


// //Create a function that takes an array as an argument and returns true or
// //false depending on whether the average of all elements in the array is a whole number or not.

// function isAvgWhole(array) {
    
//     let sum = 0

//     array.map(item => {
//         sum += item
//     })

//     let averageNo = sum/array.length

//     if (averageNo === Math.round(averageNo)) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
//     }

// isAvgWhole([1, 3]) //➞ true
// isAvgWhole([1, 2, 3, 4]) //➞ false
// isAvgWhole([1, 5, 6]) //➞ true
// isAvgWhole([1, 1, 1]) //➞ true
// isAvgWhole([9, 2, 2, 5]) //➞ false



// // Create a function that takes an integer and returns the
// // factorial of that integer. That is, the integer multiplied by all positive lower integers.

// function factorial(num) {
//     let counter = 1
//     for (let x = num; x > 0; x--) {

//         counter = counter * x
//     }

//     console.log(counter)
// }

// factorial(3) //➞ 6
// factorial(5) //➞ 120
// factorial(13) //➞ 6227020800



// //Create a recursive function that takes two parameters and repeats the
// //string n number of times. The first parameter txt is the string to be
// //repeated and the second parameter is the number of times the string is to be repeated.

// function repetition(string, number) {

//     let newString = ''
//     for (let x = 0; x < number; x++) {
//         newString += string
//     }
//     console.log(newString)
// }

// repetition("ab", 3) //➞ "ababab"
// repetition("kiwi", 1) //➞ "kiwi"
// repetition("cherry", 2) //➞ "cherrycherry"




// //Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.

// function getOnlyEvens(numbers) {
//     let evenArr = []

//     // for (let x = 0; x < numbers.length; x++) {

//     //    if (numbers[x]%2  === 0 && (numbers.indexOf(x))%2 === 0  ) {
//     //     evenArr.push(numbers[x])
//     //    }
//     // }

//     numbers.map((item, index) => {


//         item % 2 === 0 && index % 2 === 0 ? evenArr.push(item) : null
//     })

// console.log(evenArr)
// }

// getOnlyEvens([1, 3, 2, 6, 4, 8]) //➞ [2, 4]
// getOnlyEvens([0, 1, 2, 3, 4]) //➞ [0, 2, 4]
// getOnlyEvens([1, 2, 3, 4, 5]) //➞ []




// //Assume a program only reads .js or .jsx files. Write a function that accepts
// //a file path and returns true if it can read the file and false if it can't.

// function isJS(files) {
//     if ( files.includes('.js') ) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }

// }

// isJS("/users/user.jsx") //➞ true
// isJS("/users/user.js") //➞ true
// isJS("/users/user.ts") //➞ false


// // Create a function that takes an array of 10 numbers (between 0 and 9)
// // and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// function formatPhoneNumber(arr) {
//     let number = "("
//     for (let x = 0; x < arr.length; x++) {
//         x === 3 ? number += ") " : null


//     }

  


// }



// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //➞ "(123) 456-7890"
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) //➞ "(519) 555-4468"
// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) //➞ "(345) 501-2527"




// //Write a function that takes a string as an argument and returns the left most digit in the string.

// function leftDigit(nesamone) {
//     let answer = null
//     for (let x = 0; x < nesamone.length; x++) {

//         if ( nesamone[x] == Number(nesamone[x]) ) {
//             return console.log(nesamone[x])
//         }
//     }
// }

// leftDigit("TrAdE2W1n95!") //➞ 2
// leftDigit("V3r1ta$") //➞ 3
// leftDigit("U//DertHe1nflu3nC3") //➞ 1
// leftDigit("J@v@5cR1PT") //➞ 5



// const boxOne = document.getElementById('mouseOne')
// const boxtwo = document.getElementsByClassName('boxTwo')

// const span1 = document.querySelector('span')
// const span2 = document.querySelector('#mySpan')
// const span3 = document.querySelector('newSpan')

// const spans = document.querySelectorAll('span')

// const divs = document.querySelectorAll('div')


// const myButton = document.getElementById('btn1')
// myButton.addEventListener('click', doStuff)

// function doStuff() {
//     // console.log('labas rytas')

//     boxOne.style.backgroundColor = 'red'
//     boxOne.style.fontSize = '30px'
//     boxOne.style.color = 'white'

//     boxOne.innerText = 'labas'
//     // boxOne.innerHTML = '<div class="smallBox">1</div>'

// }















//COOKIE 



// const startWindow = document.getElementById('startWindow')
// const startButton = document.getElementById('startButton')

// const gameWindow = document.getElementById('gameWindow')
// const shopButton = document.getElementById('shopButton')

// const shopWindow = document.getElementById('shopWindow')
// const scorePoints = document.getElementById('score')

// const rotatingCookie = document.getElementById('cookie')

// const upgrade1 = document.getElementById('upgr1')
// const upgrade2 = document.getElementById('upgr2')
// const upgrade3 = document.getElementById('upgr3')
// const upgrade4 = document.getElementById('upgr4')
// const upgrade5 = document.getElementById('upgr5')

// const goodbyeCookie = document.getElementById('cookieGoodbye')



// startButton.addEventListener('click', startTheGame)
// shopButton.addEventListener('click', startTheShop)
// goBackButton.addEventListener('click', goingBack)
// cookie.addEventListener('click', cookieScoring)
// upgrade1.addEventListener('click', firstUpgrading)
// upgrade2.addEventListener('click', secondUpgrading)
// upgrade3.addEventListener('click', thirdUpgrading)
// upgrade4.addEventListener('click', fourthUpgrading)
// upgrade5.addEventListener('click', fifthUpgrading)





// let points = 0
// let pointsToAdd = 1
// let cookieRotateDegs = 15


// function startTheGame() {
//     startWindow.style.display = 'none'
//     gameWindow.style.display = 'flex'
//     shopWindow.style.display = 'none'
// }

// function startTheShop() {
//     startWindow.style.display = 'none'
//     gameWindow.style.display = 'none'
//     shopWindow.style.display = 'flex'
// }

// function goingBack() {
//     startWindow.style.display = 'none'
//     gameWindow.style.display = 'flex'
//     shopWindow.style.display = 'none'
// }



// function cookieScoring() {
    
//     scorePoints.innerText = `SCORE: ${points}`
//     points += pointsToAdd
//     // rotatingCookie.style.transform = `rotate${cookieRotateDegs}deg`
//     // cookieRotateDegs += 15
// }

// function firstUpgrading() {
//     if (points >= 10) {
//            points -= 10
//     goingBack()
//     pointsToAdd = 2 
//     }
// }

// function secondUpgrading() {
//     if (points >= 30) {
//         points -= 30
//         goingBack()
//         pointsToAdd = 5 
//     }
// }

// function thirdUpgrading() {
//     if (points >= 50) {
//         points -= 50
//         goingBack()
//         gameWindow.style.backgroundColor = 'black'
//     }
// }

// function fourthUpgrading() {
//     if (points >= 15) {
//         points -= 20   
//         goingBack()
//         cookie.classList.add('rotation')

//     }
// }

// function fifthUpgrading() {
//         if (points >= 20) {
//             points -= 20   
//             goingBack()
//             goodbyeCookie.src = "https://lh3.googleusercontent.com/proxy/wHp86JQoDZIoOh0gFmciyCLzfkOlD71r1DTyNrTQvj3e3xUZ7d0DqaIit8OeGs3X18muILntl1UgvaMWvJHluVUM27m8L_Eq6o6yydYcZn_dhI89Z03nY-k2cy_RPJp8KwI_xl-OkFwAw7U"

//     }
// }


// const attackButton = document.getElementById('attackButton')
// const healthPlayer = document.getElementById('healthPlayer')
// const healthComputer = document.getElementById('healthComputer')
// const points = document.getElementById('points')

// const monster = document.getElementById('monster')


// const lifeBottle = document.getElementById('lifeBottle')

// const sword = document.getElementById('sword')
// const scepter = document.getElementById('scepter')
// const arc = document.getElementById('arc')

// sword.addEventListener('click', choosingSword)
// scepter.addEventListener('click', choosingScepter)
// arc.addEventListener('click', choosingArc)

// attackButton.addEventListener('click', attacking)
// lifeBottle.addEventListener('click', resetHealthPlayer)

// let enemies = [
//     {​
//     name: "Goblin",
//     img: "https://i.imgur.com/yBh7Fn4.png",
//     health: 100,
//     maxDamage: 12
//     }​​,
//     {​​
//     name: "Troll",
//     img: "https://i.pinimg.com/originals/8d/7f/d8/8d7fd8ae9fcd6060497c628e1c7944b4.jpg",
//     health: 120,
//     maxDamage: 8
//     }​​,
//     {​​
//     name: "Witch",
//     img: "https://i.pinimg.com/originals/c0/da/c0/c0dac0da46b4c59534cf898b1967d523.png",
//     health: 80,
//     maxDamage: 15
//     }​​
//     ]

//     let enemies = ['https://i.imgur.com/yBh7Fn4.png', 'https://i.pinimg.com/originals/8d/7f/d8/8d7fd8ae9fcd6060497c628e1c7944b4.jpg', 'https://i.pinimg.com/originals/c0/da/c0/c0dac0da46b4c59534cf898b1967d523.png']
    

// let pcHealthLeft = 100
// let playerHealthLeft = 100
// let coins = 0

// function countingCoins() {
//     coins+= Math.round(Math.random() * 10)
//     points.innerText = `${coins} points`
// }

// function resetHealthPlayer() {
//     if (coins >= 50) {
//         coins-= 50
//         points.innerText = `${coins} points`
//         playerHealthLeft = 100
//         healthPlayer.style.width = '100%'
//     } 
// }

// let weaponSelected = null
// let playerDamage = 5

// function attacking() {

//     if (pcHealthLeft > 0) {
//         let enemyDamage = Math.floor(Math.random() * 5)
//         pcHealthLeft -= playerDamage
//         healthComputer.style.width = `${pcHealthLeft}%`
//         playerHealthLeft-= enemyDamage
//         healthPlayer.style.width = `${playerHealthLeft}%`
//         countingCoins() 
        
//         if (weaponSelected === 'sword') {
//             if (Math.random() < 0.25) {
//                 playerHealthLeft+= enemyDamage 
//                 healthPlayer.style.width = `${playerHealthLeft}%`
//             }
//         }
//         if (weaponSelected === 'scepter') {
//             playerHealthLeft+= Math.round(Math.random() * 5) 
//             pcHealthLeft -= playerDamage
//             // healthComputer.style.width = `${pcHealthLeft}%`
//             // healthPlayer.style.width = `${playerHealthLeft}%`
//         }
//         if (weaponSelected === 'arc') {
//             pcHealthLeft -= playerDamage
//             if (Math.random() < 0.5) {
//                 pcHealthLeft -= playerDamage 
//                 // healthComputer.style.width = `${pcHealthLeft}%`
//             }
//         }


//     } else {
//         let randomEnemyNo = Math.round(Math.random()*(enemies.length-1))
//         monster.src = enemies[randomEnemyNo]
//         newEnemyOnDisplay(randomEnemyNo)
//         healthComputer.style.width = `${pcHealthLeft}%`
//     }
// }


// function newEnemyOnDisplay(randomEnemyNo) {

//      if(randomEnemyNo === 0) {
//         pcHealthLeft = 100
//         playerHealthLeft-= Math.floor(Math.random() * 13) 
//      }
//      if (randomEnemyNo === 1) {
//         pcHealthLeft = 120
//         playerHealthLeft-= Math.floor(Math.random() * 9) 
//      }
//      if (randomEnemyNo === 2) {
//         pcHealthLeft = 80
//         playerHealthLeft-= Math.floor(Math.random() * 16) 
//      }
// }


// function choosingSword () {
//     weaponSelected === 'sword'
//     playerDamage = 10
// }

// function choosingScepter() {
//     weaponSelected === 'scepter'
//     playerDamage = 12
// }

// function choosingArc() {
//     weaponSelected === 'arc'
//     playerDamage = 7

// }








// function damagePercent(dmg) {​​
//     let enemyHealth = 150 // JUST AN AEXAMPLE
//     let onePercentOfHealth = enemyHealth / 100
//     return Math.round(dmg / onePercentOfHealth)
// }​​randomEnemyNo






// let weapons = {
//     sword: {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeRzen..",
//     damage: 10,
//     effect: 'gives player 25% chance to dodge enemy attacks'
//     },
//     magicWand: {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLtdkk..",
//     damage: 12,
//     effect: 'heals player on every enemy hit from 0 to 5 hit points'
//     },
//     bow: {
//     img: "https://preview.pixlr.com/images/800wm/100/1/1001468630.jpg",
//     damage: 7,
//     effect: 'has a 50% chance to hit enemy two times in a row'
//     },
//     potion: {
//     img: "https://preview.pixlr.com/images/450nwm/100/1/1001468594.jpg",
//     info: "can be bought from shop for 50 coins, recovers player health when bought",
//     }
//     }





// const buttons = document.getElementsByClassName('btn')
// const body = document.getElementsByClassName('bodys')


// buttons[0].addEventListener('click', doSomething)
// buttons[1].addEventListener('click', doSomething)
// buttons[2].addEventListener('click', doSomething)
// buttons[3].addEventListener('click', doSomething)
// buttons[4].addEventListener('click', doSomething)


// function doSomething(event) {
//     let color = event.target.innerText
//     document.querySelector('body').style.backgroundColor = color
// }




// nauja uzduotis


// let colors = [
//     '#ff8c7f',
//     '#4ff18e',
//     '#4f65f1',
//     '#f14fee',
//     '#67f14f',
//     '#f1754f',
// ]




// colors.map(item => {

//     let el = document.createElement('button')
//     // let buttonColor = el.innerText

//     el.innerText = item 
//     document.body.appendChild(el)

//     el.style.backgroundColor = el.innerText
//     el.style.margin = '20px'
//     el.style.padding = '20px'
//     el.addEventListener('click', coloringBody)

    

//     console.log(el)

    
// })

// function coloringBody(event) {
//     newBackgroundColor = event.target.innerText
//     document.querySelector('body').style.backgroundColor = newBackgroundColor 
// }


// kita uzuodtis

// let randomUsers = [
//     {
//         photo: "https://randomuser.me/api/portraits/men/2.jpg",
//         name: "Perry Fowler",
//         email: "perry.fowler@example.com",
//         cardColor: '#ff8c7f'
//     },
//     {
//         photo: "https://randomuser.me/api/portraits/women/9.jpg",
//         name: "Loretta Butler",
//         email: "loretta.butler@example.com",
//         cardColor: '#4ff18e'
        
//     },
//     {
//         photo: "https://randomuser.me/api/portraits/women/39.jpg",
//         name: "Charlotte Ward",
//         email: "charlotte.ward@example.com",
//         cardColor: '#4f65f1'
//     },
// ]

//  randomUsers.map((item, index) => {
//     let frame = document.createElement('div')
//     let picture = document.createElement('img')
//     let nameAndSurname = document.createElement('div')
//     let emailas = document.createElement('div')

//     frame.style.backgroundColor = item.cardColor

//     picture.src = item.photo
//     picture.style.margin = '10px'

//     nameAndSurname.innerText = item.name
//     emailas = item.email

//     frame.appendChild(picture)
//     frame.appendChild(nameAndSurname)
//     frame.appendChild(emailas)

//     document.body.appendChild(frame)

//  })


// items = [
//     {​​​​
//         id: "prod1",
//         image: "https://i.etsystatic.com/24029103/r/il/7101d9/2582521500/il_794xN.2582521500_pgg3.jpg",
//         name: "Leather Tool Roll Up Pouch",
//         price: 30.90
//     }​​​​,
//     {​​​​
//         id: "prod2",
//         image: "https://i.etsystatic.com/22401403/r/il/56d9f2/2529967961/il_794xN.2529967961_7y5w.jpg",
//         name: "Hand Forged Viking Axe",
//         price: 132.48
//     }​​​​,
//     {​​​​
//         id: "prod3",
//         image: "https://i.etsystatic.com/12741331/r/il/1a6268/1267899307/il_794xN.1267899307_st8j.jpg",
//         name: "Leather Cabinet Pulls",
//         price: 5.68
//     }​​​​,
//     {​​​​
//         id: "prod4",
//         image: "https://i.etsystatic.com/12815693/r/il/ece312/1085869628/il_794xN.1085869628_2z2r.jpg",
//         name: "Unicorn Papercraft, 3D Papercraft",
//         price: 14.52
//     }​​​​,
//     {​​​​
//         id: "prod5",
//         image: "https://i.etsystatic.com/11318063/r/il/53df06/1126873004/il_794xN.1126873004_tg73.jpg",
//         name: "Chicken Coop Plans",
//         price: 18.11
//     }​​​​
// ]


// nauja uzduotis


// let items = [
//     {
//         id: "prod1",
//         image: "https://i.etsystatic.com/24029103/r/il/7101d9/2582521500/il_794xN.2582521500_pgg3.jpg",
//         name: "Leather Tool Roll Up Pouch",
//         price: 30.90
//     },
//     {
//         id: "prod2",
//         image: "https://i.etsystatic.com/22401403/r/il/56d9f2/2529967961/il_794xN.2529967961_7y5w.jpg",
//         name: "Hand Forged Viking Axe",
//         price: 132.48
//     },
//     {
//         id: "prod3",
//         image: "https://i.etsystatic.com/12741331/r/il/1a6268/1267899307/il_794xN.1267899307_st8j.jpg",
//         name: "Leather Cabinet Pulls",
//         price: 5.68
//     },
//     {
//         id: "prod4",
//         image: "https://i.etsystatic.com/12815693/r/il/ece312/1085869628/il_794xN.1085869628_2z2r.jpg",
//         name: "Unicorn Papercraft, 3D Papercraft",
//         price: 14.52
//     },
//     {
//         id: "prod5",
//         image: "https://i.etsystatic.com/11318063/r/il/53df06/1126873004/il_794xN.1126873004_tg73.jpg",
//         name: "Chicken Coop Plans",
//         price: 18.11
//     }
// ]




// let money = 150
// let notEnoughMoney = false




// function mainPage() {




//     document.body.innerHTML = ""

//     let moneyLeft = document.createElement('div')
    
//     moneyLeft.innerText = 'MONEY: ' + money
//     document.body.appendChild(moneyLeft) 

// items.map((item, index) => {

//     let img = document.createElement('img')
//     img.src = item.image
//     img.style.height = '300px'
//     img.style.width = '300px'
//     img.style.margin = '10px'

//     let frame = document.createElement('div')
//     frame.style.padding = '15px'
//     frame.style.border = '2px solid black'
//     frame.style.margin = '15px'

//     frame.setAttribute('id', item.id)

//     let names = document.createElement('h3')
//     names.innerText = item.name

//     let prices = document.createElement('h4')
//     prices.innerText = item.price

//     let buyButton = document.createElement('h4')
//     buyButton.innerText = 'BUY'
//     buyButton.style.backgroundColor = 'green'
//     buyButton.style.border = '1px solid black'

//     buyButton.setAttribute('id', item.id)
//     buyButton.addEventListener('click', buyingThings)

//     frame.appendChild(img)
//     frame.appendChild(names)
//     frame.appendChild(prices)
//     frame.appendChild(buyButton)

//     document.body.appendChild(frame)
// })

// }

// mainPage()



// function buyingThings(event) {

//     let id = event.target.id
//     let price = items.filter(el => el.id === id)[0].price 
//     console.log(price)


//     if (money > price) {
//     money-= price 
//     items = items.filter(el => el.id !== id)
//     mainPage()
//     } else {
//         alert('NOT ENOUGH MONEY')
//     }
    
// }




// create simple minesweeper game
// create 100 squares
// each square should have class attribute
// make class attribute value to be random item from array
// add event listeners on on each square
// clicking square should call method, which gets that square name
// get class name trough click event target attributes

// check if class name value is empty or bomb if bomb GAME OVER
// else add one more class to element and make makes square different color
// make game over text to appear if user click square with a bomb




// let itemsArray = ['empty', 'empty', 'empty', 'bomb', 'empty', 'empty', 'empty', 'bomb','empty', 'empty', 'empty', 'bomb']



// function makingDisplay() {

//     for (let x = 0; x < 100; x++) {

//         let box = document.createElement('div')
//         box.classList.add("boxStyle")
//         box.classList.add(itemsArray[Math.floor(Math.random() * itemsArray.length )])

//         document.body.appendChild(box)
//         box.addEventListener('click', playingTheGame)
//     }
// }
// makingDisplay()


// let gameOver = false
// let points = 0

//  function playingTheGame(event) {

//     // let scoring = document.createElement('div')
    
//     // document.body.appendChild(scoring) 
//     // scoring.innerText = 'POINTS: ' + points
//     console.log(event.target)

//     if (!gameOver) {
//     if (event.target.classList[1] === 'empty') {
//         event.target.classList.add('noBombStyle') 
//         points++ 
//     } else if (event.target.classList[1] === 'bomb') {
//         event.target.classList.add('bombStyle')  
//         alert('Game Over')
//         gameOver = true
//     }
// }
// console.log(points)
    
//  }







// GET

// fetch("https://api.chucknorris.io/jokes/random")
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })






// const container = document.getElementById('container')
// const counter = document.getElementById('counter')
// const sumOfLetters = document.getElementById('sumOfLetters')
// const firstInput = document.getElementById('inputas')
// const firstButton = document.getElementById('buttonas')

// firstButton.addEventListener('click', settingDates)
// let arr = []


// // ADD BUTTON 
// let addButton = document.createElement('div')
// addButton.classList.add('addStyle')
// addButton.innerText = 'ADD'
// document.body.appendChild(addButton)
// addButton.addEventListener('click', updatingData)
// // ADD BUTTON


// function updatingData() {

// fetch("https://api.chucknorris.io/jokes/random")
// .then(response => response.json())
// .then(data => {
//     arr.push(data)
//     console.log(data)

//     addingBoxes() 
// })

// }



// function addingBoxes() {
//     let points = 0
//     let letters = 0
//     container.innerHTML = ""

//     arr.map(item => {

//     let frame = document.createElement('div')
//     frame.classList.add('frameStyle')

//     let imgCard = document.createElement('img')
//     imgCard.classList.add('imgCard')
//     imgCard.src = item.icon_url

//     let dateCard = document.createElement('div')
//     dateCard.classList.add('ssstyle')
//     dateCard.innerText = item.created_at

//     let urlCard = document.createElement('div')
//     urlCard.classList.add('ssstyle')
//     urlCard.innerText = item.url

//     let valueCard = document.createElement('div')
//     valueCard.classList.add('ssstyle')
//     valueCard.innerText = item.value

//     let closing = document.createElement('div')
//     closing.classList.add('closingCard')
//     closing.innerText = 'X'
//     closing.setAttribute('id', item.id)
//     closing.addEventListener('click', closeCard)
    
//     let randomColor = document.createElement('button')
//     randomColor.innerText = "randome color"
//     randomColor.style.margin = "10px"
//     randomColor.addEventListener('click', changingColor)
   
//     let inputas = document.createElement('input')


//     frame.appendChild(imgCard)
//     frame.appendChild(dateCard)
//     frame.appendChild(urlCard)
//     frame.appendChild(valueCard)
//     frame.appendChild(closing)
//     frame.appendChild(randomColor)
//     frame.appendChild(inputas)
        
//     container.appendChild(frame)
//         points++
//         letters+= item.value.length
//     })
//     counter.innerText = `NUMBER: ${points}`
//     sumOfLetters.innerText = `SUM OF LETTERS: ${letters}`
//     console.log(counter)
//     console.log(sumOfLetters)
// }

// function closeCard(event) {
//     console.log(event.target.id)

//     arr = arr.filter(el => el.id !== event.target.id)
//     addingBoxes()
// }



// // add button on each card "random color" it should change cards background color to random
// // add counter in top of the page, to show hom many items there is in array
// // add "total letters" in top of page to show hom many letters in total all jokes values have summed up
// // add input on the bottom of the card, when input value is changed it should change joke value
// // add input and button in top of page "set date" when input value is added and button clicked, all cards time should change to input value



// let colorArray = ['#FF6633','#FFB399', '#FF33FF', '#FFFF99','#00B3E6',
// '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
// '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
// '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
// '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
// '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
// '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
// '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
// '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
// '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];



// function changingColor(event) {
 
//     event.path[1].style.backgroundColor = colorArray[Math.round(Math.random()* (colorArray.length - 1))]
//     console.log(event)
     
// }

// function inputWithJoke() {

// }

// function settingDates(event) {
 
// }



//  naujas zaidimas pradzia

// URL - https://jsonplaceholder.typicode.com/users// once you get all users from server, add random age to each of them (from 20 to 50)
// also add random image to each of users from https://picsum.photos/ so you will be able to show it later//// picsum gets you random image based on size, if size differs, image will also ne different
//// for example https://picsum.photos/201 is different from https://picsum.photos/200// when data got and updated, make it appear on web page in gallery of user profiles cards
// card should have: user name, phone, email, website, company name and catch phrase
//// on the top of gallery make button for each filter, here is what you have to filter:
//// show users with age more than 30
//// show users whose username is less than 10 letters
//// show users whose website ends with .com
//// show users who has word Suite is address and suite key



// const button1 = document.getElementById('button1')
// const button2 = document.getElementById('button2')
// const button3 = document.getElementById('button3')
// const button4 = document.getElementById('button4')
// const container = document.getElementById('container')
// const myModal = document.getElementById('myModal')


// button1.addEventListener('click', filteringByAge)
// button2.addEventListener('click', filteringByLetters)
// button3.addEventListener('click', webEndCom)
// button4.addEventListener('click', wordSuite)

// userData = []


// fetch("https://jsonplaceholder.typicode.com/users//")
// .then(response => response.json())
// .then(data => {
    
//     data.map(item => {
//         item.randomAge = Math.floor(Math.random()*30 + 20)
//         item.randomPhoto = `https://picsum.photos/${Math.round(Math.random() * 300)}`
//         userData.push(item)
//     })

//     // for (let x=0; x < userData.length; x++) {
//     //     userData[0][x].randomAge = Math.floor(Math.random()*30 + 20)
//     //     userData[0][x].randomPhoto = `https://picsum.photos/${Math.round(Math.random() * 300)}`
//     // }

//     makingCards()
//     console.log(userData)

// })

// function makingCards() {

//     container.innerHTML = ''

//         userData.map(item => {

//             let cardFrame = document.createElement('div')
//             cardFrame.classList.add('frameStyle')

//             let userName = document.createElement('div')
//             userName.classList.add('ssstyle')
//             userName.innerText = item.name

//             let userPhoto = document.createElement('img')
//             userPhoto.classList.add('imgCard')
//             userPhoto.src = item.randomPhoto

//             let userEmail = document.createElement('div')
//             userEmail.classList.add('ssstyle')
//             userEmail.innerText = item.email

//             let web = document.createElement('div')
//             web.classList.add('ssstyle')
//             web.innerText = item.website

//             let company = document.createElement('div')
//             company.classList.add('ssstyle')
//             company.innerText = item.company.name

//             let phrase = document.createElement('div')
//             phrase.classList.add('ssstyle')
//             phrase.innerText = item.company.catchPhrase

//             let removeButton = document.createElement('button')
//             removeButton.innerText = 'REMOVE CARD'
//             removeButton.style.margin = '10px'
//             removeButton.addEventListener('click', removingCard)
//             removeButton.setAttribute('id', item.id)

//             let inputas = document.createElement('input')
//             inputas.addEventListener('input', changeValue)

//             // buttonas modalo pradzia
//             let model = document.createElement('button')
//             model.innerText = 'SHOW MODAL'
//             model.style.margin = '10px'
//             model.addEventListener('click', gettingModal)
//             cardFrame.appendChild(model)
//             // butttonas modalo pabaiga


//             cardFrame.appendChild(userName)
//             cardFrame.appendChild(userPhoto)
//             cardFrame.appendChild(userEmail)
//             cardFrame.appendChild(web)
//             cardFrame.appendChild(company)
//             cardFrame.appendChild(phrase)
//             cardFrame.appendChild(removeButton)
//             cardFrame.appendChild(inputas)
            

//             container.appendChild(cardFrame)

//         })

// }


// function filteringByAge() {
//     console.log(userData)
//     userData = userData.filter(item => item.randomAge > 30)
//     makingCards()
// }

// function filteringByLetters() {
//     console.log(userData)
//     userData = userData.filter(item => item.username.length < 10)
//     makingCards()
// }

// function webEndCom() {
//     console.log(userData)
//     userData = userData.filter(item => item.website.includes('.com'))
//     makingCards()  
// }

// function wordSuite() {
//     console.log(userData)
//     userData = userData.filter(item => item.address.suite.includes('Suite'))
//     makingCards()  
// }

// // make it to be possible to remove user by pressing remove button in card
// // make it to be possible edit user name in card (make input for it)
// // add button "Show All" in card to show all information when clicked -- it should open modal window with all user information
// // you should be able to close modal


// function removingCard(event) {
//     console.log(event)

//     userData = userData.filter(item => item.id != event.path[0].id)
//     console.log(event.path[0].id)
//     makingCards() 
// }

// function changeValue(event) {
//     console.log(event.path)
//     let inputValue = event.target.value
//     event.path[1].children[0].innerText = inputValue
// }

// function gettingModal(event) {
    
//     myModal.style.display = "block"
// }















// BLACKJACK PRADZIA


// create a black jack kind of a game with graphical interface (be creative)
// try to include animations, custom fonts. Make game look as actual casino online black jack
// GAME LOGICK
// player plays against computer
// beefore the game player can choose sum of money to bid
// when game begins pc and player each gets two cards
// player can ask dealer for more cards if his total points is less than 21
// after player makes moves, computer also gets his own cards (if needed)
// after pc and player makes moves results are compared
// the one whose score is bigger wins the price pot (money)
// it also can be draw if pc and player has same amount of points
// there is also posibility to loose when drawing cards if total sum of points is bigger than 21
// when game is over deck of cards are shuffled and prepared for new game

// use https://deckofcardsapi.com/ fot getting cards and shuffling the deck
// also add event log, which will show every move and stats








// const shuffleBtn = document.getElementById('shuffle')
// const getBtn = document.getElementById('get')
// const startGame = document.getElementById('startGame')

// const playerSide = document.getElementById('playerSide')
// const computerSide = document.getElementById('computerSide')

// const playerCard1 = document.getElementById('playerCard1')
// const playerCard2 = document.getElementById('playerCard2')
// const playerCard3 = document.getElementById('playerCard3')
// const playerCard4 = document.getElementById('playerCard4')

// const myScore = document.getElementById('myScore')

// const computerCard1 = document.getElementById('computerCard1')
// const computerCard2 = document.getElementById('computerCard2')
// const computerCard3 = document.getElementById('computerCard3')
// const computerCard4 = document.getElementById('computerCard4')



// shuffleBtn.addEventListener('click', getCardDeck)
// getBtn.addEventListener('click', gettingCards)
// startGame.addEventListener('click', startCards)


// let playerCards = []
// let compCards = []


// function getCardDeck() {
//     fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     .then(response => response.json())
//     .then(data => {
//         deckId = data.deck_id
//         console.log(data)
//         console.log(deckId)
//     })
// }

// function startCards() {
//     if (playerCards.length > 1 && playerCards.length < 4) {
//         fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             data.cards.map(item => {
//                 playerCards.push(item)
//             })
//             showPlayerCards()
//         }) 
//     }
// }


// let kazkoksTrigger = false
// function gettingCards() {
//     if (!kazkoksTrigger) {
//      // Player Cards
//     fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         data.cards.map(item => {
//             playerCards.push(item)
//         })
//         showPlayerCards()
//     })
//     // Computer Cards
//     fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//     .then(response => response.json())
//     .then(data => {
//         data.cards.map(item => {
//             compCards.push(item)
//         })
//         showCompCards()
//     })       
//     }
//     kazkoksTrigger = true
// }

// let playerPoints = 0 
// function showPlayerCards() {
//     playerSide.innerHTML = ""
//     playerPoints = 0
//     playerCards.map(item => {
//         let img = document.createElement('img')
//         img.classList.add('cardStyle')
//         img.src = item.image
//         playerSide.appendChild(img)

//         if (item.value === 'KING' || item.value === 'QUEEN' || item.value === 'JACK') {
//             item.value = 10
//         }
//         if (item.value === 'ACE') {
//             if (playerPoints > 10) {
//                 item.value = 1
//             } else {
//                 item.value = 11
//             }
//         }
//         playerPoints+= Number(item.value)
//         console.log(item.value)
//     })

//     updateMyScore()
// }
// function showCompCards() {
//     computerSide.innerHTML = ""
//     compCards.map(item => {
//         let img = document.createElement('img')
//         img.classList.add('cardStyle')
//         img.src = item.image
//         computerSide.appendChild(img)
//     })
//     updatePcScore()
// }


// function updateMyScore() {
//     let myScore = document.createElement('div')
//     myScore.classList.add('score')
//     myScore.innerText = `My score: ${playerPoints}`
//     playerSide.appendChild(myScore)
// }
// function updatePcScore() {
//     let pcScore = document.createElement('div')
//     pcScore.classList.add('score')
//     pcScore.innerText = "PC score: "
//     computerSide.appendChild(pcScore)
// }

// function countingPlayer() {
//   let playerPoints = 0  

// }

// blackjackas iki cia 



// LApkricio 16d

// EXAMPLE 
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json))


//   fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'neAs',
//     age: '3',
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))



// GET ALL USERS - GET REQUEST

// "http://167.99.138.67:3300/getallusers"// CREATE NEW USER - POST REQUEST
// // should include: name, age, email, photo, number
// "http://167.99.138.67:3300/createuser"// UPDATE USER - POST REQUEST
// // should include: name, age, email, photo, number, id
// "http://167.99.138.67:3300/updateuser"// DELETE USER - GET REQUEST
// // should be user id instead if :id
// "http://167.99.138.67:3300/delete/:id"



// const addUser = document.getElementById('addUser')
// const container = document.getElementById('container')

// const modalWindow = document.getElementById('modalWindow')

// const changeName = document.getElementById('changeName')
// const changeAge = document.getElementById('changeAge')
// const changeEmail = document.getElementById('changeEmail')
// const changePhoto = document.getElementById('changePhoto')
// const changeNumber = document.getElementById('changeNumber')
// const changeId = document.getElementById('changeId')

// const adding = document.getElementById('adding')

// addUser.addEventListener('click', openModal)
// adding.addEventListener('click', addNewUser)


// let userData = []

// gettingData()
// function gettingData() {

//     fetch(`http://167.99.138.67:3300/getallusers`)
//         .then(response => response.json())
//         .then(data => {
//             data.map(item => {
//                 userData = data

//             })
//             console.log(userData)
//             addingCards()
//         })

// }


// function addingCards() {
//     userData.map(item => {

//         let cardFrame = document.createElement('div')
//         cardFrame.classList.add('box')

//         let photo = document.createElement('img')
//         photo.classList.add('photoStyle')
//         photo.src = item.photo

//         let name = document.createElement('div')
//         name.innerText = item.name

//         let age = document.createElement('div')
//         age.innerText = `AGE ${item.age}`

//         let number = document.createElement('div')
//         number.innerText = `Item number ${item.number}`

//         let email = document.createElement('div')
//         email.innerText = `Email ${item.email}`

//         let id = document.createElement('div')
//         id.innerText = `ID: ${item._id}`

//         let updateUser = document.createElement('button')
//         updateUser.classList.add('updateUser')
//         updateUser.innerText = 'UPDATE USER'
//         updateUser.addEventListener('click', updatingCard)

//         let deleteUser = document.createElement('button')
//         deleteUser.classList.add('deleteUser')
//         deleteUser.innerText = 'DELETE'
//         deleteUser.addEventListener('click', deletingCard)

       
//         cardFrame.appendChild(photo)
//         cardFrame.appendChild(name)
//         cardFrame.appendChild(age)
//         cardFrame.appendChild(email)
//         cardFrame.appendChild(number)
//         cardFrame.appendChild(id)
//         cardFrame.appendChild(updateUser)
//         cardFrame.appendChild(deleteUser)

//         container.appendChild(cardFrame)
//     })
// }


// function openModal() {
//     modalWindow.style.display = 'block'
     
// }

// function addNewUser() {

//     let newUser = {
//         name: changeName.value,
//         age: changeAge.value,
//         email: changeEmail.value,
//         number: changeNumber.value,
//         photo : changePhoto.value,
        
//     }
    
// fetch('http://167.99.138.67:3300/createuser', {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json'
//   },
//   body: JSON.stringify(newUser),
// })
//   .then((response) => response.json())
//   .then((data) => {
//       console.log(data)
//       gettingData()
//   })

//   modalWindow.style.display = 'none'

// }

// function updatingCard() {

// }

// function deletingCard() {

// }
// pabaiga



console.log('labas dar karta')





