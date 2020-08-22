import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpaceController } from './space/space.controller';
import { SpaceService } from './space/space.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, SpaceController, UserController],
  providers: [AppService, SpaceService, UserService],
})
export class AppModule {}
