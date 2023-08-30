import sys
import json
from nltk.stem.isri import ISRIStemmer
from nltk.stem.arlstem import ARLSTem
from nltk.stem.arlstem2 import ARLSTem2

base_word = sys.argv[1]

ISRIStemmer = ISRIStemmer()
isri_stem = ISRIStemmer.stem(base_word)
isri_success = False
if len(isri_stem) == 3:
    isri_success = True

ARLSTem = ARLSTem()
arl_stem = ARLSTem.stem(base_word)
arl_success = False
if len(arl_stem) == 3:
    arl_success = True

ARLSTem2 = ARLSTem2()
arl2_stem = ARLSTem2.stem(base_word)
arl2_success = False
if len(arl2_stem) == 3:
    arl2_success = True

data = {
    "isri_stem": isri_stem,
    "isri_success": isri_success,
    "arl_stem": arl_stem,
    "arl_success": arl_success,
    "arl2_stem": arl2_stem,
    "arl2_success": arl2_success,
}

json_data = json.dumps(data, ensure_ascii=False)

print(json_data)
sys.stdout.flush()
