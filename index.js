function produceDrivingRange(blockRange) {
  return function(start, end) {

    let startNum = start.substring(0, 2)
    let endNum = end.substring(0, 2)

    let distance = Math.abs(endNum - startNum);

    if ( distance > blockRange ) {
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`;
    }
  }
}

function produceTipCalculator(tip) {
  return function(amount) {
    return amount * tip;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
