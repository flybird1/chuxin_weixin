<template>
  <div class="webim-view">
    <group title="发送方">
      <x-input title="消息" placeholder="请输入消息" :value.sync="message" :show-clear="false"></x-input>
    </group>
    <flexbox>
      <flexbox-item>
        <x-button type="default" @click="login">上线</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="primary" @click="send">发送</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="warn" @click="close">退出</x-button>
      </flexbox-item>
    </flexbox>

    <group title="接收方">
      <x-input title="消息" placeholder="" :show-clear="false"></x-input>
    </group>
  </div>
</template>

<script>
  // import public component
  import Group from 'vux/dist/components/group'
  import XInput from 'vux/dist/components/x-input'
  import XButton from 'vux/dist/components/x-button'
  import Flexbox from 'vux/dist/components/flexbox'
  import FlexboxItem from 'vux/dist/components/flexbox-item'

  // import webim from '../services/webim'

  // your vue code based on es6 syntax
  export default {
    ready (){
      this.login();
      this.listen();
    },
    data() {
      return {
        message: "",
        conn: new WebIM.connection({
          https: WebIM.config.https,
          url: WebIM.config.xmppURL,
          isAutoLogin: WebIM.config.isAutoLogin,
          isMultiLoginSessions: WebIM.config.isMultiLoginSessions
        })
      }
    },
    methods: {
      login() {
        const options = {
          apiUrl: WebIM.config.apiURL,
          user: "zhangjiage",
          pwd: "123456",
          appKey: WebIM.config.appkey
        };

        this.conn.open(options);
        console.log('login!')
      },

      send() {
        const id = this.conn.getUniqueId();//生成本地消息id
        const msg = new WebIM.message('txt', id);//创建文本消息
        msg.set({
          msg: this.message,
          to: "longle",
          success: ( id, serverMsgId ) => {console.log(serverMsgId);},//消息发送成功回调   
          error: () => { alert("11"); }
        });
        // msg.setGroup("groupchat");
        this.conn.send(msg.body);
      },

      listen() {
        this.conn.listen({
          onOpened: function (message) {          //连接成功回调
            //如果isAutoLogin设置为false，那么必须手动设置上线，否则无法收消息
            conn.setPresence();
          },
          onClosed: () => { console.log("close"); },         //连接关闭回调
          onTextMessage: (message) => {  console.log(message);alert(message); },    //收到文本消息
          onEmojiMessage: (message) => {  console.log(message);alert(message); },   //收到表情消息
          onPictureMessage: (message) => {  console.log(message);alert(message); }, //收到图片消息
          onCmdMessage: (message) => {  console.log(message);alert(message); },     //收到命令消息
          onAudioMessage: (message) => {  console.log(message);alert(message); },   //收到音频消息
          onLocationMessage: (message) => {  console.log(message);alert(message); },//收到位置消息
          onFileMessage: (message) => {  console.log(message);alert(message); },    //收到文件消息
          onVideoMessage: (message) => {  console.log(message);alert(message); },   //收到视频消息
          onPresence: (message) => {  console.log(message);alert(message); },       //收到联系人订阅请求、处理群组、聊天室被踢解散等消息
          onRoster: (message) => {  console.log(message);alert(message); },         //处理好友申请
          onInviteMessage: (message) => {  console.log(message);alert(message); },  //处理群组邀请
          onOnline: () => { console.log("online"); },                  //本机网络连接成功
          onOffline: function () { },                 //本机网络掉线
          onError: function (message) { }           //失败回调
        });
      },

      close() {
        this.conn.close();
        console.log('close!')
      }
    },
    components: {
      Group,
      XButton,
      XInput,
      Flexbox,
      FlexboxItem
    }
  }
</script>

<style lang="scss">
  /* import public class */
  
  @import '~vux/dist/vux.css';
  .webim-view {
    /* your private class */
  }
</style>