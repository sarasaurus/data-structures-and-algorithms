const add = (n) => {
  if (n < 20) {
    return add(n); // ?
  } return n; // ?
};

add(2); // ?