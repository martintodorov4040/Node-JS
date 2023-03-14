const eventEmit = require(`events`)

class registrationEvent extends eventEmit{}

const registrationEventOne =  new registrationEvent()

registrationEventOne.on(`studentRegistered`, (student)=>{
    console.log(`Hello ${student}, thank you for registration`)
})


registrationEventOne.on(`studentRegistered`, (student, work)=>{
    console.log(`Hi ${student}, you are new ${work}`)
})


const student = `Martin Todorov`;
const work = `Junior Developer`
registrationEventOne.emit(`studentRegistered`, student, work)
