const log = (info) => {
  console.log(info)
}
class PictureInPicture {
  constructor(dom) {
    this.dom = dom; // 将 dom 放入
  }
  // 打开画中画
  open() {
    this.dom.requestPictureInPicture().then(res => {
      console.log(res)
    })
  }
  // 关闭画中画
  close() {
    document.exitPictureInPicture();
  }
  // 监听进入画中画
  addEnterEvent(fun) {
    this.dom.addEventListener('enterpictureinpicture', (event) => {
      fun(event);
    });
  }
  // 检测退出画中画
  addLeaveEvent(fun) {
    this.dom.addEventListener('leavepictureinpicture', function () {
      fun();
    });
  }
  // 获取当前画中画窗口
  getPictureInPictureElement() {
    return document.pictureInPictureElement
  }
}


// pipWindow.addEventListener('resize', function () {
//   log(pipWindow.width, pipWindow.height)
// });