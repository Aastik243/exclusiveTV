# exclusiveTV

This application enables users to upload and view various types of media, including videos, images, and files. The app utilizes AWS S3 for secure and scalable storage, ensuring high availability and easy access to media content. Users can upload their media files, receive a unique identifier for each file, and then view them through the app’s media viewer.

## Environment Configuration

To configure the backend environment variables, create a `.env` file in the root directory of the backend project with the following values:

```plaintext
# .env 

PORT="" 				    # Provide a value for PORT
MONGO_URI="" 			    # Provide a value for MONGO_URI
AWS_ACCESS_KEY_ID="" 	    # Provide a value for AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY="" 	# Provide a value for AWS_SECRET_ACCESS_KEY
AWS_REGION="" 				# Provide a value for AWS_REGION
AWS_S3_BUCKET="" 			# Provide a value for AWS_S3_BUCKET
```

## How to Run

Follow these steps to run the application locally:

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone git@github.com:Aastik243/exclusiveTV.git
```

### 2. Navigate to project

Navigate to project and install the dependecies.
```bash
cd exclusiveTV
npm install
```

### 3. Start the server

```bash
npm run dev
```

## API Documentation
You can access the live API documentation hosted on Postman to explore and interact with the endpoints.

[View API Documentation](https://documenter.getpostman.com/view/30811221/2sAYXFjJ74)

## Technologies Used
This project is built using the following technologies:

- Node.js
- Express.js
- MongoDB
- AWS S3 
- Postman 