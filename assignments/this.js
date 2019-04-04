/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - this will call the window of the browser because the binding of this is Global
* 2. Implicit - this will call the object to the left of the "." where the function is called
* 3. New - its used for constructors. This will call the object being created by the constructor when it is called
* 4. Explicit - Its used to specify to this what exactly to call
*
* write out a code example of each explanation above
*/

// Principle 1
function globalisation(){
console.log(this)
}
globalisation();

// code example for Window Binding

// Principle 2

// code example for Implicit Binding
const obj1 = {
  name:"Sachin" ,
  englishpremier: function()
  {
    console.log (`${this.name} love the english premier league`)
  }
}
obj1.englishpremier()

// Principle 3

// code example for New Binding
function CreateHuman(humanone){
  this.name = humanone.name
  this.gender = humanone.gender
  this.garden = humanone.garden
}
CreateHuman.prototype.hello = function() {
  return(`${this.name} from ${this.garden} says hello`)
}

const human = new CreateHuman(
  {name: 'Adam',
  gender: 'M',
  garden: 'Eden'}
)
console.log(human.hello())
// Principle 4

// code example for Explicit Binding
function Inventhuman(attributes){
  this.namej = attributes.namej
  this.genderj = attributes.genderj
  this.gardenj = attributes.gardenj
}

function Married(name1, name2)
{
  Inventhuman.apply(this,name1)
  this.name2 = name2
}
Married.prototype = Object.create(Inventhuman.prototype)
Married.prototype.whosmarried = function()
{`${this.name} is from ${this.garden} and is married to ${this.name2}`}

const marriage = new Married ({namej:'Adam',genderj:'M', gardenj:'Eden'}, 'Eve')
console.log(marriage.whosmarried())
