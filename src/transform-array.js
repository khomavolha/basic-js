module.exports = function transform(arr) {

      if (!Array.isArray(arr)) throw new Error()

      let resume = [];

      for (let i = 0; i < arr.length; i++) {
          if (arr[i] == "--discard-next") {
              i++;
          } else if (arr[i] == "--discard-prev") {
              resume.pop();
          } else if (arr[i] == "--double-next" && i + 1 != arr.length) {
              resume.push(arr[i + 1]);
          } else if (arr[i] == "--double-prev" && i - 1 > 0) {
              resume.push(arr[i - 1]);
          } else if (arr[i] != "--discard-prev" && arr[i] != "--double-prev" && arr[i] != "--double-next" && arr[i] != "--discard-next") {
              resume.push(arr[i]);
          }
      }
      return resume;

  };
