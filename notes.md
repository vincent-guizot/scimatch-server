# Users table

npx sequelize-cli model:generate --name User --attributes id:UUID,username:string,password:string,images:JSON,role:enum,location:string,fullname:string,age:integer

# Likes table

npx sequelize-cli model:generate --name Like --attributes id:UUID,user_id:UUID,liked_user_id:UUID

# Matches table

npx sequelize-cli model:generate --name Match --attributes id:UUID,user1_id:UUID,user2_id:UUID

{
"development": {
"username": "postgres",
"password": "sahabatchineseindonesia",
"database": "postgres",
"host": "db.hfxqwffrkrobwnotjvzf.supabase.co",
"port": 5432,
"dialect": "postgres",
"dialectOptions": {
"ssl": { "rejectUnauthorized": false }
}
},
"test": {
"username": "postgres",
"password": "sahabatchineseindonesia",
"database": "postgres",
"host": "db.hfxqwffrkrobwnotjvzf.supabase.co",
"port": 5432,
"dialect": "postgres",
"dialectOptions": {
"ssl": { "rejectUnauthorized": false }
}
},
"production": {
"username": "postgres",
"password": "sahabatchineseindonesia",
"database": "postgres",
"host": "db.hfxqwffrkrobwnotjvzf.supabase.co",
"port": 5432,
"dialect": "postgres",
"dialectOptions": {
"ssl": { "rejectUnauthorized": false }
}
}
}
