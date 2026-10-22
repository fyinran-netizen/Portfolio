document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth'})}})});
const contactCard=document.querySelector('#contact-card');
const copyButton=document.querySelector('[data-copy]');
if(copyButton){copyButton.addEventListener('click',async event=>{const button=event.currentTarget;await navigator.clipboard.writeText(button.dataset.copy);const label=button.querySelector('b');label.textContent='copied';setTimeout(()=>label.textContent='copy',1200)})}
const languageSelect=document.querySelector('#language-select');
const translatable=document.querySelectorAll('[data-zh][data-en]');
let language='zh';
function applyLanguage(){translatable.forEach(node=>{node.textContent=language==='zh'?node.dataset.zh:node.dataset.en});if(languageSelect){languageSelect.value=language;languageSelect.setAttribute('aria-label',language==='zh'?'选择语言':'Select language')}document.documentElement.lang=language==='zh'?'zh-CN':'en'}
if(languageSelect){languageSelect.addEventListener('change',event=>{language=event.target.value;applyLanguage()});applyLanguage()}
