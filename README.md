## 🎯 Interview Questions - Blog Task

1. What are some differences between interfaces and types in TypeScript?
   ---->
   In typeScript, both interfaces and types are used to define the shape of data - like how an object should look. At first, they may seem the same, but there are some key differences between them. Let's break it down below-

1.✅ Extending or inheriting
---> Interfaces can be extended using extend keyword.
---> Types use & to combine with other types.
So both can be reused, but they do it in different ways.

2.✅ Feature Support
---> Interfaces mainly used to describe shapes and class structures.
---> Types can represent more things like (&, |, and primitives), and more complex compositions.

3.✅ Adding more later
---> In interfaces we can add more after declaring it one place
---> But in types we can not do that. Once it's declared it's done.

4.✅ Organizing Code
---> Interface allowed merging and is good for splitting into multiple files.
---> In types we can't split or extend it later. Type must stay in one definition.

5.✅ Compiler behavior
---> Typescript sometimes compiles interfaces faster than types especially in big projects.
---> This isn't usually a big deal unless your codebase ois very large.

---

2. What is the use of the `keyof` keyword in TypeScript? Provide an example.

The keyof keyword in typeScript has many helpful uses w3hen working with objects. Below are given some way---

1. We can use keyof to make sure a function only accepts valid property names of an object, preventing mistakes.
2. By using keyof, our code editor can give us better autocomplete suggestion, making development smoother.
3. keyof allows us to get all the property names of an object type, which we can use elsewhere in our code.
4. By combining keyof with the read-only utility type, we can easily create read-only version of an object, preventing accidental modifications.
5. When we want to map object keys to corresponding values, keyof helps keep the mapping type-safe and error-free.

Below is given one example:

type Car={
make:string;
model:string;
year:number;
}
type Carkeys = keyof Car;
let key: Carkeys="make"; ✅valid
key="model"; ✅valid
key="color" ❌Error: "Color is not a key of Car"

---> keyof helps you to get those list of valid property names from an object and makes sure you only use those names, keeping your safe.
