#### build image

```bash
docker build -t node-app-image .

```


```bash
docker run -v ${pwd}:/app -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image
```
What is readonly bi-mount?
```bash
docker run -v ${pwd}:/app:ro -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image
```