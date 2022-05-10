// String---------------------------->
let yourName:String = "Jayesh"
console.log(yourName)

// Number ------------------------------>
let num:Number = 22
console.log(num)

// Boolean------------------------------>
let isValid:Boolean = true
console.log(isValid)

// Array---------------------------->
let arr:(string|number|boolean)[] = []  // ---> define all datatypes
arr.push("anything")
arr.push(23)
console.log(arr)

let arr1:string[] = []  // ---> define specific datatype
arr1.push("onlyString")
console.log(arr1)

// Tuple---------------------------->
let tup:readonly [string, number, boolean] = ["skillf",20,true]
console.log(tup)

// Objects----------------------------->
let obj:Object = {
    type:"toyota",
    model:"Corolla",
    year:2009
}
console.log(obj)

let obj1:{want:boolean} = {want:false}
obj1.want = true
console.log(obj1)

// Special Data types-------------------------------->
// any, unknown, never, undefined, null
let globalVar:any = true
globalVar = "string"
console.log(globalVar)

let unnamedVar:unknown = 1
unnamedVar = 'string'
console.log(unnamedVar)

let unwantedVar:never;  // ---> It will throw an error when we assign any value

let notdefined:undefined; // ---> Same as never

let nothing:null; // ---> Same as never
