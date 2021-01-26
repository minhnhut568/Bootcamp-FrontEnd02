const initialState = {
  banChon: true, // true = da, false = xiao
  tongSoBanChoi: 0,
  soBanThang: 0,
  ketQuaXucXac: [
    {
      ma: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      soDiem: 1,
    },
    {
      ma: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      soDiem: 1,
    },
    {
      ma: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      soDiem: 1,
    },
  ],
};

const xucXacReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "XU_LY_BAN_CHON":{
      state.banChon = payload;
      return {...state};
    }
    default:
      return state;
  }
};

export default xucXacReducers;
