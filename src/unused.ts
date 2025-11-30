export function unusedA(){ console.log("unused A"); }
export const unusedValue = 42;
export function heavyButUnused(){ return Array.from({length:1000},(_,i)=>i).map(n=>n*2); }
