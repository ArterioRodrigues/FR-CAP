import sys
import pandas as pd
import numpy as np

#answers = [sys.argv[1],sys.argv[2],sys.argv[3]]
answers = ['Beginner ','adsf','Strength ']
    
df = pd.read_csv('exercises.csv')

for index, row in df.iterrows():
    if(row['Exercise Category'] != answers[2] and row['Difficulty'] != answers[0]):
        df = df.drop(index)    

print(df)
    
