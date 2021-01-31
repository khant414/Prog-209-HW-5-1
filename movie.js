class Movie {
    constructor(title, rating) {
        (this.title = title), (this.rating = rating);
    }

    isValid() {
        // Rating only goes from 1 - 5 so it's auto validated
        return this.title.length > 0 ? true : false;
    }

    stringify() {
        return (this.title + ", " + this.rating).toString();
    }
}
