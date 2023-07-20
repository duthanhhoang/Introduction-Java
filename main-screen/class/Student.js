class Student {
    constructor(id,img,name, birtdate, group) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.birtdate = birtdate;
        this.group = group;
    }
    getFirstTermScore() {
        return 9.0;
    }
    getSecondTermScore() {
        return 9.0;
    }
    getFullYearScore() {
        let fullYearScore =
            (this.getFirstTermScore() + 2 * this.getSecondTermScore()) / 3;
        return fullYearScore;
    }
}
