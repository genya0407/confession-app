const gap = 100;
const imageSize = 50;
const bgcolorLeft = 'E2ECFF';
const bgcolorRight = 'A5C3FF';

export const RightMessage = {
  props: ['text', 'sent-at', 'img-src'],
  template: `
<div style='margin-left: ${gap}px; width: 100%; display: flex;'>
  <div style='position: relative; width: 4em; font-size: xx-small; color: gray; margin: 3px;'>
    <div style='position: absolute; bottom: 5px;'>
      {{ sentAt.getHours() }}:{{ sentAt.getMinutes() }}
    </div>
  </div>
  <div style='width: 100%; padding: 10px; white-space: pre; background-color: #${bgcolorRight}; box-shadow: 3px 3px 3px rgba(0,0,0,0.4);'>{{ text }}</div>
  <div style='height: ${imageSize}px; width: ${imageSize}px; margin: 5px;'>
    <img v-if='imgSrc' :src="imgSrc" style='max-width: 100%; height: auto;'>
  </div>
</div>`,
};

export const LeftMessage = {
  props: ['text', 'sent-at', 'img-src'],
  template: `
<div style='margin-right: ${gap}px; width: 100%; display: flex;'>
  <div style='height: ${imageSize}px; width: ${imageSize}px; margin: 5px;'>
    <img v-if='imgSrc' :src="imgSrc" style='max-width: 100%; height: auto;'>
  </div>
  <div style='width: 100%; padding: 10px; white-space: pre; background-color: #${bgcolorLeft}; box-shadow: 3px 3px 3px rgba(0,0,0,0.4);'>{{ text }}</div>
  <div style='position: relative; width: 4em; font-size: xx-small; color: gray; margin: 3px; margin-left: 10px;'>
    <div style='position: absolute; bottom: 5px;'>
      {{ sentAt.getHours() }}:{{ sentAt.getMinutes() }}
    </div>
  </div>
</div>`,
};
