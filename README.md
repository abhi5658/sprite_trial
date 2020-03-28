## Stripe basic

### Steps
- `npm init -y`
- `npm install express ejs stripe --save`
- `npm install dotenv --save-dev`
- `npm i nodemon --save-dev`
- create `server.js`
- create `items.json`
- create `.env` for storing public/private stripe keys
- clone basic store website `https://github.com/WebDevSimplified/Introduction-to-Web-Development.git` and take out unecessary files/folders
- duplicate `store.html` to `store.ejs`
- express use serve static files
- create `/store` endpoint to serve `store.ejs`
- call checkout script in store page
- add js code in page to get total items and quantity
- add stripeHandler to launch payment details screen
- collect token and fetch `/purchase` endpoint and use express json()
- initialise stripe with secret private key
- create `/purchase` endpoint
- add stripe charge code to use token to create charge