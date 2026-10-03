# GoSpeed: Railway par deploy (video wali tarteeb)

Is folder mein 5 cheezein hain, bilkul video wale repo ki tarah:
`public` (folder), `Dockerfile`, `README.md`, `package.json`, `server.js`

## Part 1: GitHub par upload
1. github.com par login karein, **New repository** dabayen. Naam `gospeed`, **Public**, phir **Create repository**.
2. **uploading an existing file** (ya **Add file → Upload files**) par jayen.
3. Yeh paanchon cheezein drag karein (`public` folder samet) aur **Commit changes** dabayen.

## Part 2: Railway par login
1. railway.com kholein, **Deploy** ya **Login** dabayen, phir **Continue with GitHub**.
2. Dashboard mein **+ New** dabayen aur **GitHub Repository** chunen.
3. "Review and accept our terms" aaye to Privacy and Data Policy aur Fair Use Policy accept karein (**I agree to the Fair Use Policy**).

## Part 3: GitHub repo connect karein
1. Agar "No repositories found" likha aaye to **Configure GitHub App** dabayen.
2. GitHub ka page khulega: apna account chunen, **All repositories** (ya **Only select repositories** mein `gospeed`) chunen, phir **Install & Authorize**.
3. Railway par wapas aa kar **Refresh** dabayen. `apka-naam/gospeed` nazar aayega, usay dabayen.

## Part 4: Deploy hone ka intezar
1. Service `gospeed` khulegi. **Deployments** tab mein pehle **Building** hoga.
2. Jab **ACTIVE** aur **Deployment successful** likha aa jaye to deploy mukammal hai.

## Part 5: Link banayen
1. **Settings** tab kholein aur neechay **Networking** tak scroll karein.
2. **Public Networking** mein **Generate Domain** dabayen. Agar port poochay to `8080`.
3. Jo `xxxx.up.railway.app` link bane, usay kholein. Yeh aap ki GoSpeed website hai.

## Check
Agar stats mein **Upload** card nazar aaye to server chal raha hai (asli ping, download aur upload test).

## Dhyan dein
Har test mein tez internet par kai sau MB data server se guzarta hai. Zyada log istemal karein to Railway ka free credit jaldi khatam ho sakta hai.
