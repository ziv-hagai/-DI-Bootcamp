// 1.Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

// 2.Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

// 3.Instantiate a new Video instance and call the watch() method.

// 4.Instantiate a second Video instance with different values.

// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.

// 6. Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
}

let clip = new Video("batman", 'John', 11);
clip.watch();

let clipTwo = new Video("superman", 'Jo', 12);
clipTwo.watch();
