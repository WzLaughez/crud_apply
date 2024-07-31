import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dto/create.user.dto';
import { user } from './schema/user.schema';
import { LoginUser } from './dto/login.user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService : UsersService){}

    @Post('register')
    async Register(@Body() CreateUser:CreateUser)
    {
        try {
            const userCreated=await this.userService.Register(CreateUser);
            return userCreated;
            
        } catch (error) {
            console.error(error);
            
        }
    }
    @Post('login')
    async Login(@Body() LoginUser:LoginUser)
    {
        try {
            const user = await this.userService.ValidateUser(LoginUser.email,LoginUser.password)
            if(user){
                console.log("Selamat Datang");
                return user;
            }
        } catch (error) {
            console.error(error);
        }
    }

    @Get()
    async findAll(): Promise<user[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:string): Promise<user>{
        return await this.userService.findOne(id);
    }

    // @Put()
    // async UpdateUser()
}
