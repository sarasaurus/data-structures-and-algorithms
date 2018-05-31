import leftJoin from '../left-join';


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

describe('testing left join function', () => {
  const mapA = new Map();
  for (const key in synonyms) { //eslint-disable-line
    mapA.set(key, synonyms[key]);
  }
  const mapB = new Map();
  for (const key in antonyms) { //eslint-disable-line
    mapB.set(key, antonyms[key]);
  }
  

  test('it should left-join to Map a', () => {
    expect(leftJoin(mapA, mapB)).toContain(mapA);
    expect(leftJoin(mapA, mapB)).toContain(mapB);
  });
});
