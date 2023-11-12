import {app }from './src/app'; 

app.listen(app.get("PORT"), ()=> {
    console.log(`Server in PORT ${app.get("PORT")}`);
});