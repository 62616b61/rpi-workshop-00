BRANCH := $(shell git rev-parse --abbrev-ref HEAD)
STEP := $(subst step,,$(BRANCH))

NEXT_STEP := $(shell echo $$(($(STEP)+1)))
NEXT_BRANCH := $(addsuffix $(NEXT_STEP),step)

PREV_STEP := $(shell echo $$(($(STEP)-1)))
PREV_BRANCH := $(addsuffix $(PREV_STEP),step)

next:
	git -c user.name=test -c user.email=test@test.com stash
	git checkout $(NEXT_BRANCH)
	git -c user.name=test -c user.email=test@test.com stash pop

prev:
	git -c user.name=test -c user.email=test@test.com stash
	git checkout $(PREV_BRANCH)
	git -c user.name=test -c user.email=test@test.com stash pop
