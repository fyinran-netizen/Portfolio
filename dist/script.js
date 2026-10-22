document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth'})}})});
const contactCard=document.querySelector('#contact-card');
const copyButton=document.querySelector('[data-copy]');
if(copyButton){copyButton.addEventListener('click',async event=>{const button=event.currentTarget;await navigator.clipboard.writeText(button.dataset.copy);const label=button.querySelector('b');label.textContent='copied';setTimeout(()=>label.textContent='copy',1200)})}
const langToggle=document.querySelector('#lang-toggle');
const translatable=document.querySelectorAll('[data-zh][data-en]');
let language='zh';
function applyLanguage(){translatable.forEach(node=>{node.textContent=language==='zh'?node.dataset.zh:node.dataset.en});if(langToggle){langToggle.textContent=language==='zh'?'EN':'中文';langToggle.setAttribute('aria-label',language==='zh'?'Switch to English':'切换为中文')}document.documentElement.lang=language==='zh'?'zh-CN':'en'}
if(langToggle){langToggle.addEventListener('click',()=>{language=language==='zh'?'en':'zh';applyLanguage()});applyLanguage()}
