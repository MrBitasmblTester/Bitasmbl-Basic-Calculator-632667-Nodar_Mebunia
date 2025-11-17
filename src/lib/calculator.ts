// arithmetic helpers
export function add(a:number,b:number){return a+b}
export function sub(a:number,b:number){return a-b}
export function mul(a:number,b:number){return a*b}
// return 'Error' on divide-by-zero
export function div(a:number,b:number){return b===0? 'Error' : a/b}