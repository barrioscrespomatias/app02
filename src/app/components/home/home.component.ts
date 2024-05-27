import { Component, DestroyRef, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


interface Sound {
  [category: string]: {
    [item: string]: {
      [language: string]: string;
    };
  };
}

interface Asset {
  name: string;
  imagePath: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  idioma: string = 'espanol';
  elemento: 'animales' | 'colores' | 'numeros' = 'animales';
  assetBasePath: string = 'assets/';
  audioPath: string = 'audios/';
  imagePath: string = 'images/';

  isVertical = false;

  //#region Assets configuration

  assets: { [category: string]: Asset[] } = {
    animales: [
      { name: 'gato', imagePath: 'animales/gato.jpeg' },
      { name: 'perro', imagePath: 'animales/perro.jpeg' },
      { name: 'leon', imagePath: 'animales/leon.jpeg' },
      { name: 'caballo', imagePath: 'animales/caballo.jpeg' },
      { name: 'mono', imagePath: 'animales/mono.jpeg' },
      { name: 'cerdo', imagePath: 'animales/cerdo.jpeg' },
    ],
    colores: [
      { name: 'rojo', imagePath: 'colores/rojo.jpg' },
      { name: 'amarillo', imagePath: 'colores/amarillo.jpg' },
      { name: 'celeste', imagePath: 'colores/celeste.jpg' },
      { name: 'naranja', imagePath: 'colores/naranja.jpg' },
      { name: 'rosa', imagePath: 'colores/rosa.jpg' },
      { name: 'verde', imagePath: 'colores/verde.jpg' },
    ],
    numeros: [
      { name: 'uno', imagePath: 'numeros/uno.jpg' },
      { name: 'dos', imagePath: 'numeros/dos.jpg' },
      { name: 'tres', imagePath: 'numeros/tres.jpg' },
      { name: 'cuatro', imagePath: 'numeros/cuatro.jpg' },
      { name: 'cinco', imagePath: 'numeros/cinco.jpg' },
      { name: 'seis', imagePath: 'numeros/seis.jpg' },
    ]
  };

  sonidos: Sound = {
    animales: {
      gato: {
        espanol: 'animales/gato/gato-espanol.mp3',
        ingles: 'animales/gato/gato-ingles.mp3',
        portugues: 'animales/gato/gato-portugues.mp3',
      },
      perro: {
        espanol: 'animales/perro/perro-espanol.mp3',
        ingles: 'animales/perro/perro-ingles.mp3',
        portugues: 'animales/perro/perro-portugues.mp3',
      },
      caballo: {
        espanol: 'animales/caballo/caballo-espanol.mp3',
        ingles: 'animales/caballo/caballo-ingles.mp3',
        portugues: 'animales/caballo/caballo-portugues.mp3',
      },
      cerdo: {
        espanol: 'animales/cerdo/cerdo-espanol.mp3',
        ingles: 'animales/cerdo/cerdo-ingles.mp3',
        portugues: 'animales/cerdo/cerdo-portugues.mp3',
      },
      mono: {
        espanol: 'animales/mono/mono-espanol.mp3',
        ingles: 'animales/mono/mono-ingles.mp3',
        portugues: 'animales/mono/mono-portugues.mp3',
      },
      leon: {
        espanol: 'animales/leon/leon-espanol.mp3',
        ingles: 'animales/leon/leon-ingles.mp3',
        portugues: 'animales/leon/leon-portugues.mp3',
      }
    },
    colores: {
      rojo: {
        espanol: 'colores/rojo/rojo-espanol.mp3',
        ingles: 'colores/rojo/rojo-ingles.mp3',
        portugues: 'colores/rojo/rojo-portugues.mp3',
      },
      amarillo: {
        espanol: 'colores/amarillo/amarillo-espanol.mp3',
        ingles: 'colores/amarillo/amarillo-ingles.mp3',
        portugues: 'colores/amarillo/amarillo-portugues.mp3',
      },
      verde: {
        espanol: 'colores/verde/verde-espanol.mp3',
        ingles: 'colores/verde/verde-ingles.mp3',
        portugues: 'colores/verde/verde-portugues.mp3',
      },
      celeste: {
        espanol: 'colores/celeste/celeste-espanol.mp3',
        ingles: 'colores/celeste/celeste-ingles.mp3',
        portugues: 'colores/celeste/celeste-portugues.mp3',
      },
      naranja: {
        espanol: 'colores/naranja/naranja-espanol.mp3',
        ingles: 'colores/naranja/naranja-ingles.mp3',
        portugues: 'colores/naranja/naranja-portugues.mp3',
      },
      rosa: {
        espanol: 'colores/rosa/rosa-espanol.mp3',
        ingles: 'colores/rosa/rosa-ingles.mp3',
        portugues: 'colores/rosa/rosa-portugues.mp3',
      }
    },
    numeros: {
      uno: {
        espanol: 'numeros/uno/uno-espanol.mp3',
        ingles: 'numeros/uno/uno-ingles.mp3',
        portugues: 'numeros/uno/uno-portugues.mp3',
      },
      dos: {
        espanol: 'numeros/dos/dos-espanol.mp3',
        ingles: 'numeros/dos/dos-ingles.mp3',
        portugues: 'numeros/dos/dos-portugues.mp3',
      },
      tres: {
        espanol: 'numeros/tres/tres-espanol.mp3',
        ingles: 'numeros/tres/tres-ingles.mp3',
        portugues: 'numeros/tres/tres-portugues.mp3',
      },
      cuatro: {
        espanol: 'numeros/cuatro/cuatro-espanol.mp3',
        ingles: 'numeros/cuatro/cuatro-ingles.mp3',
        portugues: 'numeros/cuatro/cuatro-portugues.mp3',
      },
      cinco: {
        espanol: 'numeros/cinco/cinco-espanol.mp3',
        ingles: 'numeros/cinco/cinco-ingles.mp3',
        portugues: 'numeros/cinco/cinco-portugues.mp3',
      },
      seis: {
        espanol: 'numeros/seis/seis-espanol.mp3',
        ingles: 'numeros/seis/seis-ingles.mp3',
        portugues: 'numeros/seis/seis-portugues.mp3',
      }
    },
  };

  //#endregion

  constructor(private navCtrl: NavController, private breakpointObserver: BreakpointObserver, private destroyRef: DestroyRef) {

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      // Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches)
        this.isVertical = false;      
      else
        this.isVertical = true;  
    });
  }

  ngOnInit() {
    
  }

  seleccionarIdioma(idiomaSeleccionado: string) {
    this.idioma = idiomaSeleccionado;
  }

  seleccionarElemento(elementoSeleccionado: 'animales' | 'colores' | 'numeros') {
    this.elemento = elementoSeleccionado;
  }

  reproducirSonido(categoria: string, item: string, idioma: string) {
    const sonido = this.assetBasePath + this.audioPath + this.sonidos[categoria]?.[item]?.[idioma];
    if (sonido) {
      new Audio(sonido).play();
    } else {
      console.error(`No se encontró el sonido para ${item} en ${idioma}`);
    }
  }

  obtenerRutaImagen(categoria: string, item: string): string {
    return `${this.assetBasePath}${this.imagePath}${this.assets[categoria]?.find(i => i.name === item)?.imagePath}`;
  }

  navigateTo(section: string) {
    this.navCtrl.navigateForward(`/${section}`);
  }
}
