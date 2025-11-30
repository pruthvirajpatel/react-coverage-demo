export function unusedA(){ return 'I am not used'; }
export function heavyButUnused() {
  return Array.from({ length: 100 }, (_, i) => i).map((n) => n * 2);
}