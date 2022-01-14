
<template>
    <div id="introLogo" class="h-screen w-full max-w-[960px] flex-col mb-6">
        <svg id="triangles" class=" mb-6 w-750 h-750">
           <path id="pinktri" fill="none" stroke="#F6019D" stroke-width="5" d="M250,50 L25,275 L675,550 Z" /> 
           <path id="cyantri" fill="none" stroke="#2DE2D6" stroke-width="5" d="M75,150 L175,550 L785,50 Z" />
        </svg>
        <br>
        <div id="wd__container" class="">
          <svg id="webDesign" width="488.6" height="168.04" version="1.1" viewBox="0 0 129.27 44.46" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-25.935 -104.84)">
              <text transform="rotate(-15.073)" x="-8.3579836" y="148.06142" style="fill:#f6019d;font-family:Stingray;font-size:19.756px;line-height:1.25;stroke-width:.26458" xml:space="preserve"><tspan x="-8.3579836" y="148.06142" style="fill:#f6019d;stroke-width:.26458">Web Design</tspan></text>
            </g>
            <g transform="translate(-25.935 -104.84)">
              <text transform="rotate(-15.073)" x="-9.0762415" y="147.70229" style="fill:#2de2d6;font-family:Stingray;font-size:19.756px;line-height:1.25;stroke-width:.26458" xml:space="preserve"><tspan x="-9.0762415" y="147.70229" style="fill:#2de2d6;stroke-width:.26458">Web Design</tspan></text>
            </g>
          </svg>
        </div>

        

    </div>

</template>

<style scoped>

#introLogo {
  display: flex; 
  z-index: 0;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: visible;
  background-color: none;
  background-image: transparent;
  }

#triangles { overflow: visible }

#pinktri, #cyantri {
  animation: draw 5s linear;
  animation-fill-mode: forwards;
  stroke-linecap: square;
  z-index: 5;
}

#pinktri {
  stroke-dasharray: 1736;
  stroke-dashoffset: 1736;
  filter: drop-shadow(5px 5px 5px rgb(45,226,214, 0.75));
}

#cyantri {
  stroke-dasharray: 2083;
  stroke-dashoffset: 2083;  
  filter: drop-shadow(5px 5px 5px rgb(246,1,157, 0.75));
}

</style>