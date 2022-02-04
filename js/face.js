app.component("face", {
  template: `
        <div id="face">
        
            <svg width="190" height="198" viewBox="0 0 190 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M187 115.675C182.5 158.85 167.32 173.871 144.82 182.175C122.32 190.479 119.487 198 95.3204 198C76.2464 198 78.3204 191.548 56.3204 186.175C34.3204 180.802 10.3204 159.35 2.82038 118.175C-11.0822 41.8501 40.6442 0 95.3204 0C149.997 0 200 46.175 187 115.675Z" :fill="$root.skin.body.color"/>
                <mask id="mask0_0_1" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="190" height="198">
                <path d="M187 115.675C182.5 158.85 167.32 173.871 144.82 182.175C122.32 190.479 119.487 198 95.3204 198C76.2464 198 78.3204 191.548 56.3204 186.175C34.3204 180.802 10.3204 159.35 2.82038 118.175C-11.0822 41.8501 40.6442 0 95.3204 0C149.997 0 200 46.175 187 115.675Z" fill="#4B4B56"/>
                </mask>
                <g mask="url(#mask0_0_1)">
                <g style="mix-blend-mode:hard-light" opacity="0.31" filter="url(#filter0_f_0_1)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M-2 20L-35 114L-7 189L102.5 257.5C151.833 238 250.5 198 250.5 194C250.5 192.981 250.916 187.473 251.535 179.265C253.954 147.209 259.481 73.9614 255.5 66C250.5 56 195.5 -4 178 -8C164 -11.2 114.167 -19.6667 91 -23.5L29.5 -12.5L-2 20ZM73 187C59.4 179.8 12.5 123 11.5 114C10.5 105 9.79274 69.8885 25 47.5C41.3161 23.479 63.8679 23.6969 89.8494 23.9478C92.5308 23.9737 95.2487 24 98 24C121.5 24 154.667 36.6667 169 47.5C174.833 59.3333 185 89.4 179 115C172.481 142.812 142.546 170.625 129.57 182.68C127.616 184.495 126.047 185.953 125 187C118.6 193.4 104.333 195 98 195C95.3333 195.333 86.6 194.2 73 187Z" fill="#5F444C"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_f_0_1" x="-56" y="-44.5" width="333.9" height="323" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_0_1"/>
                </filter>
                </defs>
            </svg>
            <svg class="under-mouth" width="124" height="62" viewBox="0 0 124 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<g style="mix-blend-mode:multiply" opacity="0.39">
<path d="M75.486 51.5077C62.1029 44.8149 48.7835 48.6462 41.0808 51.5077C32.8103 54.5802 21.0539 61.0462 21.0539 61.0462L0 62L21.0539 10.0154L96.0264 0C104.071 17.6462 134.64 60.6093 120.161 54.8462C118.621 54.233 91.9183 58.6615 91.9183 58.6615C91.9183 58.6615 88.8373 58.1846 75.486 51.5077Z" fill="url(#paint0_radial_3_27)"/>
</g>
<defs>
<radialGradient id="paint0_radial_3_27" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(56.9996 54.8462) rotate(-90.9949) scale(29.5737 36.5095)">
<stop stop-color="#120F9F"/>
<stop offset="0.589234" stop-color="#530D0C" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>

 
            <div class="container">
                <eyes></eyes>
                <nose></nose>
                <lips></lips>
            </div>
        </div>
    `,
});
