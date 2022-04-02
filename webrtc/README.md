# 利用 rtc 录制屏幕成视频
## 文档
- [webrtc1.0手册](https://www.w3.org/TR/webrtc/)
## 兼容
- 仅测试 谷歌浏览器
## 使用API
### 获取权限
- [MediaDevices.getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia) 获取浏览器屏幕许可
- [MediaDevices.getDisplayMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getDisplayMedia) 获取用户 麦克风，摄像头许可
### 合并音轨
- [AudioContext](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext) 创造一个音频处理环境
- [createMediaStreamDestination](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext/createMediaStreamDestination)使音频流可以存储在本地文件
- [context.createGain](https://developer.mozilla.org/en-US/docs/Web/API/GainNode/gain) 调整音频 Gain 
### 创建录制器
- `MediaRecorder()` 进行媒体轻松录制的接口


## WebM 视频支持
- Firefox 
- Chrome
- Edge
- Internet Explorer 9 需要安装 VP8编解码器
- Safari 看文档 macOS Big Sur 11.3 支持 ， 实测 macOS Monterey 12.2.1 不支持

## 参考
- [如何实现前端录音功能](https://zhuanlan.zhihu.com/p/43710364)
- [WebRTC中合并多路音频源](https://soo-q6.github.io/blog/2020-03-29-audiotracks/)