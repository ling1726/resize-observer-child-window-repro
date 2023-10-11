document.getElementById("app").innerHTML = `
<div>
  The resize observer from the parent window not trigger resize
  events when observing elements inside the iframe.
</div>
`;

const button = document.getElementById('button');
button.addEventListener('click', () => {
  const win = window.open("", "new", "popup,width=600,height=200");
  win.document.body.innerHTML = '<div id="resizer"></div>'
  const resizer = win.document.getElementById('resizer');

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
})