// 获取全局应用程序实例对象
const app = getApp()
const useUrl = require('../../utils/service')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    lists: [
      // {
      //   right: 85,
      //   count: 100,
      //   score: 100
      // },
      // {
      //   right: 85,
      //   count: 100,
      //   score: 100
      // },
      // {
      //   right: 85,
      //   count: 100,
      //   score: 100
      // },
      // {
      //   right: 85,
      //   count: 100,
      //   score: 100
      // }
    ]
  },
  getList (page) {
    let that = this
    app.wxrequest({
      url: useUrl.testRanking,
      data: {
        session_key: app.gs(),
        page
      },
      success (res) {
        wx.hideLoading()
        if (res.data.code === 200) {
          app.setMore(res.data.data, that)
          that.setData({
            lists: that.data.lists.concat(res.data.data)
          })
        } else {
          app.setToast(that, {content: res.data.message})
        }
      }
    })
  },
  goDetail (e) {
    wx.redirectTo({
      url: `../practice/practice?from=zj&id=${e.currentTarget.dataset.id}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
    this.getList(1)
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
  onReachBottom () {
    if (this.data.more) {
      this.getList(++this.data.page)
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
