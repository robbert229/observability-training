package accounts

import (
	"context"
	"strings"
	"time"
	"errors"
)

type Server struct {}

func (s Server) Validate(ctx context.Context, req *ValidateRequest) (*ValidateResponse, error) {
	// here we allow for an intentionally slow response.
	if strings.Contains(req.Token, "slow") {
		time.Sleep(time.Second * 3)
	}

	// here we allof for an intentional failure.
	if strings.Contains(req.Token, "fail") {
		return nil, errors.New("failed!")
	}

	return &ValidateResponse{Allowed: true}, nil
}