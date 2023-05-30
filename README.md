# exercise-app-main
group 2 
group member:-
suleman jamali 40172
syed ali ibrahim 41167



# Exercise Activity Tracker App

This is a web application built with React and Express that allows users to track their exercise activities. It includes functionality to perform CRUD operations (Create, Read, Update, Delete) on exercise activities, which are stored in a MongoDB database.

## Project Structure

The project is divided into two main components:

1. **Frontend**: This directory contains the React application responsible for the user interface and interaction with the backend.

2. **Backend**: This directory contains the Express server that provides the REST API endpoints for performing CRUD operations on exercise activities and interacts with the MongoDB database.

## Getting Started

To run the Exercise Activity Tracker App on your local machine, please follow the steps below:

### Prerequisites

Make sure you have the following software installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB (Make sure it's running on your local machine or provide a connection string for a remote MongoDB server)

### Installation

1. Clone the GitHub repository:

```
git clone https://github.com/your-username/exercise-activity-tracker.git
```

2. Navigate to the project directory:

```
cd exercise-activity-tracker
```

3. Install the dependencies for both the frontend and backend:

```
cd frontend
npm install
cd ../backend
npm install
```

### Configuration

1. Create a `.env` file in the `backend` directory and provide the following configurations:

```
MONGODB_URI=<your-mongodb-connection-string>
```

Replace `<your-mongodb-connection-string>` with the connection string for your MongoDB database.

### Running the Application

1. Start the backend server:

```
cd backend
npm start
```

The server will start running on `http://localhost:3000`.

2. In a separate terminal, start the frontend development server:

```
cd frontend
npm start
```

The React application will be served on `http://localhost:8000`.

## Usage

Once the application is up and running, you can perform the following operations:

- **Read the exercise activities of a given user**: The frontend will fetch and display the exercise activities for the currently logged-in user.

- **Read the information of a given exercise activity using its ID**: Clicking on an exercise activity in the list will show its detailed information.

- **Create a new Exercise Activity**: Fill out the exercise activity form with the required information and click the "Add" button to create a new exercise activity.

- **Update an Exercise Activity using its ID and the new information to be updated**: Click the "Edit" button on an exercise activity and modify the information in the form. Save the changes by clicking the "Update" button.

- **Delete an Exercise Activity using its ID**: Click the "Delete" button on an exercise activity to remove it from the list.

## Technologies Used

The Exercise Activity Tracker App utilizes the following technologies:

- React: A JavaScript library for building user interfaces.
- Express: A fast and minimalist web application framework for Node.js.
- MongoDB: A NoSQL database for storing exercise activity data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name.
3. Make your changes and test them thoroughly.
4. Commit your changes with a clear and concise message.
5. Push your changes to your forked repository.
6. Submit a pull request, explaining your changes in detail.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Scrrenshots of UI

#Login Page
![login page](https://github.com/syedAliibrahim/exercise-app-main/assets/57465475/dbdf5a32-1aab-4f1e-adcb-c9e201799f87)

#Sign Up Page
![singnup](https://github.com/syedAliibrahim/exercise-app-main/assets/57465475/feb9dcd4-a223-4e13-8a8c-22871409a10d)

#Activity Log / Dashboard
![activity log](https://github.com/syedAliibrahim/exercise-app-main/assets/57465475/1579a864-d04c-4745-adbf-ad8c298510eb)

#MongoDB
![mongodb](https://github.com/syedAliibrahim/exercise-app-main/assets/57465475/f8eb88ef-a2e7-41e7-a150-dcf0f7c16065)



