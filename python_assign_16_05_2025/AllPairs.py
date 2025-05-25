"""
✅ 1. Print All Pairs from 1 to 3
Question:
Use nested for loops to print all pairs of numbers from 1 to 3.

makefile
Copy
Edit
Output:
(1,1)
(1,2)
(1,3)
(2,1)
(2,2)
(2,3)
(3,1)
(3,2)
(3,3)

"""
def allPairs(i,j) :
  for p in range(i,j+1,1):
    for q in range(i,j+1,1):
      print(f"({p},{q})")
allPairs(1,3)
