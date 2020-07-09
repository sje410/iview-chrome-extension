<template>
  <header class="main-top">
    <ul class="menu-list">
      <li>
        <a
          href="#/"
          :class="
            currentNav === 'home'
              ? 'tool router-link-exact-active active'
              : 'tool'
          "
          ><span>平台导航</span></a
        >
      </li>
      <li @click="backToTab('briefed')">
        <a
          class="account"
          :class="
            currentNav === 'briefed'
              ? 'account router-link-exact-active active'
              : 'account'
          "
          ><span>资讯中心</span></a
        >
      </li>
      <li @click="backToTab('message')">
        <a
          class="msg has-notif"
          :class="
            currentNav === 'message'
              ? 'msg has-notif router-link-exact-active active'
              : 'msg has-notif'
          "
          ><span>消息</span></a
        >
      </li>
      <li>
        <a
          href="#/me"
          class="set has-notif"
          :class="
            currentNav === 'setting'
              ? 'set has-notif router-link-exact-active active'
              : 'set has-notif'
          "
          ><span>设置</span></a
        >
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: "TagsNav",
  data() {
    return {};
  },
  props: {
    currentNav: {
      type: String,
      default() {
        return "home";
      }
    }
  },
  methods: {
    backToTab() {
      this.$Message.warning("正在开发中，敬请期待！");
    }
  }
};
</script>
