import { Module } from '@nestjs/common';
import { MesssagesController } from './messsages.controller';
import { MessagesServive } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MesssagesController],
  providers: [MessagesServive, MessagesRepository]
})
export class MessagesModule {}
