# node-container
Remote JavaScript execution engine for Syntasso

# Local
* Clone the repository
```
git clone https://github.com/roshanadh/node-container
```
* Install dependencies
```
cd node-container && npm install
```
* Build docker image
```
docker build -t <username>/<image-name> .
```

# Running
* Run the docker container
```
docker run -p 3000:8080 -d <username>/<image-name>
```

* Send a POST request to _**localhost:3000/execute**_ with a key-value pair body
  
  [Key should be 'code' and the JavaScript code should be the value]
  
* Go to _**localhost:3000/**_ to see the JavaScript code running on browser
