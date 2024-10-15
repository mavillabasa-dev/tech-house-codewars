function simulateTraffic(road, n) {
  const auxArray = road.split("");

  let lightTimers = auxArray.map((char) => {
    if (char === "G") return 5;
    if (char === "O") return 1;
    if (char === "R") return 5;
    return null;
  });
  const result = [road];

  for (let index = 0; index < n; index++) {
    const element = auxArray[index];
    for (let i = 0; i < auxArray.length; i++) {
      if (auxArray[i] === "G") {
        lightTimers[i]--;
        if (lightTimers[i] === 0) {
          auxArray[i] = "O";
          lightTimers[i] = 1;
        }
      } else if (auxArray[i] === "O") {
        lightTimers[i]--;
        if (lightTimers[i] === 0) {
          auxArray[i] = "R";
          lightTimers[i] = 5;
        }
      } else if (auxArray[i] === "R") {
        lightTimers[i]--;
        if (lightTimers[i] === 0) {
          auxArray[i] = "G";
          lightTimers[i] = 5;
        }
      }
    }

    const previousStates = [...auxArray];
    for (let i = auxArray.length - 1; i >= 0; i--) {
      if (auxArray[i] === "C") {
        if (auxArray[i + 1] === ".") {
          auxArray[i] = ".";
          auxArray[i + 1] = "C";
        } else if (auxArray[i + 1] === "G") {
          auxArray[i] = previousStates[i];
          auxArray[i + 1] = "C";
        } else if (auxArray[i + 1] === "O" || auxArray[i + 1] === "R") {
          continue;
        }
      }
    }
    result.push(auxArray.join(""));
  }

  return result
}

const road = "CCC.G...R...";
const n = 16;
const result = simulateTraffic(road, n);
console.log("🚀 ~ result:", result)

