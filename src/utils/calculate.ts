import { Score } from "typings/types";

export const calcMaxCategoryValue = (obj: Score) => {
  const sortedEntriesByVal = Object.entries(obj).sort(
    ([, v1], [, v2]) => v1 - v2
  );
  return {
    max: sortedEntriesByVal[sortedEntriesByVal.length - 1],
  };
};
