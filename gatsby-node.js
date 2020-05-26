/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const fs = require("fs")

// REF https://github.com/gatsbyjs/gatsby/issues/14703

// workflow -- 
// 1. gatsby build
// 2. create local branch
// 3. commit changes
// 4. publish branch
// 5. merge to master
exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    if(!fs.existsSync(path.join(__dirname, "public"))) fs.mkdirSync(path.join(__dirname, "public"))
    fs.renameSync(
      path.join(__dirname, "drowe-dev-live", ".git"),
      path.join(__dirname, "public", ".git")
    )
    fs.rmdirSync(path.join(__dirname, "drowe-dev-live"), { recursive: true })
  }
}

exports.onPostBuild = () => {
  fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "drowe-dev-live"))
}