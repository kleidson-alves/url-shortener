import mongoose  from "mongoose";
import { config } from "../config/constants";

class MongoConnection {
    public async connect() {
        try {
            await mongoose.connect(config.MONGO_CONNECTION, {user: 'kleidson', pass: 'wvMf4dnDrDRsn8D'});
            console.log("Banco de dados conectado");
        } catch(err){
            console.error(err);
            process.exit(1);
        }
    }
}

export default MongoConnection;