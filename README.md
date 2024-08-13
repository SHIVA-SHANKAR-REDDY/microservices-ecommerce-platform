
# Microservices-based E-commerce Platform

## Overview

This project is a microservices-based e-commerce platform that showcases the integration of various services using RESTful APIs. The platform is built using JavaScript (Node.js) and is designed to be containerized and orchestrated using Docker and Kubernetes. MongoDB is used for data management, demonstrating proficiency with NoSQL databases.

## Project Structure

The project is divided into two main microservices:
1. **Auth Service**: Handles user authentication and registration.
2. **Product Service**: Manages product data including creation, retrieval, and inventory management.

Each service has its own codebase, Dockerfile, and deployment configurations.

## Technologies Used

- **JavaScript (Node.js)**: Backend logic for both services.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for managing user and product data.
- **Docker**: Containerization of services.
- **Kubernetes**: Orchestration and deployment of services.
- **JWT**: Authentication using JSON Web Tokens.
- **bcrypt.js**: Secure password hashing.

## Setup Instructions

### Prerequisites

- Docker
- Kubernetes (minikube or any other Kubernetes cluster)

### Running the Project

1. **Clone the Repository**
   ```bash
   git clone <https://github.com/SHIVA-SHANKAR-REDDY/microservices-ecommerce-platform/>
   cd microservices-ecommerce-platform
   ```

2. **Start Services with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Deploy on Kubernetes**
   - Ensure your Kubernetes cluster is running.
   - Apply the Kubernetes configuration:
     ```bash
     kubectl apply -f kubernetes/deployment.yaml
     kubectl apply -f kubernetes/service.yaml
     ```

### Accessing the Services

- **Auth Service**: Accessible at `http://localhost:3000/api/auth`
- **Product Service**: Accessible at `http://localhost:3001/api/products`

## API Endpoints

### Auth Service

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login an existing user.

### Product Service

- **GET /api/products**: Retrieve a list of products.
- **POST /api/products**: Add a new product.

## License

This project is licensed under the MIT License.
