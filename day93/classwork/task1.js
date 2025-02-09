//var
//var is function-scoped meaning it's accessible throughout the function in which it is declared
//It can be re-declared and updated
//It is moved to the top of the scope during execution but remains undefined until assigned

//let
// let is block-scoped meaning it is accessible only within the {} block in which it is declared
// It can be update but cannot be re-declared in the same scope
// It is also hoisted but in the Temporal Dead Zone  so it cannot be used before declaration

// const
// const is also block-scoped, like let.
// It cannot be updated or re-declared.
// Must be initialized at the time of declaration.
// If a const variable is an object or array, its contents can be modified, but the reference itself cannot change.

