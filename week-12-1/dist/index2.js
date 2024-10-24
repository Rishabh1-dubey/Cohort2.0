"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});
function insertUserAndAddress(username, email, password, city, pincode, country, street) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            //start transction
            yield client.query('BEGIN');
            //insert user
            const insertUserText = `
    INSERT INTO user(username , email , password)
    VALUES($1,$2,$3)
    RETURNING id`;
            const userRes = yield client.query(insertUserText, [username, password, email]);
            const userId = userRes.rows[0].id;
            // inset address using the returned userID
            const insertUserAddress = `
INSERT INTO addresses(user_id, country,street,city,pincode)
VALUES($1,$2,$3,$4)`;
            yield client.query(insertUserAddress, [userId, country, pincode, street, city]);
            //Commit transtions
            yield client.query('COMMIT');
            console.log('Userr and address insertd successfully');
        }
        catch (err) {
            yield client.query('ROLLBACK');
            console.log('ERROR  during transction , rolled back', err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
// Example usage
insertUserAndAddress('johndoe', 'john.doe@example.com', 'securepassword123', 'New York', 'USA', '123 Broadway St', '10001');
