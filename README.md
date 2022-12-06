## iNeuron-Nodejs-Assignment

###Overview
         In this Application, I have created a Simply CRUD Operations API for User. There is 4 differnt API, One is for create the User, Second for Update, Third one for Get and Fourth for deleteing the data. In this Application i used Node.js, MongoDB, Express and Mongoose.

- Softwre and Package Requirement

1. Node.js
2. MongoDB
3. Express
4. Mongoose

## API's

### POST/user (Add)
### PUT/user/:userId (Update)
### GET/user/:userId (Get)
### DELETE/:userId (Delete)

## User Model

```yaml
{
    userName: {
        type: String,
        required: true,
        trim: true
    },
    userSurname: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
}
```
