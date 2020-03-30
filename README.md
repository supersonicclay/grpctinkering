# gRPC Tinkering

## Getting Started

### Clone repo

```
git clone https://github.com/supersonicclay/grpctinkering.git ~/go/src/supersonicclay/grpctinkering
cd ~/go/src/supersonicclay/grpctinkering
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
