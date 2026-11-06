document.documentElement.classList.add('js');
const menuButton=document.querySelector('.menu-toggle');
const nav=document.getElementById('main-nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open)});}
const search=document.getElementById('publication-search');
const year=document.getElementById('publication-year');
if(search&&year){
  document.querySelector('.publication-controls').hidden=false;
  const rows=Array.from(document.querySelectorAll('.publication-item'));
  const groups=Array.from(document.querySelectorAll('.publication-year-group'));
  const normalize=s=>s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const texts=rows.map(r=>normalize(r.textContent));
  function filter(){
    const terms=normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let count=0;
    rows.forEach((row,i)=>{const match=(year.value==='all'||row.dataset.year===year.value)&&terms.every(t=>texts[i].includes(t));row.hidden=!match;if(match)count++;});
    groups.forEach(group=>{group.hidden=!Array.from(group.querySelectorAll('.publication-item')).some(row=>!row.hidden);});
    document.getElementById('publication-count').textContent=`${count} of ${rows.length} entries`;
    document.querySelector('.no-results').hidden=count!==0;
  }
  search.addEventListener('input',filter);year.addEventListener('change',filter);filter();
}
