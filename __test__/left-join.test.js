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
  // const mapA = new Map();
  // for (const key in synonyms) { //eslint-disable-line
  //   mapA.set(key, synonyms[key]);
  // }
  // const mapB = new Map();
  // for (const key in antonyms) { //eslint-disable-line
  //   mapB.set(key, antonyms[key]);
  // }
  const testResult = {
    fond: 'averse',
    wrath: 'delight',
    diligent: 'idle',
    outfit: 'null',
    guide: 'follow',
  };
  const testReturn = new Map();
  for (const key in synonyms) { //eslint-disable-line
    testReturn.set(key, [synonyms[key], testResult[key]]);
  }
  test('it should left-join to Map a', () => {
    expect(leftJoin(synonyms, antonyms)).toEqual(testReturn);
  });
});

describe('testing left join function, A is Longer', () => {
  const shortAntonyms = {
    fond: 'averse',
    wrath: 'delight',
  };
  const testResult = {
    fond: 'averse',
    wrath: 'delight',
    diligent: 'null',
    outfit: 'null',
    guide: 'null',
  };
  const testReturn = new Map();
  for (const key in synonyms) { //eslint-disable-line
    testReturn.set(key, [synonyms[key], testResult[key]]);
  }
  test('it should left-join to Map a', () => {
    expect(leftJoin(synonyms, shortAntonyms)).toEqual(testReturn);
  });
});

describe('testing left join function, B is Longer', () => {
  const shortSynonyms = {
    fond: 'enamored',
    wrath: 'anger',
  };
  const testResult = {
    fond: 'averse',
    wrath: 'delight',
  };
  const testReturn = new Map();
  for (const key in shortSynonyms) { //eslint-disable-line
    testReturn.set(key, [shortSynonyms[key], testResult[key]]);
  }
  test('it should left-join to Map a', () => {
    expect(leftJoin(shortSynonyms, antonyms)).toEqual(testReturn);
  });
});
