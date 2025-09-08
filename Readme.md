1) What is the difference between var, let, and const?

        #Answer: Some key difference between var , let and const are:
                (1) var is accessible before it is declared (initialized as undefined), but let and const cannot be accessed 
                    before declaration (they are in a "Temporal Dead Zone").
                (2) var is function-scoped, while let and const are block-scoped ({}).
                (3) var can be reassigned and redeclared, but let can only be reassigned,
                     and const can neither be reassigned nor redeclared.

2) What is the difference between map(), forEach(), and filter()? 
        #Answer: All of them are used to run a function for each element of an array, but there are some differences between them.
                (1) forEach doesn't return anything, where map returns a new array.
                (2) map and forEach run the function for every element of the array, but filter only runs the function for elements that satisfy a condition and returns a new array with those elements.

3) What are arrow functions in ES6?
        #Answer: Arrow functions are a shorter syntax for writing functions in ES6 using the => syntax.
              It makes the code shorter and easier especially while looping through an array.
              an example : const add = (a, b) => a + b;
              which is almost a 3 line code if you want write it using traditional method


4) How does destructuring assignment work in ES6?
        #Answer: destructuring assignment lets you extract values from arrays or objects and assign them to variables in a simple way.
        for example :
            const {name, age} = {name: "Alif", age: 22};
            Here in the left side name and age are two variable .in the right side name and age are key of the object.
            using destructuring the value of name key assign to the name variable, same for age.

5) Explain template literals in ES6. How are they different from string concatenation?
        #Answer: String defined using `backtick` is known as template literals. They can contain multiline strings and 
             also allow you to easily embed variables or expressions using ${} syntax, which is cleaner 
             than string concatenation using the + operator.