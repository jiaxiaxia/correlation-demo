import js_beautify from 'js-beautify';
import dedent from 'dedent';
export const customEval = fn => {
  const Fun = Function;
  return new Fun(`return ${fn}`)();
};
export const parseStringToJson = (string) => {
  const json = JSON.parse(string);
  json.documents.forEach(document => {
    document.loadDataByPage = customEval(document.loadDataByPage);
  });
  return json;
}
export function replacer(key, value) {
  // Filtering out properties
  if (typeof value === 'function') {
    return dedent(js_beautify(value.toString()));
  }
  return value;
}