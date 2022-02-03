app.component("eyes", {
  data() {
    return {
      iris: {
        height: "",
        width: "",
      },
      leftX: " calc( 50% - 33% / 2)",
      rightX: " calc( 50% - 33% / 2)",
      x: " calc( 50% - 33% / 2)",
      y: " calc( 65% - 70% / 2)",
    };
  },
  template: `
        <div id="eyes">
        <div class="left">
            <div class="iris"
            :style="{top: y, left: x, backgroundColor: $root.face.eye.color}"></div>
        </div>
        <div class="right">
            <div class="iris"
            :style="{top: y, left: x, backgroundColor: $root.face.eye.color}"></div>
        </div>
        </div>
    `,
  mounted() {
    console.log(this.$root);
    this.iris.height = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--iris-height"
      )
    );
    this.iris.width = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--iris-width"
      )
    );

    document.addEventListener("mousemove", this.onMouseMove);
  },
  methods: {
    onMouseMove(ev) {
      let x = ev.clientX;
      let y = ev.clientY;
      const canvas = document.getElementsByClassName("canvas")[0];

      let height = canvas.offsetHeight;
      let width = canvas.offsetWidth;
      if (y >= 0 && x >= 0) {
        let heightPercent = (y / height).toFixed(2) * 100;
        this.y = `${(heightPercent * (100 - this.iris.height)) / 100}%`;

        let widthPercent = (x / width).toFixed(2) * 100;
        if (widthPercent > 100) widthPercent = 100;
        this.x = `${(widthPercent * (100 - this.iris.width)) / 100}%`;
      }
    },
  },
});
