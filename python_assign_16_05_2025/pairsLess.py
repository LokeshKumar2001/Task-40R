"""
✅ 4. Find All Pairs Where First Number is Less Than Second (1 to 5)
Question:
Use nested for loops to print all number pairs from 1 to 5 where the first number is less than the second.

python-repl
Copy
Edit
Output:
(1,2)
(1,3)
...
(4,5)

"""
def pairsLess(a,b):
  for i in range(a,b+1):
    for j in range(a,b+1):
      if(i<j):
        print(f"({i},{j})")
    print()

pairsLess(1,5)