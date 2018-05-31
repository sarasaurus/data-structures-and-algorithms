
'use strict';

const leftJoin = (synonymMap, antonymMap) =>{
  // const collection = new Map();
  const collection = new Map();
  console.log(collection, 'COLLECTION');
  console.log(synonymMap);
  console.log(antonymMap);
  for (const key in synonymMap) { //eslint-disable-line
    console.log(key);
    if (antonymMap[key]) {
      collection.set(key, [synonymMap[key], antonymMap[key]]);
    } else {
      collection.set(key, [synonymMap[key], 'null']);
    }
  }
  console.log(collection, 'COLLECTION');
  return collection;
};
export default leftJoin;

// notes
/**
 * output[a.key] = [];
 * output[a.key].push[a[key]]
 * if b.key => 
 * output[a.key].push[b[key]]
 * else output[a.key].push['null']
 * 
 */

const synonyms = {
  fond: 'enamored',
  wrath: 'anger',
  diligent: 'employed',
  outfit: 'garb',
  guide: 'usher',
};
const antonyms = {
  fond: 'averse',
  wrath: 'delight',
  diligent: 'idle',
  flow: 'jam',
  guide: 'follow',
};

const mapA = new Map();
for (const key in synonyms) { //eslint-disable-line
  mapA.set(key, synonyms[key]);
}
const mapB = new Map();
for (const key in antonyms) { //eslint-disable-line
  mapB.set(key, antonyms[key]);
}
  
leftJoin(synonyms, antonyms);
