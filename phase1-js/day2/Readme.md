## Day 2
## Use three lines of code to get the map, filter and reduce 
## print the customers name with capital letters

## Mistakes and their solutions
1. The Nan mistake
    .map(u = u.balance)
    .reduce ((total, balance) => total + u.balance, 0)

    the balance is already a number here so u.balace is undefined 

    it should be written as 
     .map(u = balance)
    .reduce ((total, balance) => total + balance, 0)

2. missing two works mistake 
    i removed map for balance becasue i wanted to print name in uppercase and everythig broke 
below is the wrong code {
    .filter(u => u.active)
    .map(u => u.name.toUpperCase())
    .reduce ((total, balance)  =>total + balance, 0)

}
    this is the correct one {
    const activeUsers = users.filter(u => u.active)
    const upperNames = activeUsers.map(u => u.name.toUpperCase())
    const totalActiveUsers = activeUsers.reduce((total, u) => total + u.balance, 0)

    }

3. the active users only
    My reduce was only caculating active users instead of all users 
why because of filter the filter was only outputing the active users so the reduce caulated only the active users, in order to solve it i have to comment the filter if i want it to print all the users

    