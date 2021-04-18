# view-ui-project

This project is build for Vue.js 2 + vue-router + webpack2 + View UI (iView) 4, just install and run.

如果跑npm run dev有遇到問題可以修改 webpack.dev.config.js內的程式碼為

```
fs.write(fd, buf, 0, "utf-8", function (err, written, buffer) {});
```

就可以順利執行瞜

## Install
```bush
// install dependencies
npm install
```
## Run
### Development
```bush
// For the first time, run init to create index.html
npm run init
npm run dev
```
### Production(Build)
```bush
npm run build
```

