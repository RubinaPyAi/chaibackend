require('dotenv').config()
console.log("chai aur code");
const express = require('express')
const app = express()
const port = 3000
const githubdata= {
  "login": "RubinaPyAi",
  "id": 201681509,
  "node_id": "U_kgDODAVqZQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/201681509?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/RubinaPyAi",
  "html_url": "https://github.com/RubinaPyAi",
  "followers_url": "https://api.github.com/users/RubinaPyAi/followers",
  "following_url": "https://api.github.com/users/RubinaPyAi/following{/other_user}",
  "gists_url": "https://api.github.com/users/RubinaPyAi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/RubinaPyAi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/RubinaPyAi/subscriptions",
  "organizations_url": "https://api.github.com/users/RubinaPyAi/orgs",
  "repos_url": "https://api.github.com/users/RubinaPyAi/repos",
  "events_url": "https://api.github.com/users/RubinaPyAi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/RubinaPyAi/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-03-04T02:48:24Z",
  "updated_at": "2025-09-24T12:19:26Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send("This is twitter page")      
})
app.get('/login',(req,res)=>{
  res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
  res.send("<h2>chai aur code</h2>")
})
app.get('githubdata',(req,res)=>{
  res.json(githubdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
