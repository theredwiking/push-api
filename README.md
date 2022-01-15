# Push api
## Getting started
```bash
git clone https://github.com/theredwiking/push-api.git
cd push-api
npm i -S
cp .env.example .env
```

.env is where you will specific what port it runs on and set yopur access token for pushbullet.

After having set the options start the server
```bash
npm start
```
Now go to http://localhost:port and remenber to change port to what you specifed in .env


In development there are som extra steps
```bash
npm i --save-dev
npm test
```
This makes use of nodemon to autorelaod when a file is changed and saved

## Documentation
Documentations of existen endpoint can be found here: http://localhost:port/api-docs