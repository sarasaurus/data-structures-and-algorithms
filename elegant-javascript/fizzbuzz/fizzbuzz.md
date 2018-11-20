# FizzBuzz
1. write a program that uses console.log to print all the numbers from 1-100 with two exceptions.
for numbers divisble by 3 print "Fizz" instead of the number, and for numbers divisble by 5 (and not 3) print "Buzz".

2. modify the program to print FizzBuzz for numbers divisible by both
#### Problem Domain

#### Algorithm
set iterator 'i' to increase by 1 until it equals the input integer
for each iteration check if i is divisible by 3 or 5
to add fizzbuzz, check first if number is divisible by both
console log each value

#### Visual

#### Big O
Time: O(n)
Space: O(1)

#### Pseudo Code
``` 
fizzBuzz(n)
//INPUT <-- n (non-neg integer)
//OUTPUT <-- string
for i <-- 0 to n do
  if i mod 3 AND i mod 5
      OUTPUT <-- "fizzbuzz"
  if i mod 3
      OUTPUT <-- "fizz"
  if i mod 5 
      OUTPUT <-- "buzz"
  else 
    OUTPUT <-- i
```

#### Code

#### Test
Happy path
Non-integer input
