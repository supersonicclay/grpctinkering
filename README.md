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

## Regenerate grpc code

```
# regenerate go code
protoc groceries.proto  --go_out=plugins=grpc:.

# regenerate web client code
protoc groceries.proto --js_out=import_style=commonjs:../web --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../web
```
