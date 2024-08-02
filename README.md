# ToDoApp
A simple React app that allows users to manage a todo list.
The project includes encapsulated components and uses context hooks to manage state.

## Purpose of the Project
This project is front-end only. It stands as a proof of concept, and accomplishes the following goals:

1. Build a front-end web app using React/Typescript and Vite.
2. Create a Github Actions script that will automatically build the app, compose it into a Docker container, and upload the container to a DockerHub repository.
3. I can successfully download the container from Docker Hub and run it on my local machine.

Here is a link to the container on DockerHub: https://hub.docker.com/r/loganmj/todo-app

Here is a link to the Docker/Github Actions documentation on the Docker website:
https://docs.docker.com/build/ci/github-actions/

## Install Instructions (Debian Linux):

1. Open your terminal
2. Pull the image from DockerHub: ```sudo docker pull loganmj/todo-app:latest```
3. Run the Docker container: ```sudo docker run -d -p 3000:80 loganmj/todo-app:latest```
4. Verify your container is running: ```sudo docker ps```
5. Access the ToDo App from your browser at https://localhost:3000
