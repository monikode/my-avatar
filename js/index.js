const app = Vue.createApp({
  el: "#app",
  data() {
    return {
      skin: {
        body: {
          type: "",
          color: "#C4A399",
        },
      },

      face: {
        type: 0,
        eye: {
          color: "#423A3A",
        },
        nose: {},
        lips: {
          type: "",
          color: "#9F3C3C",
        },
      },
      hair: {},
      background: {
        color: ''
      }
    };
  },
 
});
