import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent implements OnInit{
  title = 'image-gallery';
  isOver18:boolean = true;
  radioValue:any = "";
  pokemonType:string = "";
  showTypeBox:boolean = false;
  activeNav = "About Us";
  userInfo:any = "";
  captionText:any = "";
  goBack(): void {
    const currentIndex = this.thumbnails.indexOf(this.mainImage);
    if (currentIndex > 0) {
      this.setMainImage(this.thumbnails[currentIndex - 1]);
    }
  }
  goForward(): void {
    const currentIndex = this.thumbnails.indexOf(this.mainImage);
    if (currentIndex < this.thumbnails.length - 1) {
      this.setMainImage(this.thumbnails[currentIndex + 1]);
    }
  }

  isFirstImage(): boolean {
    return this.thumbnails.indexOf(this.mainImage) === 0;
  }

  isLastImage(): boolean {
    return this.thumbnails.indexOf(this.mainImage) === this.thumbnails.length - 1;
  }

  images:any[] = [
    {
      path: "./assets/Poke1.jpeg",
      alt: "This is the pokemon1"
    },
    {
      path: "./assets/Poke2.jpeg",
      alt: "This is the pokemon2"     
    },
    {
      path: "./assets/Poke3.jpeg",
      alt: "This is the pokemon3"     
    },
    {
      path: "./assets/Poke4.jpeg",
      alt: "This is the pokemon4"     
    },
    {
      path: "./assets/Poke5.jpeg",
      alt: "This is the pokemon5"     
    },
    {
      path: "./assets/Poke6.jpeg",
      alt: "This is the pokemon6"     
    },
    {
      path: "./assets/Poke7.jpeg",
      alt: "This is the pokemon7"     
    },
    {
      path: "./assets/Poke8.jpeg",
      alt: "This is the pokemon8"     
    },
    {
      path: "./assets/Poke9.jpeg",
      alt: "This is the pokemon9"     
    },
    {
      path: "./assets/Poke10.jpeg",
      alt: "This is the pokemon10"     
    }
  ]

  user:any[] = [
    {
      title: "Assignment1",
      name: "Tuck",
      number: "101472343",
    }
  ]

  captions:any[] = [
    {
    alt: "Evee"
    },
    {
    alt: "Mew"
    },
    {
    alt: "Espeon"
    },
    {
    alt: "Sylveon"
    },
    {
    alt: "Vaporeon"
    },
    {
    alt: "Articuno"
    },
    {
    alt: "Sprigatito"
    },
    {
    alt: "Kleavor"
    },
    {
    alt: "Psyduck"
    },
    {
    alt: "Golem"
    }

  ]

  getCaption(imagePath: string): string {
    const index = this.thumbnails.indexOf(imagePath);
    return this.captions[index]?.alt || '';
  }


  mainImage: string = './assets/Poke1.jpeg'; // Path to your main image
  thumbnails: string[] = [
    './assets/Poke1.jpeg',
    './assets/Poke2.jpeg',
    './assets/Poke3.jpeg',
    './assets/Poke4.jpeg',
    './assets/Poke5.jpeg',
    './assets/Poke6.jpeg',
    './assets/Poke7.jpeg',
    './assets/Poke8.jpeg',
    './assets/Poke9.jpeg',
    './assets/Poke10.jpeg'  
  ];

  ngOnInit(){

  }

  setMainImage(thumbnail: string): void {
    this.mainImage = thumbnail;
  }

  type:string[] = [
    "type1", "type2", "type3", "type4", "type5", "type6", "type7", "type8", "type9", "type10"
  ]
}

