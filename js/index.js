const app = Vue.createApp({
  el: "#app",
  data() {
    return {
      text: "aaaa",
      skin: {
        body: {
          type: "",
          color: "",
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
