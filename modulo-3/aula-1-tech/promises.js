let promessa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('A promessa foi concluida!')
    }, 2000)
})
console.log(promessa1)

// ----------------------------------

let promessa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('A promessa foi rejeitada!')
    }, 2000)
})

promessa2.then(r => console.log(r)).catch(error => {
    console.log(error)
})


// promessa1

promessa1.then(r => console.log(r)).catch(error => {
    console.log(error)
})