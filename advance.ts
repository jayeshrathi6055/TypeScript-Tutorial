// Use of enums----------------------------------->It is defined common values
enum Directions{
    North, // Default value is 0
    West, // Default value is 1
    East, // Default value is 2
    South // Default value is 3
}
let currentDirection = Directions.West
console.log(currentDirection,Directions.South)
currentDirection = 20  // you can assign
// currentDirection = "string"  // you cannot assign
console.log(currentDirection)

enum StatusCode{
    notFound = 404,
    Success = 200,
    Accepted = 202,
    badRequest = 400
}
console.log(StatusCode.notFound, StatusCode.badRequest)


// Use of alliases and interface--------------------------->
// Example of alliases
type carNum = number
type carName = string

let age:carNum = 23
let fullName:carName = "skillf"
console.log(age,fullName)

// Example of interface - It is defined common behaviour
interface Rectangle{
    height:number,
    width:number
}
let rec:Rectangle = {
    height:10,
    width:20
}
console.log(rec)

// Use of union(symbol |)---------------------------->
let numerical:number|boolean = 20
console.log(numerical)
numerical = true
console.log(numerical)

// Casting of datatypes----------------------------->
let x:unknown = "hello"
console.log((x as string).length,x)  // ---> using 'as'
console.log((<string>x).length,x)    // ---> using '<>'