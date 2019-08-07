package accounts

import (
	"context"
)

type Server struct {}

func (s Server) Validate(ctx context.Context, req *ValidateRequest) (*ValidateResponse, error) {
	return &ValidateResponse{Allowed: true}, nil
}