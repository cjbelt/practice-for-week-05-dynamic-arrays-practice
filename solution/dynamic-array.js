class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = [];

    for (let i = 0; i < defaultSize; i++) {
      this.data[i] = undefined;
    }
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  unshift(val) {

    // Your code here
    for (let i = this.length - 1; i >= 0; i--) {
      if (!this.length === this.capacity) {
        for (let j = 0; j < 4; j++) {
          this.data[j] = undefined;
          this.capacity++;
        }
      }

      this.data[i + 1] = this.data[i];
    }

    this.data[0] = val;
    this.length++;
  }

}


module.exports = DynamicArray;
