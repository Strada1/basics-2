const list = [
    { name: 'create a post', status: 'In progress', priority: 'low' },
    { name: 'test', status: 'Done', priority: 'high' },
];

const changeStatus = (arr, name, status) => {
    return arr.reduce((acc, obj) => {
        if (obj.name === name) {
            return [...acc, { name, status, priority: obj.priority }]
        }
        return [...acc, obj]
    }, [])
}

const addTask = (arr, name, status, priority) => {
    return [...arr, {
        name,
        status,
        priority,
    }
    ]
}

const deleteTask = (arr, name) => {
    return arr.filter((obj) => obj.name !== name)
}

const showList = (arr) => { 
    const newArr = arr.reduce((acc, obj) => {
        const key = obj.status
        if (!Object.hasOwn(acc, key)) {
            if (obj.name === undefined) {
                return {...acc, [key]: ['-']}
            }
            return {...acc, [key]: [[`"${obj.name}", priority ${obj.priority}`]]}
        }                   
        acc[key].push([`"${obj.name}", priority ${obj.priority}`])
        return acc
    }, {}) 
 
    const lines = Object.entries(newArr)
        .reduce((acc, [key, val]) => {                  
            return acc + `${key}:\n\t${val.join('\n\t')}` + '\n'     
        }, '')
    return lines
}

const list2 = addTask(list, 'Study', 'Done', 'high')
const list3 = addTask(list2, undefined, 'To Do', undefined)

console.log(showList(list3))
console.log('------------------------------------------------')
console.log(showList(list))

