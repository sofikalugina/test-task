myTestApp.service('usersService', function () {
    //to create unique user id
    var uid = 1;

    //users array to hold list of all users
    var users = [{
        id: 0,
        'name': 'Viral',
        'email': 'hello@gmail.com',
        'phone': '123-2343-44',
        'gender': 'male'
    }];

    //save method creates a new user if not already exists else updates the existing object
    this.save = function (user) {
        if (user.id == null) {
            //if this is new user - add it in users array
            user.id = uid++;
            users.push(user);
        } else {
            //for existing user finds this user using id and updates it.
            for (i in users) {
                if (users[i].id == user.id) {
                    users[i] = user;
                }
            }
        }

    };

    //simply searches users list for given id and returns the user object if found
    this.get = function (id) {
        for (i in users) {
            if (users[i].id == id) {
                return users[i];
            }
        }

    };

    //iterates through users list and deletes user if found
    this.delete = function (id) {
        for (i in users) {
            if (users[i].id == id) {
                users.splice(i, 1);
            }
        }
    };

    //simply returns the users list
    this.list = function () {
        return users;
    }
});