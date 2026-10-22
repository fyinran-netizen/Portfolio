document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth'})}})});
const contactCard=document.querySelector('#contact-card');
const copyButtons=document.querySelectorAll('[data-copy]');
copyButtons.forEach(button=>{button.addEventListener('click',async event=>{const target=event.currentTarget;await navigator.clipboard.writeText(target.dataset.copy);const label=target.querySelector('.copy-label');if(label){label.textContent=language==='zh'?'已复制':'Copied';setTimeout(()=>{label.textContent=language==='zh'?'复制':'Copy'},1200)}})});
const languageSelect=document.querySelector('#language-select');
const translatable=document.querySelectorAll('[data-zh][data-en]');
let language='zh';
function applyLanguage(){translatable.forEach(node=>{node.textContent=language==='zh'?node.dataset.zh:node.dataset.en});if(languageSelect){languageSelect.value=language;languageSelect.setAttribute('aria-label',language==='zh'?'选择语言':'Select language')}document.documentElement.lang=language==='zh'?'zh-CN':'en'}
if(languageSelect){languageSelect.addEventListener('change',event=>{language=event.target.value;applyLanguage()});applyLanguage()}
