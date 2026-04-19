let name = "Nitai"  // Can be changed later ✅
const age = 20
let isStudent = true // Function scope, Can cause bugs

// const age = 30 Cannot be changed ❌


console.log(name, age, isStudent)

console.table([name, age, isStudent])

/* 
| Feature   | let   | const | var      |
| --------- | ----- | ----- | -------- |
| Reassign  | ✅     | ❌     | ✅        |
| Scope     | Block | Block | Function |
| Use today | ✅     | ✅     | ❌        |
*/