# GoService -Complaints Management System

## Overview

The Complaints Management System is a web application developed using Django and React. It allows users to submit complaints and view/manage them through a user-friendly interface.

## Features

- **Form Submission**: Users can submit complaints by filling out a form with details such as name, location, phone number, complaint details, and attaching files.
- **Complaint Management**: Admin users can view, accept, reject, and delete complaints through an admin dashboard.
- **Image Attachment**: Users can attach images to their complaints, which are stored on the server and displayed alongside the complaint details.
- **Dynamic Rendering**: The frontend dynamically renders complaint data fetched from the backend, providing a seamless user experience.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Django
- **Database**: MySQL
- **File Storage**: Django Media Files
- **API**:RESTful 
- **API Integration**: Fetch for HTTP requests
- **Styling**: Bootstrap

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Med-Time/GO_SERVICE.git
    ```

2. **Set up the backend:**
   
   - Navigate to the `server` directory:
   
     ```bash
     cd GO_SERVICE/server
     ```

   - Install Python dependencies:
   
     ```bash
     pip install -r requirements.txt
     ```

   - Run Django migrations:
   
     ```bash
     python manage.py migrate
     ```

   - Start the Django development server:
   
     ```bash
     python manage.py runserver
     ```

3. **Set up the frontend:**
   
   - Navigate to the `client` directory:
   
     ```bash
     cd ../client
     ```

   - Install Node.js dependencies:
   
     ```bash
     npm install
     ```

   - Start the React development server:
   
     ```bash
     npm start
     ```

4. **Access the application in your web browser at** `http://localhost:3000`.

## License


## Contributors

- [Bhishan Pangeni](https://github.com/bhishanP)
- [Anmol Bhusal](https://github.com/gitter52490)
- [Sagar Khadka](https://github.com/thisisSagarKhadka)

## Acknowledgements

- Thanks to [Django](https://www.djangoproject.com/) and [React](https://reactjs.org/) for providing powerful frameworks for building web applications.
- Special thanks to [Bootstrap](https://getbootstrap.com/) for the responsive styling.
