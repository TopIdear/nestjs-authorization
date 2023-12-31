import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users/roles.guard';
import { CatsModule } from './cats/cats.module';
import { PigsModule } from './pigs/pigs.module';

//保证所用的访问都经过这个RolesGuard验证
@Module({
  imports: [UsersModule, CatsModule, PigsModule],
  controllers: [AppController],
  providers: [AppService,{
    provide:APP_GUARD,
    useClass:RolesGuard
  }],
  
})
export class AppModule {}
