const express = require('express')
const Stripe = require('stripe')
const bodyParser = require('body-parser')
const config = require('./lib/config')

if (!config.stripe.secretKey) {
    throw new Error('Stripe secret key required')
}

const app = express()
const stripe = Stripe(config.stripe.secretKey)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get('/stripe-key', (req, res) => {
    // gotta be a better way to do this...
    // or just server side render js?
    res.json({
        key: config.stripe.publicKey
    })
})

app.post('/charge', (req, res) => {
    if (!req.body.amount) {
        return res.status(400).send({
            error: 'Amount Required'
        })
    }

    stripe.customers.create({
            email: req.body.token.email,
            card: req.body.token.id
        })
        .then(customer =>
            // save customer to db here if we want
            stripe.charges.create({
                amount: req.body.amount,
                description: 'Donation to freecodecamp.org',
                receipt_email: customer.email,
                currency: 'usd',
                customer: customer.id,
                metadata: {
                    donation: true,
                    source: 'freecodecamp.org'
                }
            }))
        .then(charge => res.send(charge))
        .catch(err => {
            console.error('Stripe Processing Error:', err)
            if (err.type === 'StripeCardError') {
                return res.status(402).send({
                    error: err.message
                })
            }
            // I think any other errors would be our fault?
            res.status(500).send({
                error: 'Donation Failed'
            })
        })
})

app.listen(config.port, () => {
    console.log(`app started on http://127.0.0.1:${config.port}`)
})
