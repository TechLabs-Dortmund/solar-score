import module_test as mt

arg = 42
double_arg = mt.func(arg)
print(f"Evaluating func({arg}) from different file:", double_arg)



from data import URL as url
# import data.URL as url

print(url.KAGGLE_HOME)