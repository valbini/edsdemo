export default function decorate(block) {
  // Recupera i dati dal DOM del block
  const imageDiv = block.querySelector(':scope > div > div');
  const textDiv = block.querySelector(':scope > div > div:nth-child(2)');
  let imageUrl = '';
  let imageAlt = '';
  let textHtml = '';
  let textPosition = 'left';

  if (imageDiv && imageDiv.querySelector('img')) {
    const img = imageDiv.querySelector('img');
    imageUrl = img.src;
    imageAlt = img.alt || '';
  }
  if (textDiv) {
    textHtml = textDiv.innerHTML;
    // Cerca la posizione del testo come data attribute o classe
    if (block.dataset.textPosition) {
      textPosition = block.dataset.textPosition;
    } else if (block.classList.contains('text-right')) {
      textPosition = 'right';
    }
  }

  // Costruisce la struttura del blocco
  block.innerHTML = `
    <div class="unipolhero-inner unipolhero-text-${textPosition}">
      <div class="unipolhero-image">
        ${imageUrl ? `<img src="${imageUrl}" alt="${imageAlt}" data-aue-prop="image" data-aue-label="Image">` : ''}
      </div>
      <div class="unipolhero-text" data-richtext-prop="text" data-aue-prop="text" data-aue-label="Text">
        ${textHtml}
      </div>
    </div>
  `;
}
