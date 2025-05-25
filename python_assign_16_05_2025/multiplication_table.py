"""
✅ 2. Print the Multiplication Table from 1 to 5
Question:
Use nested for loops to print the multiplication table from 1 to 5.

python-repl
Copy
Edit
Output:
1 x 1 = 1
1 x 2 = 2
...
5 x 5 = 25

"""
def multiplication(a,b):
  for i in range(a,b+1):
    for j in range(a,11):
      print(f"{i} * {j} = {i*j}")
    print()
multiplication(1,5)