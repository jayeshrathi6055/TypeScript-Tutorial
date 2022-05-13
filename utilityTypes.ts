// Use of Partial----------------------------->
interface Point{
    x:number,
    y:number
}
// Values are optional
let pointPart:Partial<Point> = {}
pointPart.x = 20
console.log(pointPart)

// Use of required----------------------------->
interface Car{
    make:string,
    model:string,
    mileage:number
}
// you must fill all the values
let myCar:Required<Car> = {
    make:'Ford',
    model:'Focus',
    mileage:12000
}

// Use of Record-------------------------------------->It is used to defining an object type with a specific key type and value type
let nameAgeMap:Record<string,number> = {
    'alice':21,
    'bob':25
}

// Use of Omit------------------------------------------>It removes key from an object type
interface Person{
    name:string,
    age:number,
    location:string
}
let bob:Omit<Person, 'age'|'location'> = {
    name:'Bob',
}

// Use of Pick------------------------------------------>It removes all but the specified keys from an object type
let alice:Pick<Person,'name'> = {
    name:'Alice'
}

// Use of Exclude---------------------------------->It removes types from a union
type Primitive = string|number|boolean
let value:Exclude<Primitive,string> = true

// Use of Return Type-----------------------------> It extracts the return type of a function type
type PointGenerator = () => { x: number; y: number; };
let point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

// Use of Parameters--------------------------------> It extracts the parameter types of a function type as an array
type PointPrinter = (p: { x: number; y: number; }) => void;
let point1: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};
