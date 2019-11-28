
Page({
  //开始
  canvasStart: function (event) {
    var arrz = this.data.arrz
    var arrx = this.data.arrx
    var arry = this.data.arry

    arrz.push(0);
    arrx.push(event.changedTouches[0].x);
    arry.push(event.changedTouches[0].y);

    this.setData({arrz:arrz,arrx:arrx,arry:arry, isButtonDown:true})
  },
 
  data: {
    src:'',
    img:'',
    rpx:'',
    context:null,
    isButtonDown:false,
    arrx:[],
    arry:[],
    arrz:[],
    canvasw:0,
    canvash:0,
  },
  onLoad() {
    let that = this
    // 使用 wx.createContext 获取绘图上下文 context
    const context = dd.createCanvasContext('canvas')
    context.beginPath()
    context.setStrokeStyle('#000000');
    context.setLineWidth(4);
    context.setLineCap('round');
    context.setLineJoin('round');
 
    // context.drawImage('../../images/img111.png', 0, 0, canvasw, 500);
    context.draw();
  },

//过程
  canvasMove: function (event) {
    const context = dd.createCanvasContext('canvas');
    let that = this
    if (that.data.isButtonDown) {
      var arrz = this.data.arrz
      var arrx = this.data.arrx
      var arry = this.data.arry
      arrz.push(1);
      console.log(event)
      arrx.push(event.changedTouches[0].x);
      arry.push(event.changedTouches[0].y);
      this.setData({arrz,arrx,arry})
    };
 
    for (var i = 0; i < arrx.length; i++) {
      if (arrz[i] == 0) {
        context.moveTo(arrx[i], arry[i])
      } else {
        context.lineTo(arrx[i], arry[i])
      };
 
    };
    context.clearRect(0, 0, this.data.canvasw, this.data.canvash);
    context.setStrokeStyle('#000000');
    context.setLineWidth(4);
    context.setLineCap('round');
    context.setLineJoin('round');
    context.stroke();
 
    context.draw(false);
  },
  //保存图片
  clickMe(){

  },
  canvasLongTap(e){
    console.log('canvasLongTap', e)
    return false;
  },
  onPullDownRefresh() {
    return false;
  },
  canvasEnd: function (event) {
    this.setData({isButtonDown:false})
  },
  cleardraw: function (e) {
    //清除画布
    const context = dd.createCanvasContext('canvas');
    this.setData({arrx:[],arry:[],arrz:[]})
    context.draw(false);
  },
});
