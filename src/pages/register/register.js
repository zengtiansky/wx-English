// 获取全局应用程序实例对象
const app = getApp()
const useUrl = require('../../utils/service')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: ['小学', '初中', '高中', '大学'],
    array2: ['xxx机构1', 'xxx机构2', 'xxx机构3', 'xxx机构4'],
    level: 0,
    organization: 0,
    showText: '获取验证码'
  },
  // 获取机构
  getOrg () {
    let that = this
    app.wxrequest({
      url: useUrl.login,
      success (res) {
        wx.hideLoading()
        that.setData({
          array2: res.data.data
        })
      }
    })
  },
  // 用户输入
  inputValue (e) {
    // let that = this
    app.inputValue(e, this)
  },
  // 获取验证码
  getNumber () {
    this.setData({
      numberDisabled: true
    })
    let time = 60
    let that = this
    let timer = setInterval(function () {
      if (time <= 0) {
        clearInterval(timer)
        that.setData({
          numberDisabled: false,
          showText: '重新获取验证码'
        })
        return
      }
      that.setData({
        showText: --time + 's'
      })
    }, 1000)
    // 请求手机验证码
    app.wxrequest({
      url: useUrl.login,
      complete () {
        wx.hideLoading()
      }
    })
    // todo
  },
  // picker 选择切换
  bindPickerChange (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    if (e.currentTarget.dataset.type === 'a1') {
      this.setData({
        level: e.detail.value
      })
    } else {
      this.setData({
        organization: e.detail.value
      })
    }
  },
  // 注册下一步
  goNext () {
    let { name, mobile, code, pwd, pwd2, level, organization} = this.data
    if (pwd !== pwd2) {
      return wx.showToast({
        image: '../../images/jiong.png',
        title: '两次输入的密码不一致'
      })
    }
    if (!name && !mobile && !code && !pwd) {
      return wx.showToast({
        image: '../../images/jiong.png',
        title: '请补全信息'
      })
    }
    app.wxrequest({
      url: useUrl.login,
      data: {
        name,
        mobile,
        code,
        pwd,
        level,
        organization
      },
      success (res) {
        wx.hideLoading()
        if (res.data.code === 200) {
          wx.showModal({
            title: '注册成功',
            content: '恭喜您注册成功',
            showCancel: false,
            success () {
              wx.navigateBack({
                delta: 1
              })
            }
          })
        } else {
          wx.showToast({
            image: '../../images/jiong.png',
            title: res.data.message
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    this.getOrg()
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
