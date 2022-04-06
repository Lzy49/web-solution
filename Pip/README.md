# 画中画测试
## 测试
### 表现
- 该功能只能用在 video 标签上。
- 全浏览器只能有一个 画中画窗口
- 当前已打开画中画窗口时，再打开其他画中画窗口时，会将旧的画中画窗口覆盖
### 浏览器兼容
 [caniuse](https://caniuse.com/?search=picture-in-picture)
## 关键API
1. 浏览器需支持`requestPictureInPicture()`方法才可实现，可以使用d`ocument.pictureInPictureEnabled`来进行检测浏览器是否支持
2. 进入画中画：`video.requestPictureInPicture()`；
3. 退出画中画：`document.exitPictureInPicture()`;
4. 禁止画中画：在`video`标签添加`disablePictureInPicture`；
5. 监听画中画的进入和退出状态：`enterpictureinpicture`,`leavepictureinpicture`；监听画中画时可获取画中画窗口的一些数据，如宽高等
## 文档
- [w3c](https://w3c.github.io/picture-in-picture/)
- [requestPictureInPicture()画中画](https://zhuanlan.zhihu.com/p/51392725)