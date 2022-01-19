
<template>
    <div id="introLogo" class="h-screen w-full max-w-[960px] flex-col mb-6">
      <div id="artbox" class="contents">
        <svg id="triangles" class="inset-y-1/2 w-2/3 h-1/2 mx-auto">
           <path id="pinktri" fill="none" stroke="#F6019D" stroke-width="5" d="M250,50 L25,275 L675,550 Z" /> 
           <path id="cyantri" fill="none" stroke="#2DE2D6" stroke-width="5" d="M75,150 L175,550 L785,50 Z" />
        </svg>
        <br>
        <img id="webdesign" src="../assets/web_design_opt2.svg" class="absolute bottom-0 place-self-center">
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

@keyframes draw {
    from {
      stroke-dashoffset: 1680;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

#webdesign {
  animation: fade-in 5s linear 6s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fade-in {
  from {
   opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>