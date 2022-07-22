# my-stock backend

## Environment
* Python 3.9
* [Poetry](https://python-poetry.org/)
* [Django](https://www.djangoproject.com/)
* [Black](https://black.readthedocs.io/en/stable/)
* [Docker](https://www.docker.com/)

### How to apply code style
After virtualenv is activated:
```shell
(.venv) $ black .
```

### How to create and start containers
```shell
$ docker-compose up [--build] -d
```

### How to run a one-off command
```shell
$ docker-compose run SERVICE_NAME COMMAND
```
