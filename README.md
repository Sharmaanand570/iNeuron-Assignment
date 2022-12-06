## iNeuron-Nodejs-Assignment
Create a Node.js CRUD app with functionalities of Add/Update/Delete/Get items from any one of the databases

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