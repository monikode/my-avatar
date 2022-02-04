const app = Vue.createApp({
  el: "#app",
  data() {
    return {
      text: "aaaa",
      skin: {
        body: {
          type: "",
          color: "#C4A399",
        },
      },

      face: {
        eye: {
          color: "#000",
        },
        nose: {},
        lips: {
          type: "",
          color: "",
        },
      },
      hair: {},
    };
  },
})
