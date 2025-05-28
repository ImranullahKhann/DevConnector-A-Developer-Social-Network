import http from "http"
import path from "path"
import fs from "fs"

const PORT = 8000

const server = http.createServer((req, res) => {
    const file_location = path.resolve("static", "index.html")
    // using relative path
    // let htmlContent = fs.readFileSync("static/index.html", { encoding: "utf-8", flag: "r" })
    // using absolute path
    let htmlContent = fs.readFileSync(file_location, { encoding: "utf-8", flag: "r" })
    let cssContent = fs.readFileSync("static/styles.css", { encoding: "utf-8", flag: "r" })
    let jsContent = fs.readFileSync("static/index.js", { encoding: "utf-8", flag: "r" })

    // Simple Routing
    if (req.url === "/" && req.method === "GET") {
        res.setHeader("Content-Type", "html")
        res.statusCode = 200
        res.write(htmlContent)
    }
    else if (req.url === "/styles.css" && req.method === "GET") {
        res.setHeader("Content-Type", "text/css")
        res.statusCode = 200
        res.write(cssContent)
    }
    else if (req.url === "/index.js" && req.method === "GET") {
        res.setHeader("Content-Type", "text/javascript")
        res.statusCode = 200
        res.write(jsContent)
    }
    res.end(() => {
        console.log(`${req.method} REQUEST ON ${req.url}`)
    })
})

server.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}...`)
})