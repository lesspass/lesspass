import csv
from tld import get_tld

tlds = {}
with open('top-1m.csv', newline='') as csvfile:
    lignes = csv.reader(csvfile)
    for ligne in lignes:
        tld = get_tld(ligne[1], fix_protocol=True)
        tlds[tld] = tlds.get(tld, 0) + 1

sorted_tlds = []
for w in sorted(tlds, key=tlds.get, reverse=True):
    if tlds[w] > 1 and "xn--" not in w:
        sorted_tlds.append(w)

print(sorted_tlds)