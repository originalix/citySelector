<template>
  <div class="container index">
    <p>点击地名以更换城市</p>
    <navigator class="location" url="./CityPage">{{ cityInfo }}</navigator>
  </div>
</template>

<script>
export default {
  onShow() {
    const data = wx.getStorageSync('CITY_INFO');
    if (data) {
      this.cityInfo = `${data.city}${data.county}`;
    }
  },
  data() {
    return {
      cityInfo: '暂无选择'
    };
  }
};
</script>

<style>
.index {
  min-height: 100vh;
  background-color: #8BC34A;
  text-align: center;
  padding: 200rpx 100rpx;
  font-size: 24px;
  color: white;
}

.location {
  border: 2rpx solid #FF5252;
  border-radius: 50px;
  width: 200rpx;
  margin: 40rpx auto 0 auto;
  padding: 20rpx 40rpx;
  background-color: #FF5252;
}
</style>
