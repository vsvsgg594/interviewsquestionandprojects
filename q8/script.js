const counter = {
    _count: 0, // Private property

    // Getter for count
    get count() {
        return this._count;
    },

    // Setter for count
    set count(value) {
        if (typeof value === 'number' && value >= 0) {
            this._count = value;
        } else {
            console.error('Invalid value');
        }
    },

    // Method to increment the counter
    increment() {
        this._count++;
    },

    // Method to reset the counter
    reset() {
        this._count = 0;
    }
};

// Usage
console.log(counter.count); // 0
counter.increment();
console.log(counter.count); // 1
counter.count = 5;
console.log(counter.count); // 5
counter.reset();
console.log(counter.count); // 0
counter.count = -1; // Invalid value
