
"""
✅ 5. Sum of All Pairs (1 to 3)
Question:
Use nested for loops to find the sum of all possible pairs of numbers from 1 to 3 and print each pair with its sum.

python-repl
Copy
Edit
Output:
1 + 1 = 2
1 + 2 = 3
1 + 3 = 4
...
3 + 3 = 6
"""
def pairSum(a,b):
  for i in range(a,b+1):
    for j in range(a,b+1):
      print(f"{i} + {j} = {i+j}")
  print()
pairSum(1,5)