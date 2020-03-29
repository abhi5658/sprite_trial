if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const stripe_secret_key = process.env.STRIPE_SECRET_KEY
const stripe_public_key = process.env.STRIPE_PUBLIC_KEY

// console.log(stripe_public_key)

const express = require('express')
const app = express()

const fs = require('fs')
const stripe = require('stripe')(stripe_secret_key)

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))

app.get('/store', function(req, res)  {
    fs.readFile('items.json', function(error, data){
        if(error){
            res.sendStatus(500).end()
        } else {
            res.render('store.ejs',{
                stripePublicKey : stripe_public_key,
                items : JSON.parse(data)
            })
        }
    })
})

app.post('/purchase', function(req, res) {
    fs.readFile('items.json', function(error, data){
        if(error){
            console.log('reading items json failed')
            res.sendStatus(500).end()
        } else {
            const itemsJson = JSON.parse(data)
            const itemsArray = itemsJson.music.concat(itemsJson.merch)
            let total = 0
            // console.log(req.body.items)
            req.body.items.forEach(function(item){
                const itemJson = itemsArray.find(function(i) {
                    return i.id == item.id
                })
                total = total + itemJson.price * item.quantity
            })

            stripe.charges.create({
                amount: total,
                source : req.body.stripeTokenId,
                currency : 'inr'
            }).then(function() {
                console.log('Charge successful: ',(total/100))
                res.json({message : `Successfully paid ${total/100} for purchased items!`})
            })
            .catch(function(error) { 
                console.log('charging failed: ')
                res.sendStatus(500).end()
            })
        }
    })
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))