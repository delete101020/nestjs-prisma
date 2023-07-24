import { Environment } from '@common/enums';
import { ConfigSchema } from '@config/config.schema';
import { TodoModule } from '@modules/todo/todo.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@shared/prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || Environment.DEVELOPMENT}`,
      isGlobal: true,
      cache: true,
      validationSchema: ConfigSchema,
    }),

    // Shared modules
    PrismaModule,

    // Feature modules
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
