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

### Git changes
- Changing name and origin : https://stackoverflow.com/questions/5751585/how-do-i-rename-a-repository-on-github
- Bitbucket(other CVS if working) commit local to new repo on web
    - create new repo on web -> repo url
    - check remote urls: `git remote -v` -> no output
    - connect remote repo: `git remote add origin repo_url` -> output with 2 origins[`fetch`, `push`]
    - check status: `git status`
    - `git pull origin master` -> fails[reject] if commit present in local repo -> if: `fatal: refusing to merge unrelated histories`
    - `git pull origin master --allow-unrelated-histories` -> success -> merges web `master` into local
    - push local repo to web: `git push origin master`