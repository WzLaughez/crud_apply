import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class bcrypt_service{
    private readonly saltRounds = 10;

    async hashPassword(password : string): Promise<string>{
        const salt = await bcrypt.genSalt(this.saltRounds)
        return await bcrypt.hash(password,salt)
    } 
    async validatePassword(password : string, hashPassword:string){
        return await bcrypt.compare(password,hashPassword)
    } 
}