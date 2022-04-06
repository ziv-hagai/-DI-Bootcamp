class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
        return this;
    }
}

let clip = new Video("batman", 'John', 11);
clip.watch();


let clipTwo = new Video("superman", 'Jo', 12);
clipTwo.watch();