<template>
  <div>
    <SwitchCity
      :mapKey="mapKey"
      :hotCityList="hotCityList"
    />
  </div>
</template>

<script>
import SwitchCity from '../components/SwitchCity';
import config from '../utils/mapConfig';
export default {
  computed: {
    mapKey() {
      return config.key;
    },
    hotCityList() {
      return [
        [
          {city: '北京市', code: '110000'},
          {city: '上海市', code: '310000'},
          {city: '广州市', code: '440100'}
        ],
        [
          {city: '深圳市', code: '440300'},
          {city: '杭州市', code: '330100'},
          {city: '南京市', code: '320100'}
        ],
        [
          {city: '武汉市', code: '420100'},
          {city: '天津市', code: '120000'},
          {city: '西安市', code: '610100'}
        ]
      ];
    }
  },
  components: {
    SwitchCity: SwitchCity
  }
};
</script>
