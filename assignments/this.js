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
const object1 = {
  name: 'sachin',
  object1.whatbinding(binding)
  {
  console.log(`${this.name} has done ${binding}`);
  }
}
object1.whatbinding('implicit')

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
