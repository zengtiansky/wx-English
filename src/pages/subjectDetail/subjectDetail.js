// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navList: ['听一听', '说一说', '读一读', '背一背'],
    curNav: 0,
    goLeft: 0,
    memoryList: [
      {
        t: '背一背1',
        status: 1,
        id: 123
      },
      {
        t: '背一背2',
        status: 1,
        id: 123
      },
      {
        t: '背一背3',
        status: 1,
        id: 123
      }
    ],
    readList: [
      {
        t: '读一读1',
        id: 123,
        status: 0
      },
      {
        t: '读一读2',
        id: 123,
        status: 0
      },
      {
        t: '读一读3',
        id: 123,
        status: 0
      }
    ],
    talkList: [
      {
        t: '说一说1',
        id: 123,
        status: 0
      },
      {
        t: '说一说2',
        id: 123,
        status: 1
      },
      {
        t: '说一说3',
        id: 123,
        status: 0
      }
    ],
    listenList: [
      {
        t: '听一听1',
        id: 123,
        status: 1
      },
      {
        t: '听一听2',
        id: 123,
        status: 0
      },
      {
        t: '听一听3',
        id: 123,
        status: 0
      }
    ]
  },
  // 跳转详情
  goDetail (e) {
    console.log(e.currentTarget.dataset.status)
    if (e.currentTarget.dataset.status * 1 === 0) {
      // console.log(1)
      // 购买弹窗
      this.setData({
        needBuy: true
      })
    } else {
      // todo 跳转对应详情
      let u = this.data.curNav * 1 === 0 ? '../listenDetail/listenDetail' : this.data.curNav * 1 === 1 ? '../talkDetail/talkDetail' : this.data.curNav * 1 === 2 ? '../readDetail/readDetail' : this.data.curNav * 1 === 3 ? '../memoryDetail/memoryDetail' : ''
      wx.redirectTo({
        url: `${u}?id=${e.currentTarget.dataset.id}`
      })
    }
  },
  // 关闭弹窗
  maskClose () {
    this.setData({
      needBuy: false
    })
  },
  // 弹窗确认购买
  maskConfirm () {

  },
  // 选择顶部tab栏
  chooseNav (e) {
    if (e.currentTarget.dataset.index * 1 === this.data.curNav) return
    this.setData({
      curNav: e.currentTarget.dataset.index,
      goLeft: e.currentTarget.dataset.index * 25
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
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
