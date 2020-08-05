const fs = require('fs');

// Read File
fs.readFile('./text/start.txt',  "utf-8", (err, data1)=> {
    if (err) return console.log('ERROR!')
        console.log("Data 1 :", data1)
    fs.readFile(`./text/${data1}.txt`,  "utf-8", (err, data2)=> {
        console.log('Data 2 :', data2)
        fs.readFile(`./text/append.txt`,  "utf-8", (err, data3)=> {
            console.log('Data 3 : ', data3)
            fs.writeFile('./text/about-me',`${data2 + data3}`, 'utf-8' , err => {
                console.log("Your file has been written")
            })
        })
    })
})
console.log('Will read file!')

