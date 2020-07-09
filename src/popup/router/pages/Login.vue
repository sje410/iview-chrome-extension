<style type="text/css">
#app.setting-root {
  position: relative;
  margin: 0 auto;
  color: #2c3e50;
  width: 360px;
  min-height: 460px;
  font-size: 14px;
  overflow: hidden;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-perspective-origin: 50%;
  perspective-origin: 50%;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: width 0.2s linear;
  -o-transition: width 0.2s linear;
  transition: width 0.2s linear;
}
#app::-webkit-scrollbar {
  width: 2px;
}
#app::-webkit-scrollbar-thumb {
  background-color: #1e7be2;
}
</style>

<style type="text/css">
.unlogin-wrap[data-v-47339bc8] {
  padding-top: 30px;
  text-align: center;
}
.err-wrap[data-v-47339bc8] {
  padding: 113px 0 0;
}
.error-img[data-v-47339bc8] {
  width: 180px;
  margin-bottom: 20px;
}
.unlogin-tip[data-v-47339bc8] {
  margin-bottom: 20px;
  font-size: 14px;
}
#login-button[data-v-47339bc8] {
  display: inline-block;
  margin-bottom: 82px;
  width: 90px;
  height: 30px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  line-height: 30px;
  background-color: #52b4ff;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  -webkit-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;
}
#login-button[data-v-47339bc8]:hover {
  background-color: #2795f7;
}
#login-button[data-v-47339bc8]:active {
  background-color: #1774d1;
}
.funs-list[data-v-47339bc8] {
  margin-top: 1px;
  background: #fff;
  padding: 0 15px;
}
.funs-list.update[data-v-47339bc8] {
  position: absolute;
  top: 0;
  margin: 16px;
  padding: 0;
  width: -webkit-calc(100% - 32px);
  width: calc(100% - 32px);
  height: 33px;
  line-height: 33px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;
  z-index: 1;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #529fff;
}
.funs-list.update span[data-v-47339bc8] {
  vertical-align: middle;
  display: inline-block;
}
.funs-list.update span[data-v-47339bc8]:before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #fb3131;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin-right: 5px;
  vertical-align: middle;
}
.funs-list.update[data-v-47339bc8]:after,
.funs-list.update a[data-v-47339bc8]:before {
  display: none;
}
.funs-list.update[data-v-47339bc8]:hover {
  background-color: rgba(0, 0, 0, 0.45);
}
.funs-list.update[data-v-47339bc8]:active {
  background-color: rgba(0, 0, 0, 0.65);
}
.funs-list.update a[data-v-47339bc8] {
  color: #fff;
  font-weight: 500;
}
.tool-bar[data-v-47339bc8] {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 16px;
  height: 44px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-top: 1px solid rgba(0, 0, 0, 0.09);
  font-size: 14px;
  color: #8c8c8c;
}
.tool-bar a[data-v-47339bc8] {
  color: #8c8c8c;
  cursor: pointer;
}
</style>
<template>
  <div id="app" class="setting-root">
    <div class="container main-page app-view">
      <div class="mask"></div>
      <div>
        <div data-v-47339bc8="" class="err-wrap unlogin-wrap">
          <img
            data-v-47339bc8=""
            src="http://qcybnir4u.bkt.clouddn.com/login.png"
            class="error-img"
          />
          <p data-v-47339bc8="" class="unlogin-tip">
            您还没有登录，请先登录再进行操作。
          </p>
          <a data-v-47339bc8="" id="login-button">登录</a>
          <div data-v-47339bc8="" class="tool-bar">
            <a data-v-47339bc8="" href="http://www.baidu.com" target="_blank"
              >帮助</a
            >
            <span data-v-47339bc8="" class="version-num"
              >当前版本号: v{{ $config.version }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
