"""
✅ 3. Count How Many Times Numbers Are Added
Question:
Write a program that uses nested for loops to add numbers from 1 to 3, three times each, and count how many total additions happen.

yaml
Copy
Edit
Output:
Total additions done: 9
"""

def numbersAdded(a,b):
  total_sum_count = 0
  for i in range(a,b+1):
    sum=0
    count=0
    for j in range(a,b+1):
      sum += j
      count+=1
    total_sum_count += count
  return total_sum_count
tot = numbersAdded(1,3)
print(tot)