# User Registration Endpoint

## POST /user/register

### Description
This endpoint is used to register a new user.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "message": "User created successfully",
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "error": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

### Notes
- The `password` field is hashed before being stored in the database.
- A JWT token is generated and returned upon successful registration.

# User Login Endpoint

## POST /user/login

### Description
This endpoint is used to log in an existing user.

### Request Body
The request body should be a JSON object containing the following fields:
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "User logged in successfully",
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "error": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid Email or Password"
  }
  ```

### Notes
- A JWT token is generated and returned upon successful login.

# User Profile Endpoint

## GET /user/profile

### Description
This endpoint is used to get the profile of the authenticated user.

### Request Headers
- `Authorization`: Bearer token

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized: No token provided"
  }
  ```

# User Logout Endpoint

## GET /user/logout

### Description
This endpoint is used to log out the authenticated user.

### Request Headers
- `Authorization`: Bearer token

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "User logged out successfully"
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized: No token provided"
  }
  ```

### Notes
- The JWT token is blacklisted upon successful logout.

# Captain Registration Endpoint

## POST /captain/register

### Description
This endpoint is used to register a new captain.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters.
  - `plate`: A string with a minimum length of 3 characters.
  - `capacity`: A number representing the capacity of the vehicle.
  - `vehicleType`: A string that must be either "car" or "motorcycle".

### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

### Notes
- The `password` field is hashed before being stored in the database.
- A JWT token is generated and returned upon successful registration.

# Captain Login Endpoint

## POST /captain/login

### Description
This endpoint is used to log in an existing captain.

### Request Body
The request body should be a JSON object containing the following fields:
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example Request
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "token": "jwt_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid Email or Password"
  }
  ```

### Notes
- A JWT token is generated and returned upon successful login.

# Captain Profile Endpoint

## GET /captain/profile

### Description
This endpoint is used to get the profile of the authenticated captain.

### Request Headers
- `Authorization`: Bearer token

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized: No token provided"
  }
  ```

# Captain Logout Endpoint

## GET /captain/logout

### Description
This endpoint is used to log out the authenticated captain.

### Request Headers
- `Authorization`: Bearer token

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Captain logged out successfully"
  }
  ```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized: No token provided"
  }
  ```

### Notes
- The JWT token is blacklisted upon successful logout.
