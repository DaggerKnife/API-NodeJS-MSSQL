tabla='COSA'
col=['COSA','COSA2'

]

print("********************************")
print(f'//Clase {tabla}')
print(f'class {tabla}' +"{")
print('constructor(')
for i in col:
    print(f' {i} ,')      
print(') {')
for i in col:
    print(f' this.{i} ,')    
print('}\n}')      
print(f'module.exports = {tabla};')
print("********************************")
