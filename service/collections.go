package service

import (
	"context"

	"github.com/wailsapp/wails/v3/pkg/application"
)

type CollectionsService struct {
	app *application.App

	collections []string
}

func NewCollectionsService() *CollectionsService {
	return &CollectionsService{}
}

func (s *CollectionsService) SetApp(app *application.App) {
	s.app = app
}

func (s *CollectionsService) OpenCollection(ctx context.Context) {
	path, err := s.app.Dialog.OpenFile().
		SetTitle("打开集合").
		CanChooseDirectories(true).
		CanChooseFiles(false).
		PromptForSingleSelection()
	if err != nil {

		return
	}
	s.app.Logger.Info(path)

}

type Collection struct {
}
