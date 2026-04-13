(function(){
  const btnId = 'a11y-toggle';
  const storageKey = 'qstem-a11y';
  const className = 'a11y-active';

  function setState(on){
    if(on) document.documentElement.classList.add(className);
    else document.documentElement.classList.remove(className);
    const btn = document.getElementById(btnId);
    if(btn){
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.textContent = on ? 'A11Y: On' : 'A11Y: Off';
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    const saved = localStorage.getItem(storageKey);
    const active = saved === '1';
    setState(active);
    const btn = document.getElementById(btnId);
    if(!btn) return;
    btn.addEventListener('click', function(){
      const now = !document.documentElement.classList.contains(className);
      setState(now);
      try{ localStorage.setItem(storageKey, now ? '1' : '0'); }catch(e){}
    });
    btn.addEventListener('keydown', function(e){
      if(e.key === ' ' || e.key === 'Enter'){
        e.preventDefault();
        btn.click();
      }
    });
  });
})();
