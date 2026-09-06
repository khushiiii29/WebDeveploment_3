const fs = require("fs");

console.log("Creating file...");
fs.writeFile("data.txt", "Lab Assignment1", (err) => {
    if (err) return console.error(err);
    console.log("File created");

    // Read file
    console.log("Reading file...");
    fs.readFile("data.txt", "utf-8", (err, res) => {
        if (err) return console.error(err);
        console.log("File content:", res);

        // Update file
        console.log("Updating file...");
        fs.appendFile("data.txt", "\nLearning Fs Modules", (err) => {
            if (err) return console.error(err);
            console.log("File updated");

            // Delete file
            console.log("Deleting file...");
            fs.unlink("data.txt", (err) => {
                if (err) return console.error(err);
                console.log("File deleted successfully");
            });
        });
    });
});
