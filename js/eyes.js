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
        <svg width="56" height="33" viewBox="-10 -6 66 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M54.459 27.1498C46.7707 29.8957 45.6723 32.0923 29.7466 30.994C24.4491 29.9933 16.5667 27.699 12.7225 23.3057C8.87838 18.9124 7.78006 15.7394 5.5834 12.658C3.38675 9.57661 1.19009 4.63414 1.19009 1.33915" stroke="#DB9E9E" stroke-width="2" stroke-linecap="round"/>
</svg>

        <svg width="55" height="33" viewBox="-11 -3 66 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8449 31.8957C45.7707 32.994 46.869 30.7973 54.5573 28.0515C54.0081 22.3768 50.3836 10.1488 40.279 6.63414C27.6483 2.24083 24.9025 -1.05416 10.075 0.593336C-1.7869 1.91133 -0.725182 2.24083 1.28842 2.24083C1.28842 5.53581 3.48507 10.4783 5.68173 13.5597C7.87838 16.6411 8.97671 19.8141 12.8209 24.2074C16.665 28.6007 24.5474 30.895 29.8449 31.8957Z" fill="#7C8996"/>
<path d="M29.8449 31.8957C45.7707 32.994 46.869 30.7973 54.5573 28.0515C54.0081 22.3768 50.3836 10.1488 40.279 6.63414C27.6483 2.24083 24.9025 -1.05416 10.075 0.593336C-1.7869 1.91133 -0.725182 2.24083 1.28842 2.24083C1.28842 5.53581 3.48507 10.4783 5.68173 13.5597C7.87838 16.6411 8.97671 19.8141 12.8209 24.2074C16.665 28.6007 24.5474 30.895 29.8449 31.8957Z" fill="url(#paint0_linear_6_125)" fill-opacity="0.61"/>
<defs>
<linearGradient id="paint0_linear_6_125" x1="24.9025" y1="40.6823" x2="24.9025" y2="3.88832" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
<svg width="55" height="33" viewBox="-11 -3 66 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_11_4" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="55" height="33">
<path d="M29.8449 31.8957C45.7707 32.994 46.869 30.7973 54.5573 28.0515C54.0081 22.3768 50.3836 10.1488 40.279 6.63414C27.6483 2.24083 24.9025 -1.05416 10.075 0.593336C-1.7869 1.91133 -0.725182 2.24083 1.28842 2.24083C1.28842 5.53581 3.48507 10.4783 5.68173 13.5597C7.87838 16.6411 8.97671 19.8141 12.8209 24.2074C16.665 28.6007 24.5474 30.895 29.8449 31.8957Z" fill="#7C8996"/>
<path d="M29.8449 31.8957C45.7707 32.994 46.869 30.7973 54.5573 28.0515C54.0081 22.3768 50.3836 10.1488 40.279 6.63414C27.6483 2.24083 24.9025 -1.05416 10.075 0.593336C-1.7869 1.91133 -0.725182 2.24083 1.28842 2.24083C1.28842 5.53581 3.48507 10.4783 5.68173 13.5597C7.87838 16.6411 8.97671 19.8141 12.8209 24.2074C16.665 28.6007 24.5474 30.895 29.8449 31.8957Z" fill="url(#paint0_linear_11_4)" fill-opacity="0.61"/>
</mask>
<g mask="url(#mask0_11_4)">
<g filter="url(#filter0_f_11_4)">
<ellipse :cx="x" :cy="y" rx="17.5732" ry="15.9257":fill="$root.face.eye.color"/>
</g>
</g>
<defs>
<filter id="filter0_f_11_4" x="8.82085" y="-6.15248" width="43.1465" height="39.8515" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_11_4"/>
</filter>
<linearGradient id="paint0_linear_11_4" x1="24.9025" y1="40.6823" x2="24.9025" y2="3.88832" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

        
        <svg width="66" height="35" viewBox="0 0 66 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.952637 0.1017C0.521261 0.902826 5.64315 5.16196 6.44427 5.59334C10.4593 7.75527 16.0368 7.41473 20.8229 7.24083C20.8229 7.24083 21.5854 7.25556 21.9688 7.24083C26.5296 7.06549 28.8684 7.26907 35.5499 8.33915C37.1974 8.60301 39.1893 9.34184 39.4496 9.43748C41.8294 10.3118 44.1621 10.4668 46.5332 11.6341C49.2159 12.9549 51.671 13.5698 53.2401 15.5312L53.3085 15.6167L53.3876 15.6923C57.4651 19.5939 60.0833 22.4808 61.3606 25.3632C61.8733 26.5202 62.0415 26.9878 62.459 28.109C62.5751 28.421 63.5573 30.8549 63.5573 30.8549C64.0995 32.2898 65.0991 34.1498 65.0991 34.1498C64.6556 30.8549 64.085 27.0843 63.5573 25.6876C63.1354 24.554 63.189 23.7157 62.459 22.0682C61.0249 18.8322 60.2623 17.6749 55.7428 13.3857C53.7427 10.9246 50.9553 9.13514 48.117 7.73784C45.5782 6.48794 42.8774 5.49637 40.5136 4.62854C40.2025 4.51434 39.8973 4.40229 39.5991 4.29207L39.4496 4.23684L39.2924 4.21127C32.2006 3.05814 26.5698 3.27572 21.9688 3.45351C21.5795 3.46855 21.1976 3.48331 20.8229 3.49692C15.9529 3.67387 9.56837 5.13572 6.44427 3.45351C3.80374 3.49692 1.38401 -0.699427 0.952637 0.1017Z" fill="black"/>
</svg>

    </div>


    <div class="right">
    <svg width="65" height="42" viewBox="0 0 65 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g style="mix-blend-mode:luminosity" opacity="0.36" filter="url(#filter0_f_6_75)">
    <path d="M4.56701 33.3465C12.2553 36.0923 13.3536 38.289 29.2794 37.1906C34.5769 36.19 44.1068 33.8957 47.9509 29.5024C51.7951 25.109 52.3443 22.1497 54.5409 19.0682C56.7376 15.9868 60.0325 8.63414 60.0325 5.33915" stroke="black" stroke-linecap="round"/>
    </g>
    <defs>
    <filter id="filter0_f_6_75" x="0.0668793" y="0.839153" width="64.4657" height="41.1404" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_6_75"/>
    </filter>
    </defs>
    </svg>
    <svg width="56" height="33" viewBox="-1 -6 66 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.56701 27.1498C9.25531 29.8957 10.3536 32.0923 26.2794 30.994C31.5769 29.9933 39.4593 27.699 43.3035 23.3057C47.1476 18.9124 48.2459 15.7394 50.4426 12.658C52.6392 9.57661 54.8359 4.63414 54.8359 1.33915" stroke="#DB9E9E" stroke-width="2" stroke-linecap="round"/>
</svg>

    <svg width="55" height="33" viewBox="-1 -3 65 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.1811 31.8957C9.25531 32.994 8.15698 30.7973 0.468687 28.0515C1.01785 22.3768 4.64233 10.1488 14.7469 6.63414C27.3777 2.24083 30.1235 -1.05416 44.9509 0.593336C56.8129 1.91133 55.7512 2.24083 53.7376 2.24083C53.7376 5.53581 51.5409 10.4783 49.3443 13.5597C47.1476 16.6411 46.0493 19.8141 42.2051 24.2074C38.361 28.6007 30.4786 30.895 25.1811 31.8957Z" fill="#7C8996"/>
    <path d="M25.1811 31.8957C9.25531 32.994 8.15698 30.7973 0.468687 28.0515C1.01785 22.3768 4.64233 10.1488 14.7469 6.63414C27.3777 2.24083 30.1235 -1.05416 44.9509 0.593336C56.8129 1.91133 55.7512 2.24083 53.7376 2.24083C53.7376 5.53581 51.5409 10.4783 49.3443 13.5597C47.1476 16.6411 46.0493 19.8141 42.2051 24.2074C38.361 28.6007 30.4786 30.895 25.1811 31.8957Z" fill="url(#paint0_linear_6_76)" fill-opacity="0.61"/>
    <defs>
    <linearGradient id="paint0_linear_6_76" x1="30.1235" y1="40.6823" x2="30.1235" y2="3.88832" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>
    

    <svg width="55" height="33" viewBox="-1 -3 65 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_11_6" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="65" height="33">
    <path d="M25.1811 31.8957C9.25531 32.994 8.15698 30.7973 0.468687 28.0515C1.01785 22.3768 4.64233 10.1488 14.7469 6.63414C27.3777 2.24083 30.1235 -1.05416 44.9509 0.593336C56.8129 1.91133 55.7512 2.24083 53.7376 2.24083C53.7376 5.53581 51.5409 10.4783 49.3443 13.5597C47.1476 16.6411 46.0493 19.8141 42.2051 24.2074C38.361 28.6007 30.4786 30.895 25.1811 31.8957Z" fill="#7C8996"/>
    <path d="M25.1811 31.8957C9.25531 32.994 8.15698 30.7973 0.468687 28.0515C1.01785 22.3768 4.64233 10.1488 14.7469 6.63414C27.3777 2.24083 30.1235 -1.05416 44.9509 0.593336C56.8129 1.91133 55.7512 2.24083 53.7376 2.24083C53.7376 5.53581 51.5409 10.4783 49.3443 13.5597C47.1476 16.6411 46.0493 19.8141 42.2051 24.2074C38.361 28.6007 30.4786 30.895 25.1811 31.8957Z" fill="url(#paint0_linear_11_6)" fill-opacity="0.61"/>
    </mask>
    <g mask="url(#mask0_11_6)">
    <g filter="url(#filter0_f_11_6)">
    <ellipse :cx="x" :cy="y" rx="17.5732" ry="15.9257" :fill="$root.face.eye.color"/>
    </g>
    </g>
    <defs>
    <filter id="filter0_f_11_6" x="3.05865" y="-6.15248" width="43.1465" height="39.8515" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_11_6"/>
    </filter>
    <linearGradient id="paint0_linear_11_6" x1="30.1235" y1="40.6823" x2="30.1235" y2="3.88832" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>
    <svg width="66" height="35" viewBox="0 0 66 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.0733 0.1017C65.5047 0.902826 60.3828 5.16196 59.5817 5.59334C55.5667 7.75527 49.9892 7.41473 45.2031 7.24083C45.2031 7.24083 44.4405 7.25556 44.0572 7.24083C39.4963 7.06549 37.1576 7.26907 30.476 8.33915C28.8285 8.60301 26.8367 9.34184 26.5763 9.43748C24.1966 10.3118 21.8639 10.4668 19.4928 11.6341C16.8101 12.9549 14.3549 13.5698 12.7859 15.5312L12.7175 15.6167L12.6384 15.6923C8.56085 19.5939 5.94265 22.4808 4.66535 25.3632C4.15267 26.5202 3.98448 26.9878 3.56702 28.109C3.45089 28.421 2.4687 30.8549 2.4687 30.8549C1.92649 32.2898 0.926897 34.1498 0.926897 34.1498C1.37037 30.8549 1.94094 27.0843 2.4687 25.6876C2.89054 24.554 2.83696 23.7157 3.56702 22.0682C5.00103 18.8322 5.76368 17.6749 10.2831 13.3857C12.2833 10.9246 15.0707 9.13514 17.909 7.73784C20.4478 6.48794 23.1486 5.49637 25.5124 4.62854C25.8235 4.51434 26.1287 4.40229 26.4269 4.29207L26.5763 4.23684L26.7336 4.21127C33.8254 3.05814 39.4561 3.27572 44.0572 3.45351C44.4465 3.46855 44.8283 3.48331 45.2031 3.49692C50.0731 3.67387 56.4576 5.13572 59.5817 3.45351C62.2222 3.49692 64.642 -0.699427 65.0733 0.1017Z" fill="black"/>
</svg>

    
    </svg>
    

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
        let heightPercent = (y / height).toFixed(2) * 100 ;
        heightPercent+=100

        this.y = `${(heightPercent * (100 - this.iris.height)) / 100}%`;

        let widthPercent = (x / width).toFixed(2) * 100;
        if (widthPercent > 100) widthPercent = 100;
        widthPercent+=20
        this.x = `${(widthPercent * (100 - this.iris.width)) / 100}%`;
      }
    },
  },
});
