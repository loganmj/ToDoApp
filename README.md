# ToDoApp
A simple React app that allows users to manage a todo list.
The project includes encapsulated components and uses context hooks to manage state.

## CI/CD
The repository is setup to run a GitHub Actions script whenever code is pushed to main.
This script will build the code, compose it into a docker image, and upload the artifact
to a repository on DockerHub.

Here is a link to the container on DockerHub: https://hub.docker.com/r/loganmj/todo-app

Here is a link to the Docker/Github Actions documentation on the Docker website:
https://docs.docker.com/build/ci/github-actions/

## Install Instructions (Debian Linux):

1. Open your terminal

2. Pull the image from DockerHub: ```sudo docker pull loganmj/todo-app:latest```

4. Run the Docker container: ```sudo docker run -d -p 3000:80 loganmj/todo-app:latest```

5. Verify your container is running: ```sudo docker ps```

6. Access the ToDo App from your browser at https://localhost:3000
