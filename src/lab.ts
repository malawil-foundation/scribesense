import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'malawilfoudation+dev@gmail.com',
        firstName: 'Alvin',
        lastName: 'Herbert',
    }
})
console.log('done')