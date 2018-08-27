import config from '../../utils/mapConfig';
import { CITY_GET_LOCATION, CITY_SELECT_COUNTY, CITY_CHANGE_CODE, CITY_CHANGE_COUNTY } from '../mutation-types';

const state = {
  city: '定位中',
  county: '',
  countyList: [],
  currentCityCode: '',
  defaultCity: '',
  defaultCounty: ''
};

const getters = {
  city: state => state.city,
  county: state => state.county,
  currentCityCode: state => state.currentCityCode,
  defaultCity: state => state.defaultCity,
  defaultCounty: state => state.defaultCounty,
  countyList: state => state.countyList
};

const mutations = {
  // 设置当前城市信息
  [CITY_GET_LOCATION](state, payload) {
    console.log(CITY_GET_LOCATION);
    console.log(payload);
    state.city = payload.city;
    state.county = payload.county;
    state.currentCityCode = payload.currentCityCode;
    state.defaultCity = payload.city;
    state.defaultCounty = payload.county;
    state.countyList = [];
  },
  [CITY_SELECT_COUNTY](state, payload) {
    state.countyList = payload.list;
  },
  [CITY_CHANGE_CODE](state, payload) {
    state.city = payload.city;
    state.currentCityCode = payload.code;
    state.county = '';
  },
  // 在更新区级信息后，同时更新默认信息
  [CITY_CHANGE_COUNTY](state, payload) {
    state.county = payload.county;
    state.defaultCity = state.city;
    state.defaultCounty = state.county;
    console.log('now state ---> :', state);
  }
};

const actions = {
  // 获取当前定位 城市 区
  [CITY_GET_LOCATION]({commit, dispatch}) {
    console.log('actions get location');
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        let latitude = res.latitude;
        let longitude = res.longitude;
        wx.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${config.key}`,
          success: res => {
            commit({
              type: CITY_GET_LOCATION,
              city: res.data.result.ad_info.city,
              currentCityCode: res.data.result.ad_info.adcode,
              county: res.data.result.ad_info.district
            });
            console.log(res);
          }
        });
      }
    });
  },
  // 根据城市代码 定位区县
  [CITY_SELECT_COUNTY]({ commit, state }) {
    console.log('正在定位区县');
    let code = state.currentCityCode;
    console.log('city code ----> ', code);
    wx.request({
      url: `https://apis.map.qq.com/ws/district/v1/getchildren?&id=${code}&key=${config.key}`,
      success: function(res) {
        commit({
          type: CITY_SELECT_COUNTY,
          list: res.data.result[0]
        });
        console.log(res.data);
        console.log('请求区县成功' + `https://apis.map.qq.com/ws/district/v1/getchildren?&id=${code}&key=${config.key}`);
      },
      fail: function() {
        console.log('请求区县失败，请重试');
      }
    });
  },
  // 更新城市名和城市代码
  [CITY_CHANGE_CODE]({commit}, data) {
    commit({
      type: CITY_CHANGE_CODE,
      city: data.city,
      code: data.code
    });
  },
  // 更新选择区县
  [CITY_CHANGE_COUNTY]({commit}, data) {
    commit({
      type: CITY_CHANGE_COUNTY,
      county: data.county
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
