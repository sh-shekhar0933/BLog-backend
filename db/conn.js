//connection
const {Client}=require('pg');
const client =new Client({
    user:'postgres',
    host:'localhost',
    database:'blogdb',
    password:'Shekhar@0933',
    port:5432,
});


async function check (){
    await client.connect();
    // const res =await client.query('Select * from blogs')
    // console.log(res.rows[0]);
    // await client.end();
}

check()
module.exports=client;