# Jarvis App

1. Setup an .env file with:

```
REACT_APP_HUGGING_FACE_API_KEY=your_api_key_here
```

Please keep in mind that you do not need to include the "Bearer " text in your API key.

## Start the App

1. npm install
2. npm start

## Deployment

-   Containerize the frontend and the backend using Docker seperating the DockerFiles created for the Frontend and Backend
-   Send everything to a container registry
-   Use Kubernetes Deployment to write manifests to define deployments for frontend, backend and databases.
-   Use CI/CD to allow automated building, testing and deployment
-   Monitoring and logging tools need to be used to monitor the health of the system. Tools such as Elasticsearch can be used
-   Best Security best practices shall be followed
