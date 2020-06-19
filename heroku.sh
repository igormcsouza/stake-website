#!/bin/bash

heroku container:login
docker tag $1 registry.heroku.com/$2/$3
docker push registry.heroku.com/$2/$3
heroku container:release $3 -a $2