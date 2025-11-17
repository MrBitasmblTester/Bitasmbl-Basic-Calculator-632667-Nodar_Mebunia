<script lang="ts">
import {add,sub,mul,div} from '$lib/calculator';
let d='0',l:number|null=null,o:string|null=null;
function num(x:string){d=d==='0'?x:d+x}
function op(v:string){l=Number(d);o=v;d='0'}
function eq(){if(o&&l!==null){const r=Number(d),res=o==='+'?add(l,r):o==='-'?sub(l,r):o==='*'?mul(l,r):div(l,r);d=String(res);l=null;o=null}}
function clr(){d='0';l=null;o=null}
</script>
<main>
  <div class="display">{d}</div>
  <div class="pad">
    <button on:click={()=>num('1')}>1</button>
    <button on:click={()=>num('2')}>2</button>
    <button on:click={()=>num('3')}>3</button>
    <button on:click={()=>op('+')}>+</button>
    <button on:click={eq}>=</button>
    <button on:click={clr}>C</button>
  </div>
</main>
<style>.display{font:24px/48px monospace;padding:8px;border:1px solid #ccc}.pad button{width:48px;height:48px;margin:4px}</style>