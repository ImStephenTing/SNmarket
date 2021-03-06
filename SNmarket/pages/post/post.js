var tabBar = require('../../templates/tabBar-template/tabBar.js');
var util = require('../../data/copyright-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    selectData:['长铺','武阳','海口'],
    index:0,
    objArray:[
      {
        index: 0,
        option: ['长铺', '武阳', '海口'],
      },
      {
        index:0,
        option: ['全新', '九成新', '八成新', '七成新', '六成新', '五程序'],
      },
      {
        index:0,
        option: ['汽车', '电子产品']
      }
    ],
    current:0,
    isChoose:false 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    this.setData({
      time:time
    })
    tabBar.tabbar("tabBar", 1, this);
  },

  selectTap(){
    this.setData({
      show:!this.data.show
    })
  },

  optionTap(e){
    let idx = e.currentTarget.dataset.index;
    this.setData({
      index:idx,
      show:!this.data.show
    })
  },

  onChangeTap:function(e){
    let id = e.currentTarget.dataset.current;
    switch(id){
      case '0':
        return;
        break;
      case '1':
        wx.navigateTo({
          url: '../post/sale-post/sale-post',
        })
        break;
      case '2':
        wx.navigateTo({
          url: '../post/shop-post/shop-post',
        })
        break;
      case '3':
        wx.navigateTo({
          url: '../post/running-post/running-post',
        })
        break;
      case '4':
        wx.navigateTo({
          url: '../post/wanted-post/wanted-post',
        })
        break;
      case '5':
        wx.navigateTo({
          url: '../post/used-post/used-post',
        })
        break;
    }
  },

  onTabbarTap: function (e) {
    var tid = e.currentTarget.dataset.tid;
    //console.log(tid);
    switch (tid) {
      case 0:
        wx.redirectTo({
          url: '../index/index',
        })
        break;
      case 1:
        return;
        break;
      case 2:
        wx.redirectTo({
          url: '../me/me',
        })
        break;
    }
  },

  onUploadTap:function(e){
    let that = this;
    wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:['album'],
      success: function(res) {
        const img = res.tempFilePaths;
        that.setData({
          isChoose:true,
          imgUrl:img
        })
      }
    })
  },

  formSubmit:function(e){
    wx.showModal({
      title: '发布',
      content: '确认发布吗？',
      success:res=>{
        if(res.confirm){
          wx.showToast({
            title: '发布成功:)',
            success: res => {
              console.log(e.detail.value);
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})