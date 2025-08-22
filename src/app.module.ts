import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SamsasModule } from './samsas/samsas.module';

@Module({
  imports: [SamsasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
