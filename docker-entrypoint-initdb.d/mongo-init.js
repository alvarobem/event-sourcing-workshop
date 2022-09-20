print('Start #################################################################');



db.createUser(
    {
        user: "admin",
        pwd: "pass",
        roles: [
            {
                role: "readWrite",
                db: "event-sourcing"
            }
        ]
    }
);


print('END #################################################################');
