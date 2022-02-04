app.component("lips", {
  template: `
        <div id="lips">
        <div class="container"> 
        <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 9.21601C8.5 12.816 4.33333 12.5 2.5 11C5 15.2613 8.49265 23.5 25.5 23.5C42.5 23.5 44 15 47 11.5C42 14.5 35.5 7.71601 33 9.21601C23.5 15.216 18.5 8.71601 16.5 9.21601Z" :fill="$root.face.lips.color" opacity="0.59"/>
        <path d="M16.5 9.21601C8.5 12.816 4.33333 12.5 2.5 11C5 15.2613 8.49265 23.5 25.5 23.5C42.5 23.5 44 15 47 11.5C42 14.5 35.5 7.71601 33 9.21601C23.5 15.216 18.5 8.71601 16.5 9.21601Z" fill="url(#paint0_linear_4_40)" style="mix-blend-mode:soft-light"/>
        <path d="M16.5 9.21602C8.5 12.816 2.83333 12 1 10.5C10 9 13.5 -0.799992 22.5 1C25 1.5 25.5597 1.48508 27.5 1C35.5 -1 40 10.5 48.5 10.5C41.5 15.5 35.5 7.71602 33 9.21602C23.5 15.216 18.5 8.71602 16.5 9.21602Z" :fill="$root.face.lips.color" opacity="0.65"/>
        <path d="M1 10.5C2.83333 12 8.5 12.816 16.5 9.21601C18.5 8.71601 23.5 15.216 33 9.21601C35.5 7.71601 41.5 16 48.5 10.5" :stroke="$root.face.lips.color" />
        <path d="M1 10.5C2.83333 12 8.5 12.816 16.5 9.21601C18.5 8.71601 23.5 15.216 33 9.21601C35.5 7.71601 41.5 16 48.5 10.5" stroke="#000" opacity="0.69"/>

        <g style="mix-blend-mode:hard-light">
        <path d="M37.9777 15.5247C37.9896 15.6752 37.9341 15.8381 37.8001 16.0091C37.6603 16.1873 37.4414 16.3654 37.1527 16.5303C36.5757 16.8596 35.7461 17.121 34.8011 17.2291C33.856 17.3371 32.9888 17.2697 32.3524 17.079C32.0339 16.9836 31.7805 16.8595 31.6041 16.7174C31.4283 16.5758 31.3372 16.4237 31.3194 16.2683C31.2811 15.9331 31.4606 15.5895 31.9123 15.2916C32.3647 14.9932 33.07 14.7573 34.017 14.649C34.5175 14.5918 34.9602 14.4332 35.3509 14.2814C35.4036 14.2609 35.4551 14.2407 35.5055 14.2209C35.8362 14.091 36.1192 13.9798 36.3833 13.9398C36.6736 13.8957 36.9275 13.9403 37.1779 14.1566C37.4365 14.3802 37.7017 14.796 37.9777 15.5247Z" stroke="white" stroke-width="0.3"/>
        </g>
        <g style="mix-blend-mode:hard-light">
        <path d="M20.8528 16.584C20.831 16.6957 20.7254 16.7979 20.4529 16.8614C20.1876 16.9233 19.8175 16.9336 19.3796 16.9061C18.5067 16.8513 17.4144 16.65 16.4643 16.4653C15.5284 16.2835 14.6471 15.9637 14.0235 15.5939C13.7112 15.4087 13.4713 15.2155 13.3203 15.0274C13.1754 14.8469 13.1236 14.6863 13.1442 14.5466C13.4848 13.8544 13.9779 13.422 14.6059 13.201C15.2348 12.9797 16.0118 12.9661 16.9268 13.1387C17.5336 13.7378 18.319 14.3053 19.0248 14.8151C19.2003 14.9419 19.371 15.0652 19.5327 15.1845C19.949 15.4917 20.304 15.7706 20.5446 16.0201C20.6649 16.1448 20.7508 16.2563 20.8019 16.3546C20.8529 16.4526 20.8639 16.5266 20.8528 16.584Z" stroke="white" stroke-width="0.3"/>
        </g>
        <g style="mix-blend-mode:hard-light">
        <path d="M20.6387 1.79198C20.5238 1.7154 20.3686 1.74644 20.292 1.86132C20.2154 1.9762 20.2464 2.13142 20.3613 2.20801L20.6387 1.79198ZM29.624 2.21706C29.7439 2.14855 29.7856 1.99584 29.7171 1.87596C29.6486 1.75608 29.4958 1.71443 29.376 1.78294L29.624 2.21706ZM20.3613 2.20801C20.7705 2.48082 21.377 2.71448 22.0853 2.88957C22.7978 3.0657 23.63 3.18659 24.5016 3.22476C26.2379 3.3008 28.1666 3.04988 29.624 2.21706L29.376 1.78294C28.0334 2.55011 26.2121 2.79919 24.5234 2.72524C23.6825 2.68841 22.8834 2.5718 22.2053 2.40418C21.523 2.23551 20.9795 2.01918 20.6387 1.79198L20.3613 2.20801Z" fill="white"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_4_40" x1="25" y1="11" x2="24.75" y2="21" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-opacity="0"/>
        </linearGradient>
        </defs>
        </svg>
        
        
        

        
        </div>
        </div>
    `,
});
