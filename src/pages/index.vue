<template>
  <div class="container index">
    <p>点击地名以更换城市</p>
    <navigator class="location" url="./switchcity">{{ location }}{{ county }}</navigator>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '城市',
      county: '区县'
    };
  },
  methods: {
    created() {
      console.log(this.$store);
      console.log('asdfasdfasdfa');
    }
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
