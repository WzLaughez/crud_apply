import { Body, Injectable, Param } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { user } from './schema/user.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { CreateUser } from './dto/create.user.dto';
import { bcrypt_service } from './Register_Utils/register.service';
import { LoginUser } from './dto/login.user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(user.name) private userModel: Model<user>,
        private bycriptService: bcrypt_service,
    ){}

    async Register(createUserDto : CreateUser): Promise<user>{
        try {
            const hashedPassword = await this.bycriptService.hashPassword(createUserDto.password);
            const createdUser = await this.userModel.create({...createUserDto,password:hashedPassword});
            return createdUser;
        } catch (error) {
            return error;
        }
    }

    async ValidateUser(email:string, password:string): Promise<user | null>{
        try {
            const user = await this.userModel.findOne({email}).exec()
            if(user && await this.bycriptService.validatePassword(password, user.password))
            {
                return user;
            }
            return null;
        } catch (error) {
            console.error(error);
        }
    }

    async findAll(): Promise<user[]>{
        return this.userModel.find().exec();
    }

    async findOne(email : string): Promise<user>{
        return this.userModel.findOne({email}).exec();
    }

    async Update() {
        try {
            
        } catch (error) {
            
        }
    }
}
