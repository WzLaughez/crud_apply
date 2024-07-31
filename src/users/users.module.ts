import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { user, userSchema } from './schema/user.schema';
import { bcrypt_service } from './Register_Utils/register.service';

@Module({
  imports:[MongooseModule.forFeature([{name: user.name, schema: userSchema}])],
  controllers: [UsersController],
  providers: [UsersService,bcrypt_service]
})
export class UsersModule {}
