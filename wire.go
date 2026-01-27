//go:build wireinject
// +build wireinject

// The build tag makes sure the stub is not built in the final build.

package main

import (
	"context"

	"apexa/service"

	"github.com/google/wire"
	"github.com/wailsapp/wails/v3/pkg/application"
)

// wireApp init application.
func wireApp(
	context.Context,
) (*application.App, error) {
	panic(
		wire.Build(
			service.ProviderSet,
			newApp,
		),
	)
}
