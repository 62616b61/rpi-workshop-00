BRANCH := $(shell git rev-parse --abbrev-ref HEAD)
STEP := $(subst step,,$(BRANCH))

NEXT_STEP := $(shell echo $$(($(STEP)+1)))
NEXT_BRANCH := $(addsuffix $(NEXT_STEP),step)

PREV_STEP := $(shell echo $$(($(STEP)-1)))
PREV_BRANCH := $(addsuffix $(PREV_STEP),step)

next:
	git stash
	git checkout $(NEXT_BRANCH)
	git stash apply

prev:
	git stash
	git checkout $(PREV_BRANCH)
	git stash apply
