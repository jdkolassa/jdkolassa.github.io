<template>
  <div
    id="introLogo"
    class="h-screen w-full max-w-[960px] md:flex-col mb-6 mx-auto"
  >
    <div id="artbox" class="contents self-center">
      <svg id="triangles" viewbox="0 0 850 850" class="absolute inset-48">
        <path
          id="pinktri"
          fill="none"
          stroke="#F6019D"
          stroke-width="5"
          d="M250,50 L25,275 L675,550 Z"
        />
        <path
          id="cyantri"
          fill="none"
          stroke="#2DE2D6"
          stroke-width="5"
          d="M75,150 L175,550 L785,50 Z"
        />
      </svg>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="bevel">
            <!-- filter stuff happening here -->
            <feMorphology
              operator="dilate"
              radius="3"
              in="SourceGraphic"
              result="bevel"
            />
          </filter>
        </defs>
      </svg>
      <div
        class="name flex flex-col space-y-1.5 md:flex-row md:space-x-5 md:space-y-0 justify-center self-center absolute"
      >
        <span
          class="chrome text-xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-9xl text-center"
          data-text="JEREMY"
          >JEREMY</span
        ><span
          class="chrome text-xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-9xl text-center"
          data-text="KOLASSA"
          >KOLASSA</span
        >
      </div>
      <svg
        id="webdesign"
        version="1.1"
        viewBox="0 0 129.27 44.461"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute bottom-0 place-self-center"
      >
        <g
          transform="translate(-25.937 -104.84)"
          font-family="Stingray"
          font-size="19.756px"
          stroke-width=".26458"
        >
          <text
            transform="rotate(-15.073)"
            x="-8.3579836"
            y="148.06142"
            fill="#f6019d"
            style="line-height: 1.25"
            xml:space="preserve"
          >
            <tspan
              x="-8.3579836"
              y="148.06142"
              fill="#f6019d"
              stroke-width=".26458"
            >
              Web Design
            </tspan>
          </text>
          <text
            transform="rotate(-15.073)"
            x="-9.0762415"
            y="147.70229"
            fill="#2de2d6"
            style="line-height: 1.25"
            xml:space="preserve"
          >
            <tspan
              x="-9.0762415"
              y="147.70229"
              fill="#2de2d6"
              stroke-width=".26458"
            >
              Web Design
            </tspan>
          </text>
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

#triangles {
  overflow: visible;
}

#pinktri,
#cyantri {
  animation: draw 5s linear;
  animation-fill-mode: forwards;
  stroke-linecap: square;
  z-index: 5;
}

#pinktri {
  stroke-dasharray: 1736;
  stroke-dashoffset: 1736;
  filter: drop-shadow(5px 5px 5px rgb(45, 226, 214, 0.75));
}

#cyantri {
  stroke-dasharray: 2083;
  stroke-dashoffset: 2083;
  filter: drop-shadow(5px 5px 5px rgb(246, 1, 157, 0.75));
}

@keyframes draw {
  from {
    stroke-dashoffset: 1680;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.chrome {
  font-family: "Squarish Sans CT", sans-serif;
  background-image: linear-gradient(
    #241734 25%,
    #2de2e6 50%,
    #fdf9f7 50%,
    #66183c 53%,
    #d40078 57%,
    #cfcfcf 90%
  );

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.1rem;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.2);
}

.chrome:before {
  content: attr(data-text);
  background: linear-gradient(
      #cfcfcf 20%,
      #aff1f2 30%,
      #78bbbd 50%,
      #129a9e 70%,
      #cfcfcf 90%
    )
    0% 0% repeat;
  -webkit-background-clip: text;
  background-clip: text;
  position: absolute;
  z-index: -1;
  filter: url(#bevel);
}

.chrome:after {
  content: attr(data-text);
  position: absolute;
  text-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
  transform: translate(-100%);
  z-index: -2;
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

<script>
export default {
  name: "IntroLogo",
  data() {
    return {
      notReady: true,
    };
  },
  methods: {
    activate() {
      var v = this;
      setTimeout(function () {
        v.notReady = false;
      }, 5000);
    },
  },
  created() {
    this.activate();
  },
};
</script>
