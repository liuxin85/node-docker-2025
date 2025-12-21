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
```bash
docker run -v ${pwd}:/app:ro -v /app/node_modules --env PORT=4000 -p 3000:4000 -d --name node-app node-app-image
```

Use .env
```bash
docker run -v ${pwd}:/app:ro -v /app/node_modules --env-file ./.env -p 3000:4000 -d --name node-app node-app-image
```

exec sh
```bash
docker exec -it node-app sh 
```
printenv

docker compose
```bash
docker-compose up -d --build
```