fetch('/Project-Nebula/code/keyboard-shortcuts/open-terminal.md', { cache: "no-store" })
  .then(r => {
    if (!r.ok) throw new Error('Shortcut not found: ' + r.status);
    return r.text();
  })
  .then(texto => {
    const target = document.querySelector('#open-terminal-shortcut');
    target.innerHTML = texto;

  })
  .catch(e => console.error(e));
