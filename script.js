const COLORS=['pink','yellow','green','blue','red','orange'];
const ICONS={pink:'👑',yellow:'☀️',green:'☘️',blue:'💧',red:'❤️',orange:'⚡'};
let bolts=[],sel=-1,history=[];

function start(){
  // nível igual da foto: 4 cores, 9 parafusos
  bolts=[
    {nuts:['pink','green'],c:4},
    {nuts:['yellow','green','pink','green'],c:4},
    {nuts:['blue','blue'],c:4},
    {nuts:['green','red','yellow','blue'],c:4},
    {nuts:['yellow','blue','orange','red'],c:4},
    {nuts:['red','yellow','red'],c:4},
    {nuts:['orange','orange','orange'],c:4},
    {nuts:['pink','pink'],c:4},
    {nuts:[],c:4},
  ];
  render();
}
function render(){
  const board=document.getElementById('gameBoard'); board.innerHTML='';
  const rows=[bolts.slice(0,4),bolts.slice(4,9)];
  rows.forEach(r=>{
    const row=document.createElement('div');row.className='board-row';
    r.forEach((b,i)=>{
      const idx=rows[0].length===4 && r!==rows[0]? i+4 : r===rows[0]?i:i;
      const global=board.querySelectorAll('.bolt-slot').length + row.children.length;
      const slot=document.createElement('div');slot.className='bolt-slot'+(b.nuts.length===0&&bolts.indexOf(b)===8?' empty':'')+(sel===bolts.indexOf(b)?' selected':'');
      slot.onclick=()=>click(bolts.indexOf(b));
      const thread=document.createElement('div');thread.className='bolt-thread';thread.style.height=(b.c*38)+'px';
      const stack=document.createElement('div');stack.style.marginTop='-34px';stack.style.zIndex='2';stack.style.position='relative';
      b.nuts.slice().reverse().forEach(col=>{const n=document.createElement('div');n.className='nut nut-'+col;n.innerHTML=`<span class="nut-icon">${ICONS[col]}</span>`;stack.appendChild(n)});
      const base=document.createElement('div');base.className='bolt-base';
      slot.append(thread,stack,base);row.appendChild(slot);
    });board.appendChild(row);
  });
}
function click(i){
  if(sel===-1){if(bolts[i].nuts.length)sel=i}else if(sel===i){sel=-1}else{const f=bolts[sel],t=bolts[i];if(f.nuts.length&&t.nuts.length<t.c&&(!t.nuts.length||f.nuts.at(-1)===t.nuts.at(-1))){t.nuts.push(f.nuts.pop());history.push(1)}sel=-1}render();
}
document.getElementById('btnPlay').onclick=()=>{document.getElementById('home').classList.remove('active');document.getElementById('game').classList.add('active');start()};
document.getElementById('ghBack').onclick=()=>location.reload();
document.getElementById('btnUndo').onclick=()=>{if(history.pop()){start()}};
start();
