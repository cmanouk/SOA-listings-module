const createStorageObj = (result) => {
  const storage = {};
  result.forEach((data) => {
    if (storage[data.criteria]) {
      storage[data.criteria].score += data.score;
      storage[data.criteria].count++;
    } else {
      storage[data.criteria] = {};
      storage[data.criteria].score = data.score;
      storage[data.criteria].count = 1;
    }
  });
  return storage;
};

const createDeliverable = (storage) => {
  const criteriasArray = [];
  let smallestCriteriaCount;
  for (const key in storage) {
    const averageScore = Math.round(storage[key].score / storage[key].count);
    if (!smallestCriteriaCount || storage[key].count < smallestCriteriaCount) {
      smallestCriteriaCount = storage[key].count;
    }
    criteriasArray.push({
      criteria: key,
      averageScore
    });
  }
  return { criteriasArray, smallestCriteriaCount };
};

module.exports = {
  createDeliverable,
  createStorageObj
}