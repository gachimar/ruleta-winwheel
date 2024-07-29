function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const removeAllChildNodes = (parent) => {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
      }
  }

  const animalitos_assets =
[
     {code:"empty", url: './assets/signos/empty.png', nombre: "" },
     {code:"00", url: './assets/signos/00BALLENA.png', nombre: "ballena" },
     {code:"0", url: './assets/signos/0DELFIN.png', nombre: "delfín" },
     {code:"1", url: './assets/signos/01CARNERO.png', nombre: "carnero" },
     {code:"2", url: './assets/signos/02TORO.png', nombre: "toro" },
     {code:"3", url: './assets/signos/03CIEMPIES.png', nombre: "ciempies" },
     {code:"4", url: './assets/signos/04ALACRAN.png', nombre: "alacrán" },
     {code:"5", url: './assets/signos/05LEON.png', nombre: "león" },
     {code:"6", url: './assets/signos/06RANA.png', nombre: "rana" },
     {code:"7", url: './assets/signos/07PERICO.png', nombre: "perico" }, 
     {code:"8", url: './assets/signos/08RATON.png', nombre: "ratón" },
     {code:"9", url: './assets/signos/09AGUILA.png', nombre: "águila" },
     {code:"10", url: './assets/signos/10TIGRE.png', nombre: "tigre" },
     {code:"11", url: './assets/signos/11GATO.png', nombre: "gato" },
     {code:"12", url: './assets/signos/12CABALLO.png', nombre: "caballo" },
     {code:"13", url: './assets/signos/13MONO.png', nombre: "mono" },
     {code:"14", url: './assets/signos/14PALOMA.png', nombre: "paloma" },
     {code:"15", url: './assets/signos/15ZORRO.png', nombre: "zorro" },
     {code:"16", url: './assets/signos/16OSO.png', nombre: "oso" },
     {code:"17", url: './assets/signos/17PAVO.png', nombre: "pavo" },
     {code:"18", url: './assets/signos/18BURRO.png', nombre: "burro" },
     {code:"19", url: './assets/signos/19CHIVO.png', nombre: "chivo" },
     {code:"20", url: './assets/signos/20COCHINO.png', nombre: "cochino" },
     {code:"21", url: './assets/signos/21GALLO.png', nombre: "gallo" },
     {code:"22", url: './assets/signos/22CAMELLO.png', nombre: "camello" },
     {code:"23", url: './assets/signos/23CEBRA.png', nombre: "cebra" },
     {code:"24", url: './assets/signos/24IGUANA.png', nombre: "iguana" },
     {code:"25", url: './assets/signos/25GALLINA.png', nombre: "gallina" },
     {code:"26", url: './assets/signos/26VACA.png', nombre: "vaca" },
     {code:"27", url: './assets/signos/27PERRO.png', nombre: "perro" },
     {code:"28", url: './assets/signos/28ZAMURO.png', nombre: "zamuro" },
     {code:"29", url: './assets/signos/29ELEFANTE.png', nombre: "elefante" },
     {code:"30", url: './assets/signos/30CAIMAN.png', nombre: "caiman" },
     {code:"31", url: './assets/signos/31LAPA.png', nombre: "lapa" },
     {code:"32", url: './assets/signos/32ARDILLA.png', nombre: "ardilla" },
     {code:"33", url: './assets/signos/33PESCADO.png', nombre: "pescado" },
     {code:"34", url: './assets/signos/34VENADO.png', nombre: "venado" },
     {code:"35", url: './assets/signos/35JIRAFA.png', nombre: "jirafa" },
     {code:"36", url: './assets/signos/36CULEBRA.png', nombre: "culebra" },
     {code:"37", url: './assets/signos/37MARIPOSA.png', nombre: "mariposa" },
     {code:"38", url: './assets/signos/37tortuga.png', nombre: "tortuga" },
     {code:"39", url: './assets/signos/38bufalo.png', nombre: "bufalo" },
     {code:"40", url: './assets/signos/38CONEJO.png', nombre: "conejo" },
     {code:"41", url: './assets/signos/39lechuza.png', nombre: "lechuza" },
     {code:"42", url: './assets/signos/40avispa.png', nombre: "avispa" },
     {code:"43", url: './assets/signos/41canguro.png', nombre: "canguro" },
     {code:"44", url: './assets/signos/42tucan.png', nombre: "tucán" },
     {code:"45", url: './assets/signos/44chiguire.png', nombre: "chigüire" },
     {code:"46", url: './assets/signos/45garza.png', nombre: "garza" },
     {code:"47", url: './assets/signos/46puma.png', nombre: "puma" },
     {code:"48", url: './assets/signos/47pavoreal.png', nombre: "pavo real" },
     {code:"49", url: './assets/signos/48puercoespin.png', nombre: "puercoespín" },
     {code:"50", url: './assets/signos/49pereza.png', nombre: "pereza" },
     {code:"51", url: './assets/signos/50canario.png', nombre: "canario" },
     {code:"52", url: './assets/signos/51pelicano.png', nombre: "pelicano" },
     {code:"53", url: './assets/signos/52pulpo.png', nombre: "pulpo" },
     {code:"54", url: './assets/signos/53caracol.png', nombre: "caracol" },
     {code:"55", url: './assets/signos/54grillo.png', nombre: "grillo" },
     {code:"56", url: './assets/signos/55hormiguero.png', nombre: "hormiguero" },
     {code:"57", url: './assets/signos/56tiburon.png', nombre: "tiburón" },
     {code:"58", url: './assets/signos/57pato.png', nombre: "pato" },
     {code:"59", url: './assets/signos/58hormiga.png', nombre: "hormiga" },
     {code:"60", url: './assets/signos/59pantera.png', nombre: "pantera" },
     {code:"61", url: './assets/signos/60camaleon.png', nombre: "camaleón" },
     {code:"62", url: './assets/signos/61panda.png', nombre: "panda" },
     {code:"63", url: './assets/signos/62cachicamo.png', nombre: "cachicamo" },
     {code:"64", url: './assets/signos/63cangrejo.png', nombre: "cangrejo" },
     {code:"65", url: './assets/signos/64gavilan.png', nombre: "gavilán" },
     {code:"66", url: './assets/signos/65arana.png', nombre: "araña" },
     {code:"67", url: './assets/signos/66lobo.png', nombre: "lobo" },
     {code:"68", url: './assets/signos/67avestruz.png', nombre: "avestruz" },
     {code:"69", url: './assets/signos/68jaguar.png', nombre: "jaguar" },
     {code:"70", url: './assets/signos/70bisonte.png', nombre: "bisonte" },
     {code:"71", url: './assets/signos/71guacamaya.png', nombre: "guacamaya" },
     {code:"72", url: './assets/signos/72gorila.png', nombre: "gorila" },
     {code:"73", url: './assets/signos/73hipopotamo.png', nombre: "hipopotamo" },
     {code:"74", url: './assets/signos/74turpial.png', nombre: "turpial" },
     {code:"75", url: './assets/signos/75guacharo.png', nombre: "guacharo" },
]
  
  // List of prizes
  const prizes = [
      'https://assets.gamersclub.com.br/marketplace/double-rating-points-20-matches-sub',
    'https://assets.gamersclub.com.br/marketplace/dot-say-desenrola-bate-morre-de-ladinho',
    'https://assets.gamersclub.com.br/marketplace/medal-trevo-dourado-loja',
    'https://assets.gamersclub.com.br/marketplace/gold_bulk.png',
    'https://assets.gamersclub.com.br/marketplace/medal-slot-flash',
  ]
  
  const slots = document.getElementsByClassName('slot');
  const defaultSize = 100;
  const totalDuplicates = 7;
  
  // Clear slots and recreate random list of images
  const buildItemLists = (playerWon, winningItem, randomDifference) => {  
    // Iterate through the slot html elements
    Array.prototype.forEach.call(slots, (slot, s) => {
      let prizeBlocks = document.createElement('div');
      prizeBlocks.classList.add('slot-machine__prizes');
      
      // Generate prize log
      const log = document.getElementById("log");
        log.innerHTML= `Ganhou: ${playerWon ? "Sim" : "Não"}<br> ${playerWon ? `Item sorteado: ${winningItem}` : ""}`;
  
          // Multiply and shuffle prize images for visual purposes
      randomPrizes = shuffle(prizes.flatMap(i => Array(totalDuplicates).fill(i)));
      randomPrizes.forEach((prize) => {
        let prizeElement = document.createElement('img');
        prizeElement.setAttribute('src', prize);
        prizeElement.setAttribute('width', defaultSize);
        prizeElement.setAttribute('height', defaultSize);
        prizeBlocks.appendChild(prizeElement);
      })
  
          // Adds the result to the last row
      if (playerWon) {
        let winningElement = document.createElement('img');
        winningElement.setAttribute('src', winningItem);
        winningElement.setAttribute('width', defaultSize);
        winningElement.setAttribute('height', defaultSize);
        prizeBlocks.appendChild(winningElement);
      } else {
          const position = s < 2 ? 0 : s;
          let negativeResult = document.createElement('img');
        negativeResult.setAttribute('src', prizes[position + randomDifference]);
        negativeResult.setAttribute('width', defaultSize);
        negativeResult.setAttribute('height', defaultSize);
        prizeBlocks.appendChild(negativeResult);
      }
  
          // Clear the slots and add the new ones
          removeAllChildNodes(slot);
      slot.appendChild(prizeBlocks);
    });
  }
  
  // Builds the slots for the first time
  buildItemLists(false, '');
  
  // Determine whether the player won and start the spinning animation
  const startAnimation = () => {

    const playerWon = Math.random() < 0.5;
    
    // Get a random item from the prizes array
    const winningItem = prizes[getRandomInt(0, prizes.length - 1)];
    
    // Get random difference for negative result (¿ES POR HABER PERDIDO?)
    const randomDifference = getRandomInt(0, prizes.length - 3);
    
    // Rebuild the items list with the result
    buildItemLists(playerWon, winningItem, randomDifference);
    
    // Determine the total height to be animated  
    const totalHeight = prizes.length * totalDuplicates * defaultSize;
    
    // Animate each one of the slots
    const items = document.getElementsByClassName('slot-machine__prizes');
    Array.prototype.forEach.call(items, (slot, s) => {
      slot.animate([
        {
          transform: "translateY(0)"
        },
        {
          transform: `translateY(-${totalHeight}px)`
        }
      ], {
        duration: 4000 + (s * 500),
        fill: "forwards",
        easing: 'ease-in-out'
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const start = document.getElementById('start');
    start.addEventListener('click', () => startAnimation());
  })