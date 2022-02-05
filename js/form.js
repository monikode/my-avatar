app.component("custom-form", {
  data() {
    return {
      eyeColors: [
        "#423A3A",
        "#38619F",
        "#4040A0",
        "#8A4141",
        "#46753F",
        "#3F2C21",
        "#A3A548",
      ],
      skinColors: [
        "#CCB2AD",
        "#C4A399",
        "#86675D",
        "#7D4D42",
        "#6C4F49",
        "#442721",
      ],
      lipColors: [  "#423A3A",
      "#38619F",
      "#4040A0",
      "#8A4141",
      "#46753F",
      "#3F2C21",
      "#A3A548",],
    };
  },
  template: `
        <div id="form">
     <h2>Face</h2>
     <h3 @click="$emit('update:face-type', 0)">1</h3>
     <h3 @click="$emit('update:face-type', 1)">2</h3>

     <h2>Eyes</h2>
     <div class="eye-color-list">
        <div v-for="color in eyeColors" :style="{backgroundColor: color}"
        @click="$emit('update:eye-color', color)">
        </div>
     </div>
     <h2 >Skin</h2>
     <div class="eye-color-list">
        <div v-for="color in skinColors" :style="{backgroundColor: color}"
        @click="$emit('update:skin-color', color)">
        </div>
     </div>

     <h2>Lips</h2>
     <div class="eye-color-list">
        <div v-for="color in lipColors" :style="{backgroundColor: color}"
        @click="$emit('update:lip-color', color)">
        </div>
     </div>

     <button @click="capture()">Capture</button>
     <img id="final">
     </div>
    `,
  methods: {
    capture() {
      const canvas = document.getElementById("capture");
      domtoimage
        .toJpeg(canvas, { cacheBust: true })
        .then(function (dataUrl) {
          var img = document.getElementById("final");
          img.src = dataUrl;
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    },
  },
});

