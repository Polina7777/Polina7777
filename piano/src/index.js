import "./style.scss";
import { keys } from "./data.js";


class Piano {
    constructor(Keys) {
        this.Keys = Keys;
        this.whiteIndex = 0;
        this.blackIndex = 1;
        this.keyWidthWhite = 50;
        this.keyWidthBlack = 30;
    }


    generatePianoKey = (title, type,keyButton,audio) => {
        const key = document.createElement('div');
        key.className = (`key  key_${type}  ${title.ru}`);
        key.id = keyButton;
        const keyNameRu = document.createElement('p');
        keyNameRu.className = ('key_name key_name_ru active');
        keyNameRu.innerText = (`${title.ru}`);
        const keyNameEn = document.createElement('p');
        keyNameEn.className = ('key_name key_name_en');
        keyNameEn.innerText = (`${title.en}`);
        const leftStep = this.keyWidthWhite * this.whiteIndex;

        if (type === 'white') {
            key.style.width = `${this.keyWidthWhite}px`;
            key.style.left = `${leftStep}px`;
            this.whiteIndex += 1;
        } else {
            key.style.width = `${this.keyWidthBlack}px`;
            key.style.left = `${((leftStep + this.keyWidthWhite) - this.keyWidthBlack) - 35}px`;

        }
        key.append(keyNameRu);
        key.append(keyNameEn);
        return key;
    }
    generatePart = (item, colorkeys) => {
        const part = [];
            part.push(...colorkeys.map((item, index) => this.generatePianoKey(item.title, item.type, item.keyButton)));
        
        return part;
    }
    generatePiano = (container) => {
        const piano = document.createElement('div');
        piano.className = ('piano__keys');
        piano.append(...this.generatePart('white', this.Keys));
        piano.style.width = `${this.keyWidthWhite * this.whiteIndex + 8}px`;
        piano.style.height = `${258}px`
        this.eventHandlerKeys(piano);
        container.append(piano);
    }
    eventHandlerKeys = (piano) => {
        piano.addEventListener('mousedown', (e) => {
            console.log('mousedown')
            if (e.target.classList.contains('key')) {
                let clickedKey = e.target;
                this.selectClickedKey(clickedKey);

            }
        })
        piano.addEventListener('mouseup', (e) => {
            console.log('mouseup')
            if (e.target.classList.contains('key')) {
                let clickedKey = e.target;
                this.removeSelectedKeys(clickedKey);
            }
        })
    }
    removeSelectedKeys = (key) => {
        key.classList.remove(`active`);

    }
    selectClickedKey = (key) => {
        key.classList.add(`active`);
        console.log(key);
    }
}

window.onload = function () {
    console.log('Hello');
    const newPiano = new Piano(keys);
    document.body.innerHTML = '<div id="container"></div>';
    const piano = document.querySelector('#container');
    newPiano.generatePiano(piano);
    generateLanguageButton();
  
}
const generateLanguageButton = () => {
    const buttonKeyRu = document.createElement('button');
    buttonKeyRu.className = ('button button_ru');
    buttonKeyRu.innerText = ('Ru');
    eventHandlerLanguageButton(buttonKeyRu,'ru');
    const buttonKeyEn = document.createElement('button');
    buttonKeyEn.className = ('button button_en');
    buttonKeyEn.innerHTML = ('En');
    eventHandlerLanguageButton(buttonKeyEn,'en');
    document.body.append(buttonKeyEn);
    document.body.append(buttonKeyRu);
}
const eventHandlerLanguageButton = (button,lang) => {
    button.addEventListener('click', (e) => {
       document.querySelectorAll('.key_name').forEach(key => {
          if( key.classList.contains(`key_name_${lang}`)) {
              key.classList.add(`active`);
          }else {
              key.classList.remove(`active`);
          }
       })
    })
}

document.addEventListener('keydown', (e) => {
   console.log(e);
   const klawkey = document.getElementById(e.code);
   klawkey?.classList.add(`active`);
}
)
document.addEventListener('keyup', (e) => {
    console.log(e);
     const klawkey = document.getElementById(e.code);
     klawkey?.classList.remove(`active`);
 }

)

