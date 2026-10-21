document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth'})}})});
const contactCard=document.querySelector('#contact-card');
const copyButton=document.querySelector('[data-copy]');
if(copyButton){copyButton.addEventListener('click',async event=>{const button=event.currentTarget;await navigator.clipboard.writeText(button.dataset.copy);const label=button.querySelector('b');label.textContent='copied';setTimeout(()=>label.textContent='copy',1200)})}
