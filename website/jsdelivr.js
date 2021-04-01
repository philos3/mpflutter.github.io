const fs = require('fs');

String.prototype.replaceAll = function (FindText, RepText) { 
    regExp = new RegExp(FindText, "g"); 
    return this.replace(regExp, RepText); 
}

function scanDir(path) {
    fs.readdirSync(path).forEach(it => {
        const p = `${path}${it}`;
        if (fs.lstatSync(p).isDirectory()) {
            scanDir(p + "/");
        }
        else if (it.endsWith(".html")) {
            let content = fs.readFileSync(p, {encoding: "utf-8"})
            content = content.replaceAll(`<script src="/zh/`, `<script src="https://cdn.jsdelivr.net/gh/mpflutter/mpflutter.github.io@master/zh/`)
            content = content.replaceAll(`<link rel="preload" href="/zh/`, `<link rel="preload" href="https://cdn.jsdelivr.net/gh/mpflutter/mpflutter.github.io@master/zh/`)
            content = content.replaceAll(`<link rel="stylesheet" href="/zh/`, `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mpflutter/mpflutter.github.io@master/zh/`)
            fs.writeFileSync(p, content)
        }
    })
}

scanDir("../zh/")
