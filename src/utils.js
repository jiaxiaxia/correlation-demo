export const customEval = fn => {
  const Fun = Function;
  return new Fun(`return ${fn}`)();
};