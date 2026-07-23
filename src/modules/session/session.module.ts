import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './entities/session.entity';
import { Message } from '../message/entities/message.entity';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { ProxyRelayService } from './proxy-relay.service';
import { WebhookModule } from '../webhook/webhook.module';

@Module({
  // WebhookModule does not import SessionModule back, so the dependency is one-directional —
  // no forwardRef() needed.
  imports: [TypeOrmModule.forFeature([Session, Message], 'data'), WebhookModule],
  controllers: [SessionController],
  providers: [SessionService, ProxyRelayService],
  exports: [SessionService],
})
export class SessionModule {}
