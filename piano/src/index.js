import "./style.scss";

window.onload = function () {
    console.log('Hello');
    generatePiano()
   
}


const generatePiano = () => {
    let template = '';
    const divPianoKeys = document.createElement('div');
    divPianoKeys.className = ('piano__keys');
    divPianoKeys.innerHTML = template;
    document.body.append(divPianoKeys);
    divPianoKeys.append(generateWhitePartOfPianoDiv());
    divPianoKeys.append(generateBlackPartOfPianoDivFirst());
    divPianoKeys.append(generateBlackPartOfPianoDivSecond());
    console.log(divPianoKeys);
    return divPianoKeys;
}

const generateWhitePartOfPianoDiv = () => {
    let template = '';
    const divWhitePart = document.createElement('div');
    divWhitePart.className = ('keys keys_whitepart');
    divWhitePart.innerHTML = template;
    document.body.append(divWhitePart);
   divWhitePart.append(generatePianoKeyWhite());
   divWhitePart.append(generatePianoKeyWhite());
   divWhitePart.append(generatePianoKeyWhite());
   divWhitePart.append(generatePianoKeyWhite());
   divWhitePart.append(generatePianoKeyWhite());
   divWhitePart.append(generatePianoKeyWhite());
   divWhitePart.append(generatePianoKeyWhite());
   divWhitePart.append(generatePianoKeyWhite());
    console.log(divWhitePart);
    return divWhitePart;
 }

 const generateBlackPartOfPianoDivFirst = () => {
    let template = '';
    const divBlackPart = document.createElement('div');
    divBlackPart.className = ('keys keys_blackpart blackpart_first');
    divBlackPart.innerHTML = template;
    document.body.append(divBlackPart);
   divBlackPart.append(generatePianoKeyBlack());
   divBlackPart.append(generatePianoKeyBlack());
    console.log(divBlackPart);
    return divBlackPart;
 }

 const generateBlackPartOfPianoDivSecond = () => {
    let template = '';
    const divBlackPart = document.createElement('div');
    divBlackPart.className = ('keys keys_blackpart blackpart_second');
    divBlackPart.innerHTML = template;
    document.body.append(divBlackPart);
   divBlackPart.append(generatePianoKeyBlack());
   divBlackPart.append(generatePianoKeyBlack());
   divBlackPart.append(generatePianoKeyBlack());
    console.log(divBlackPart);
    return divBlackPart;
 }

const generatePianoKeyWhite = () => {
   let template = '';
   const divKeyWhite = document.createElement('div');
   divKeyWhite.className = ('key key_white');
   divKeyWhite.innerHTML = template;
   document.body.append(divKeyWhite);
   return divKeyWhite;
}


const generatePianoKeyBlack = () => {
    let template = '';
    const divKeyBlack = document.createElement('div');
    divKeyBlack.className = ('key key_black');
    divKeyBlack.innerHTML = template;
    document.body.append(divKeyBlack);
    return divKeyBlack;
 }
 
