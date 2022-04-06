# 测试 
## 浏览器支持
### 测试环境 macOS Monterey （12.2.1）系统 Chrome （100.0.4896.75）浏览器

1. 可以录音，外部音和电脑的声音都可以录入
1. mac 测试下来 视频是可以录长视频的（我测试录制了50分钟的视频）
1. 文件大小： 
- 50分钟 1920 * 1200 视频 1.34G
- 50分钟 3840 * 2400 视频 5.77G
1. Chrome 支持格式都是 webm，Safari 支持格式 mp4
#### 结果图 
##### 文件大小 
![](https://cdn.nlark.com/yuque/0/2022/png/537584/1649223001895-8ee9f443-67c1-4218-b2dd-bdc9ce8e8ab3.png#clientId=u7f7bf186-ec8d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u59b89783&margin=%5Bobject%20Object%5D&originHeight=164&originWidth=1162&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ud8f958bd-bbfc-4b4f-b60a-4d6cb20f785&title=)
##### 效果对比 
1920 * 1200 
![](https://cdn.nlark.com/yuque/0/2022/png/537584/1649223001913-31f96e0a-fc2c-49b0-a8be-5a637c94a918.png#clientId=u7f7bf186-ec8d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=udab4224d&margin=%5Bobject%20Object%5D&originHeight=1164&originWidth=2326&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uacc96e11-83d6-4017-9049-68cfeeb1d16&title=)
3840 * 2400
![](https://cdn.nlark.com/yuque/0/2022/png/537584/1649223001905-c25ac74d-0038-4e6d-a71c-a3a8ab2921b0.png#clientId=u7f7bf186-ec8d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u70223b59&margin=%5Bobject%20Object%5D&originHeight=1242&originWidth=2330&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u928bf6e6-657c-4cf7-a349-11c0c4baf35&title=)
## 存在问题 
#### windows 系统未测试 

- 目前只测试了 mac 的 Chrome 没有测试 windows 系统。
#### 麦克风二次收音 

- 描述：因为录制过程中会录制麦克风 + 浏览器。如果麦克风与公放音距离过近，会被二次收音。 
- 解决：测试使用 mac 公放录制会有轻微的杂音，佩戴耳机进行录制会更好。 
#### 录制中断问题 

- 描述：如果视频没有录制好，刷新浏览器或直接关闭。视频保存问题。 
- 解决： 
   1. 可以录制时提示用户录制，通知用户责任。	 
   1. 每录制固定时长后转换 Babel 传给服务器保存。 
## WebM 视频支持
### 参考 
维基百科 ：https://zh.wikipedia.org/wiki/WebM 

- Firefox 支持
- Chrome 支持
- Edge 支持
- Internet Explorer 9 需要安装 VP8编解码器
- Safari macOS Big Sur 11.3 版本增加支持 [macOS Big Sur 更新中新增的功能](https://support.apple.com/zh-cn/HT211896)
### 自测 

- Firefox 支持
- Chrome 支持
- Safari 实测 macOS Monterey 12.2.1 不支持
# 关键代码 & API 
## 使用API
### 获取权限

- [MediaDevices.getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia) 获取浏览器屏幕许可
- [MediaDevices.getDisplayMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getDisplayMedia) 获取用户 麦克风，摄像头许可
### 合并音轨

- [AudioContext](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext) 创造一个音频处理环境
- [createMediaStreamDestination](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext/createMediaStreamDestination)使音频流可以存储在本地文件
- [context.createGain](https://developer.mozilla.org/en-US/docs/Web/API/GainNode/gain) 调整音频 Gain
### 创建录制器

- [MediaRecorder()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaRecorder/MediaRecorder) 进行媒体轻松录制的接口
## 参考

- [基于webrtc的前端录屏与直播_唐霜的博客](https://www.tangshuang.net/8002.html)
- [webrtc1.0手册](https://www.w3.org/TR/webrtc/)
- [如何实现前端录音功能](https://zhuanlan.zhihu.com/p/43710364)
- [WebRTC中合并多路音频源](https://soo-q6.github.io/blog/2020-03-29-audiotracks/)
