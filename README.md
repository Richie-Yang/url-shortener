# URL Shortener

The small tool which can help you to shorten your original URL. With this tool, every time you're sharing link to your best friends, the whole chat box will never ever be occupied by your damn long URL strings. You can [try my demo on Heroku](https://github.com/Richie-Yang) before jump to the rest of my README.
<p align="center">
  <img src="https://github.com/Richie-Yang/url-shortener/blob/main/public/img/a8-url-shortener.gif">
</p>


## Features
1. User can convert longer URL strings to the shorter one.
2. User can click button to do clipboard copy.
3. User can go to original URL by shortened URL redirection.


## Prerequisites
1. Node.js (v14.16.0 is recommended)
3. GitBash or CMder (for Windows) / terminal (for MacOS)


## Installation
1. Open your terminal, then clone the repo to your local.
```
git clone https://github.com/Richie-Yang/url-shortener.git
```
2. Move to repo directory.
```
cd url-shortener
```
3. Run the command below to start installing dependencies.
```
npm install
```


## Execution
1. Run below script to add seed data.
```
npm run seed
```
2. Start Express server in Node.js env.
```
npm run start
```
or

3. Start Express server in dev mode, which uses nodemon to start server.
```
npm run dev
```
PS: If you don't have nodemon installed, please check [Nodemon](https://www.npmjs.com/package/nodemon) first.


## All Branches
* none


## Other Screenshots
### index.hbs view
![Index Page](https://github.com/Richie-Yang/url-shortener/blob/main/public/img/a8-url-shortener-index.jpg)
### result.hbs view
![Result Page](https://github.com/Richie-Yang/url-shortener/blob/main/public/img/a8-url-shortener-result.jpg)


## development tools
- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 5.3.4
- MongoDB
- mongoose 6.0.12


## Contributor
[Richie](https://github.com/Richie-Yang)
