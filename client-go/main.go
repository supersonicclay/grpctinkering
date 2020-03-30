package main

import (
	"context"
	"log"
	"time"

	pb "github.com/supersonicclay/gotinkering/groceries"
	"google.golang.org/grpc"
)

const (
	address     = "localhost:50051"
	defaultName = "world"
)

func main() {
	// Set up a connection to the server.
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	c := pb.NewGroceriesClient(conn)

	// Contact the server and print out its response.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	r, err := c.GetAll(ctx, &pb.Empty{})
	if err != nil {
		log.Fatalf("could not get all groceries: %v", err)
	}
	log.Printf("Groceries: %s", r.GetMessage())
}
