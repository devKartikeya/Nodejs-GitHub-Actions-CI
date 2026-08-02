/* Entry file to be executed by Docker */

/* Dependencies - Jest */

/* Test function */
function add(a, b) {
    return a + b;
}

/* Workflow */
/*
1- Pushing code to GitHub [`git push`]
2- GitHub-Actions reading /github/workflows/ci.yml
3- Setting up fresh runner with Docker pre-installed
4- Cloning repository [`git clone <repository>`]
5- Setting up Node.js and environment
6- Installing dependencies `[npm install`]
7- Running Unit and Integration Tests [`npm test`] 
8- Building Docker Image by using GitHub Secrets
9- Publishing Image to Docker Hub [`docker push`]
*/

module.exports = { add };