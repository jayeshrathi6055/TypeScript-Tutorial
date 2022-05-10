// the 'number' here specifies that this function returns a number
const getTime = ():number=>{return new Date().getTime()}

// 'void' implies that the function doesn't return any value
const printHello = ():void=>{console.log("Hello sir")}

// define which type of parameters required
const multiply = (a:number, b:number)=>a*b

// ? represents as an optional parameter
const add = (a:number, b:number, c?:number)=>a+b+(c||0)

// default parameter
const pow = (value:number, exponent:number = 10)=>value**exponent

// rest parameter can be typed like noremal parameter
const addition = (a:number, b:number, ...rest:number[])=>a+b+rest.reduce((p,c)=>p+c,0)

console.log(getTime(), printHello(), multiply(2,3), add(5,6), add(1,2,3), pow(5), pow(5,2), addition(6,4,10,20,30))