(function(){
var ba=document.getElementById('ba'),rg=document.getElementById('rg');
rg.addEventListener('input',function(){ba.style.setProperty('--p',rg.value+'%')});
var bg=document.getElementById('bg'),nav=document.getElementById('nav');
bg.addEventListener('click',function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');bg.setAttribute('aria-expanded',false)}});
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();
document.getElementById('ok').textContent='Получихме запитването и ще ви се обадим. (Демо: формата още не изпраща данни.)';this.reset()});
var pd=document.getElementById('pd');document.querySelectorAll('.pvl').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();pd.showModal()})});
if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches){var g=document.getElementById('gr');if(g&&g.ownerSVGElement.pauseAnimations)g.ownerSVGElement.pauseAnimations()}
})();
