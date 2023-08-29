import sys
from nltk.stem.isri import *


stemmer = ISRIStemmer()
message = sys.argv[1]
message = stemmer.stem(message)
if len(message) == 3:
    letters = [*message]
    for letter in letters:
        print(letter)
else:
    print("Please double check that you entered a valid Arabic Word")
sys.stdout.flush()
