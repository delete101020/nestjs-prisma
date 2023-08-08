import { Environment } from '@common/enums';
import { AllExceptionsFilter } from '@common/filters';
import { ResponseTransformInterceptor } from '@common/interceptors';
import { ConfigSchema } from '@config/config.schema';
import { TodoModule } from '@modules/todo/todo.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaModule } from '@shared/prisma/prisma.module';
import { ResponseModule } from '@shared/response/response.module';
import { AppController } from './app.controller';

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
    ResponseModule,

    // Feature modules
    TodoModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_INTERCEPTOR, useClass: ResponseTransformInterceptor },
  ],
})
export class AppModule {}
