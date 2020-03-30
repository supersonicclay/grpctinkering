# gRPC Tinkering

## Getting Started

### Clone repo

```
git clone https://github.com/supersonicclay/gotinkering.git ~/go/src/supersonicclay/gotinkering
cd ~/go/src/supersonicclay/gotinkering
```

### Run Server (Go)

```
cd server
go run main.go
```

### Run Roxy (Envoy)

```
docker-compose up -d
```

### Run Client (React)

```
cd groceries-app
yarn install
yarn start
```
