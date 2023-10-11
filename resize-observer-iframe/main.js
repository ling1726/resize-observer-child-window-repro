document.getElementById("app").innerHTML = `
<div>
  The resize observer from the parent document will work
  when observing elements inside the iframe.
</div>
`;

const frame = document.getElementById('frame');

frame.contentDocument.body.innerHTML = '<div id="resizer"></div>'

const resizer = frame.contentDocument.getElementById('resizer');

Object.assign(resizer.style, {
  width: '500px',
  height: '100px',
  border: '1px dashed green',
  resize: 'both',
  overflow: 'hidden',
})

const observer = new ResizeObserver((entries) => {
  document.getElementById('status').innerText = JSON.stringify(entries[0].contentRect, null, 2); 
});

observer.observe(resizer);