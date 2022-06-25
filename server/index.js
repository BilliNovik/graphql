import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema/schema.js'

const app = express()
const PORT = 5000

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

mongoose.connect(process.env.MONGOOSE_DB, { dbName: 'graph' })
    .then(() => app.listen(PORT, err => {
        err ? console.log(err) : console.log(`start on ${PORT}`)
    }))
