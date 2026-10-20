// using Map, filter and reduce write the code in  a very line

const users = [
    { name: "Emmanuel", active: true, balance: 2000},
    { name: "Sarah", active: false, balance: 1000},
    { name: "David", active: true, balance: 3000},
]
    const activeUsers = users.filter(u => u.active)
    const upperNames = activeUsers.map(u => u.name.toUpperCase())
    const totalActiveUsers = activeUsers.reduce((total, u) => total + u.balance, 0)

    console.log(upperNames)
    console.log(totalActiveUsers)

