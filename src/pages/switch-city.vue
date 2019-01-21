<template>
  <div>
    <SwitchCity
      :mapKey="mapKey"
    />
  </div>
</template>

<script>
import SwitchCity from '../components/switch-city';
import config from '../utils/mapConfig';
export default {
  computed: {
    mapKey() {
      return config.key;
    }
  },
  components: {
    SwitchCity: SwitchCity
  }
};
</script>
