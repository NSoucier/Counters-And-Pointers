// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let index1 = 0;
  let index2 = 0;

  while (index2 < str2.length) {
    if (str1[index1] === str2[index2]) {
      index1++;
      index2++;
    } else {
      index2++;
    }

    if (index1 === str1.length) {
      return true;
    }
  }

  return false;
}
