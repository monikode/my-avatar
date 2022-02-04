app.component("custom-form", {
  data() {
    return {
      eyeColors: ["#000", "blue", "indigo", "red", "green", "brown"],
      skinColors: ["#C4A399", "#86675D", "#CCB2AD", "#6C4F49", "#442721", "#7D4D42"],
    };
  },
  template: `
        <div id="form">
     <h2>Eyes</h2>
     <div class="eye-color-list">
     <div v-for="color in eyeColors" :style="{backgroundColor: color}"
     @click="$emit('update:eye-color', color)">
     
     </div>
     
     </div>
     <h2 @click="$emit('update:title', 'Skin')">Skin</h2>
     <div class="eye-color-list">
     <div v-for="color in skinColors" :style="{backgroundColor: color}"
     @click="$emit('update:skin-color', color)">
     
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
