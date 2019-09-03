const calories = {
    bmr: null,
    amr: null,
    get result() {
        return this.bmr * this.amr;
    },
    set(target, value) {
        this[target] = value;
    }
};

export default calories;
 