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
    // Prendi la posizione dal dataset o default left
    if (block.dataset.textPosition) {
      textPosition = block.dataset.textPosition;
    } else if (block.classList.contains('text-right')) {
      textPosition = 'right';
    }
  }

  // Costruisce la struttura del blocco
  block.innerHTML = `
    <div class="unipolhero-inner">
      <div class="unipolhero-image-wrapper">
        ${imageUrl ? `<img src="${imageUrl}" alt="${imageAlt}" class="unipolhero-image">` : ''}
        <div class="unipolhero-text unipolhero-text-${textPosition}" data-richtext-prop="text" data-aue-prop="text" data-aue-label="Text">
          ${textHtml}
        </div>
      </div>
    </div>
  `;
}
