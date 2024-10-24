# Contact Management App

## Project Description

The **Contact Management App** is a modern web application designed to help users manage their contacts efficiently. This app utilizes **Firebase Authentication** for secure user login and registration, allowing users to create accounts and store their contact information in a cloud database powered by **Firestore**. With its sleek dark-themed user interface, the application provides a user-friendly experience for managing contacts seamlessly.

### Key Features

- **User Authentication**: Users can sign up and log in securely using their email and password.
- **Contact Management**: Users can view and manage their contacts stored in Firestore.
- **Responsive Design**: The application is designed to work on various screen sizes, ensuring accessibility on mobile and desktop devices.
- **Dark Theme**: A visually appealing dark color palette enhances the user experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: Backend service for authentication and database storage.
- **Firestore**: A flexible, scalable NoSQL cloud database to store user contact information.
- **CSS**: For styling the application and maintaining a cohesive design.

## Getting Started

To run this application locally, follow the steps below:

### Prerequisites

- Node.js and npm installed on your machine.
- A Firebase project set up. Obtain your Firebase configuration credentials from the Firebase console.

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/contact-management-app.git
   cd contact-management-app

	2.	Install Dependencies:
Install the required npm packages by running:

npm install


	3.	Configure Firebase:
Create a .env file in the root directory of your project and add your Firebase configuration as follows:

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

(keys are hard coded for demo purposes)

	4.	Run the Application:
Start the development server with:

npm start

The app should now be running on http://localhost:3000.

Usage

	•	Sign Up: Navigate to the /signup route to create a new account.
	•	Log In: Use the /login route to access your account.
	•	Manage Contacts: After logging in, you can view and manage your contacts in the app.

Contribution

Contributions are welcome! If you would like to improve the project, feel free to fork the repository, create a branch for your feature, and submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgments

	•	Thanks to the Firebase team for providing excellent tools for web application development.
	•	Special thanks to the React community for creating a powerful framework that simplifies UI development.
