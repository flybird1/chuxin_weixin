'use strict'
// web_modules
import 'strophe.js'
import 'websdk-1.1.2.js'

// require('imports?window=>{}!exports?window.Strophe!./strophe.js')
// require('imports?window=>{}!exports?window.WebIM!./websdk-1.1.2.js')

WebIM.config = {
    /*
     * XMPP server
     */
    xmppURL: 'im-api.easemob.com',
    /*
     * Backend REST API URL
     */
    apiURL: (location.protocol === 'https:' ? 'https:' : 'http:') + '//a1.easemob.com',
    /*
     * Application AppKey
     */
    appkey: 'zhaimi#demo',
    /*
     * Whether to use HTTPS
     * @parameter {Boolean} true or false
     */
    https: '',
    /*
     * isMultiLoginSessions
     * true: A visitor can sign in to multiple webpages and receive messages at all the webpages.
     * false: A visitor can sign in to only one webpage and receive messages at the webpage.
     */
    isMultiLoginSessions: false,
    /*
     * Set to auto sign-in
     */
    isAutoLogin: true 
};


export default {

  conn: new WebIM.connection({
    https: WebIM.config.https,
    url: WebIM.config.xmppURL,
    isAutoLogin: WebIM.config.isAutoLogin,
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions
  }),

  // 创建连接
  getConn() {
    return this.conn;
  },

  // 添加回调函数
  listen() {
    const conn = this.getConn();
    conn.listen({
      onOpened: function (message) {          //连接成功回调
        //如果isAutoLogin设置为false，那么必须手动设置上线，否则无法收消息
        conn.setPresence();
      },
      onClosed: function (message) { },         //连接关闭回调
      onTextMessage: function (message) { },    //收到文本消息
      onEmojiMessage: function (message) { },   //收到表情消息
      onPictureMessage: function (message) { }, //收到图片消息
      onCmdMessage: function (message) { },     //收到命令消息
      onAudioMessage: function (message) { },   //收到音频消息
      onLocationMessage: function (message) { },//收到位置消息
      onFileMessage: function (message) { },    //收到文件消息
      onVideoMessage: function (message) { },   //收到视频消息
      onPresence: function (message) { },       //收到联系人订阅请求、处理群组、聊天室被踢解散等消息
      onRoster: function (message) { },         //处理好友申请
      onInviteMessage: function (message) { },  //处理群组邀请
      onOnline: function () { },                  //本机网络连接成功
      onOffline: function () { },                 //本机网络掉线
      onError: function (message) { }           //失败回调
    });
  },

  // 注册
  register() {
    const options = {
      username: "username",
      password: "password",
      nickname: "nickname",
      appKey: "orgName#appName",
      success: function () { },
      error: function () { },
      apiUrl: WebIM.config.apiURL
    };

    WebIM.utils.registerUser(options);
  },

  login() {
    const options = {
      apiUrl: WebIM.config.apiURL,
      user: "username",
      pwd: "password",
      appKey: "orgName#appName"
    };

    this.getConn().open(options);
  },

  close() {
    this.getConn().close();
  }
}