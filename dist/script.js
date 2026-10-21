document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth'})}})});
const contactCard=document.querySelector('#contact-card');
document.querySelector('#contact-toggle').addEventListener('click',()=>{const open=contactCard.classList.toggle('is-open');contactCard.setAttribute('aria-hidden',String(!open))});
document.querySelector('#contact-close').addEventListener('click',()=>{contactCard.classList.remove('is-open');contactCard.setAttribute('aria-hidden','true')});
document.querySelector('[data-copy]').addEventListener('click',async event=>{const button=event.currentTarget;await navigator.clipboard.writeText(button.dataset.copy);const label=button.querySelector('b');label.textContent='copied';setTimeout(()=>label.textContent='copy',1200)});
