// using Map, filter and reduce

const users = [
    { name: "Emmanuel", active: true, balance: 2000},
    { name: "Sarah", active: false, balance: 1000},
    { name: "David", active: true, balance: 3000},
]

// 1 all balances
    const getTotalBalance = users.map(u => u.balance)
    console.log(getTotalBalance);


// 2. active users
    const getNames = users.filter (u => u.active)
        console.log(getNames);
    
// 3. total balances
    const totalBalances = users.reduce ((total, u)  =>total + u.balance, 0)
    console.log(totalBalances);

// 4. non active users 
    const nonActiveUsers = users.filter (u => u.active === false)
        console.log(nonActiveUsers);

