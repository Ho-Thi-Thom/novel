function randomVocabularies(params) {
  const listVocabulariesRandom = swap(params);
  const result = [];
  listVocabulariesRandom.map((item) => {
    const listEn = listEV(params, 3, item);
    result.push({ ...item, envis: listEn });
  });
  return result;
}
export default randomVocabularies;

function swap(params) {
  const element = [];
  let j = 0;
  let k = params.length;
  for (let i = 0; i < k; i++) {
    element.push(i);
  }
  while (k--) {
    j = Math.floor(Math.random() * (k + 1));
    element.push(element[j]);
    element.splice(j, 1);
  }

  const result = [];
  for (let index = 0; index < element.length; index++) {
    result.push(params[element[index]]);
  }
  return result;
}

function listEV(params, number, value) {
  const data = swap(params);
  const result = data.filter((item) => item !== value);
  const list = [];
  for (let index = 0; index < number; index++) {
    list.push(result[index]);
  }
  let index = Math.floor(Math.random() * list.length);
  list.splice(index, 0, value);
  return list;
}
