// 获取全局应用程序实例对象
const app = getApp()
const useUrl = require('../../utils/service')
// const wxParse = require('../../wxParse/wxParse')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'readDetail'
  },
// 获取数据
  getList (id) {
    let that = this
    app.wxrequest({
      url: useUrl.subjectenglishDetailByDu,
      data: {
        session_key: app.gs(),
        id
      },
      success (res) {
        wx.hideLoading()
        if (res.data.code === 200) {
          app.WP('article', 'html', res.data.data.content, that, 5)
          // wxParse.wxParse('article', 'html', res.data.data.content, that, 5)
          that.setData({
            info: res.data.data
          })
        } else {
          app.setToast(that, res.data.message)
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (params) {
    this.getList(params.id)
    // TODO: onLoad
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
