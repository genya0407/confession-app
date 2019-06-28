const gap = 100;

export const RightMessage = {
  props: ['text', 'sent-at'],
  template: `
<div style='margin-left: ${gap}px; width: 100%; display: flex;'>
  <div style='position: relative; width: 4em; font-size: xx-small; color: gray; margin: 3px;'>
    <div style='position: absolute; bottom: 5px;'>
      {{ sentAt.getHours() }}:{{ sentAt.getMinutes() }}
    </div>
  </div>
  <div style='border: solid 1px; width: 100%; padding: 10px; white-space: pre;'>{{ text }}</div>
</div>`,
};

export const LeftMessage = {
  props: ['text', 'sent-at'],
  template: `
<div style='margin-right: ${gap}px; width: 100%; display: flex;'>
  <div style='border: solid 1px; width: 100%; padding: 10px; white-space: pre;'>{{ text }}</div>
  <div style='position: relative; width: 4em; font-size: xx-small; color: gray; margin: 3px;'>
    <div style='position: absolute; bottom: 5px;'>
      {{ sentAt.getHours() }}:{{ sentAt.getMinutes() }}
    </div>
  </div>
</div>`,
};
