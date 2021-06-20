import {User, UserStatus} from '../proto/generated/users_messages_pb';

type UserType = User.AsObject;
//const cleanArray: Array<User.AsObject> = [
const cleanArray: UserType[] = [
    { id: 1, name:'Alan', email:'alan@mail.ru', password:'123123', age:18, status: UserStatus.APPROVED_USER  },
    { id: 2, name:'Bob', email:'bob@mail.ru', password:'123123', age:19, status: UserStatus.APPROVED_USER  },
    { id: 3, name:'Chicken', email:'chicken@mail.ru', password:'123123', age:19, status: UserStatus.APPROVED_USER  },
    { id: 4, name:'Haron', email:'haron@mail.ru', password:'123123', age:19, status: UserStatus.BANNED_USER  },
    { id: 5, name:'Star', email:'star@mail.ru', password:'123123', age:19, status: UserStatus.ZERO_VALUE_REQUIRED  },
    { id: 6, name:'Viktor', email:'viktor@mail.ru', password:'123123', age:19, status: UserStatus.ZERO_VALUE_REQUIRED  },
];

const usersAsObject: User[] = cleanArray.map(({id, name, email, password, age, status}:UserType)=>{
    const user:User = new User();
    user.setId(id);
    user.setName(name);
    user.setEmail(email);
    user.setPassword(password);
    user.setAge(age);
    user.setStatus(status);
    return user;
});

export let users: User[] = usersAsObject;

