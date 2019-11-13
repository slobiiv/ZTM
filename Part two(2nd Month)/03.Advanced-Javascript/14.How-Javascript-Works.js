// https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/9427570#questions

/* 1. What is a Program? 
    It has to ALLOCATE memory otherwise we wouldn't be able to have variables or even have a file on our computer.
    It also has to PARSE and EXECUTE scripts which means read and run commands.
*/
/* 2. JavaScript Engine consists of two parts: Memoru Heap and Call Stack
    - The Memory Heap, this is where the memory allocation happens
        allocating memory is simple as 'const a = 1;'
    - Call Stack is where your code is read and excecuted. It tells you where you are in the program.

      Memory leaks happen when you have unused memory such as let's say we're not using the variable but it's still there. Global variables are bad because if we don't forget to clean up after ourselves we fill up this memory heap and eventually the browser will not be able to work.
*/