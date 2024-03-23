import Field from './Field';
import Moving from './Moving';
import AddImage from './AddImage';

document.addEventListener('DOMContentLoaded', () => {
  new Field(document.querySelector('.field'), 4, 4).fieldGenerator();
  const newImage = new AddImage(document.querySelector('.field'));
  const move = new Moving();

  setInterval(() => {
    const step = move.randomStep(4, 4);
    newImage.createImage(step.width, step.height);
  }, 500);
});
