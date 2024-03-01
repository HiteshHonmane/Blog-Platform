import { Await } from 'react-router-dom';
import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
    //Building Wrapper to avoid vender lockin
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //Call another method to login
                return this.login({ email, password })

            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;

        }

    }
    async login({ email, passowrd }) {
        try {
            return await this.account.createEmailSession(email, passowrd);

        } catch (error) {
            throw error;

        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();

        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }
        return null;
    }

    async log() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }

}

const authService = new AuthService();

export default authService;