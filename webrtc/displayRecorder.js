// 录制配置
const DPR = 1 || window.devicePixelRatio
// 显示器信息
const DISPLAY_MEDIA_CONSTRAINTS = {
  audio: true,
  video: {
    width: window.screen.width * DPR,
    height: window.screen.height * DPR
  }
}
// 用户信息
const USER_MEDIA_CONSTRAINTS = {
  audio: true,
  // video: true,
}
// 视频格式
const MIME_TYPE = MediaRecorder.isTypeSupported("video/webm;") ? 'webm' : "mp4" // 为了兼容下 Safari
// log 通用处理
function log(info) {
  alert(info)
}
// 创建一个 rtc 录制流
class DisplayRecorder {
  constructor() {
    this.recorder = null; // 录制器
    this.chunks = []; // 媒体流收集
    this.file = undefined // 最后保留文件
  }
  // 打开 
  async open() {
    // 获取权限
    const displayStream = await navigator.mediaDevices.getDisplayMedia(DISPLAY_MEDIA_CONSTRAINTS)
    const userStream = await navigator.mediaDevices.getUserMedia(USER_MEDIA_CONSTRAINTS);
    console.log(displayStream.getTracks())
    // 创建 录制的接口,
    this.recorder = new MediaRecorder(mergeTracks(displayStream, userStream), {
      mimeType: `video/${MIME_TYPE}`
    })
    // 获取录制的媒体资源 data 会是一个 Blob
    this.recorder.ondataavailable = (e) => {
      e.data.size > 0 && this.chunks.push(e.data)
    }
    // 开始录制
    this.recorder.start()
    this.recorder.ignoreMutedMedia = false;
    // 监听结束生成 Blob
    this.recorder.onstop = () => {
      this.file = new Blob(this.chunks, {
        type: `video/${MIME_TYPE}`
      })
    }

  }

  // 关闭
  close() {
    this.recorder && this.recorder.stop()
  }

  // 下载
  download() {
    if (!this.file) {
      log('请先关闭再下载')
      return
    }
    const url = URL.createObjectURL(this.file);
    const a = document.createElement('a');
    a.href = url;
    a.download = `video.${MIME_TYPE}`;
    a.click();
  }
  // 暂停
  pause(){
    this.getState() === 'recording' ? this.recorder.pause() : log('当前录制未开始或已结束')
  }
 
  // 继续
  resume(){
    this.getState() === 'paused' ? this.recorder.resume() : log('当前录制未暂停')
  }
  // 当前状态
  getState(){
    return this.recorder.state;
  }
}




// 合并各轨
const mergeTracks = (baseStrem, extraStream) => {
  if (!baseStrem.getAudioTracks().length) {
    baseStrem.addTrack(extraStream.getAudioTracks()[0])
    return baseStrem;
  }
  // 将两个音轨和成一个音轨 - -
  let context = new AudioContext();
  let baseSource = context.createMediaStreamSource(baseStrem);
  let extraSource = context.createMediaStreamSource(extraStream);
  let dest = context.createMediaStreamDestination();

  // 设置 gain 增益
  let baseGain = context.createGain();
  let extraGain = context.createGain();
  baseGain.gain.value = 0.8;
  extraGain.gain.value = 0.8;
  // connect
  baseSource.connect(baseGain).connect(dest);
  extraSource.connect(extraGain).connect(dest);

  return new MediaStream([baseStrem.getVideoTracks()[0], dest.stream.getAudioTracks()[0]]);
}