# wechat-pro
🍁🌱🌿wechat app gulp 


## 简介
- 配置 在ide中使用css，html，js等，在微信开发工具中预览，这样就能使用自己习惯的IDE，不用再微信开发工具中开发。
- 遍历src中的文件，监听变化，替换成微信小程序能识别的wxss，
- 基于babel，gulp
- 微信开发工具支持es6开发，所以就没用babel转换,转换后很容易超过1M的限制。
- compass的支持，提供scss转化wxss

## 使用
```
sudo npm install -g gulp
npm install
gulp
```
 
使用微信开发者工具，将资源目录指向目录下的dist

