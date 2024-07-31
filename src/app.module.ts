import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/project_mern'),
    UsersModule,
    AccountModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
