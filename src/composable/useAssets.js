export default function getSrc(logo){
  return new URL(`../assets/${logo}.jpeg`, import.meta.url).href
}

/* export default function getAssets(){
  const jpegs = import.meta.globEager('/src/assets/*.jpeg');

  return {
    cei: jpegs['/src/assets/cei.jpeg'].default,
    cato: jpegs['/src/assets/cato.jpeg'].default,
    bandco: jpegs['/src/assets/bandco.jpeg'].default,
    cki: jpegs['/src/assets/cki.jpeg'].default,
    craft: jpegs['/src/assets/craft.jpeg'].default,
    freddiemac: jpegs['/src/assets/freddiemac.jpeg'].default,
    politemps: jpegs['/src/assets/politemps.jpeg'].default,
    spn: jpegs['/src/assets/spn.jpeg'].default,
    voxglobal: jpegs['/src/assets/voxglobal.jpeg'].default,
  };
}; */

/* export default function getSrc(logo) {
      const path = new URL(`../assets/${logo}.jpeg`, import.meta.url);
      const modules = import.meta.globEager("/src/assets/*.jpegs");
      return modules[path].default;
    } */
  

