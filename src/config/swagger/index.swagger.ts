import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('API para teste de hablidade para empresa devio')
  .setDescription(
    'Esse teste foi realizado de acordo com as intruções passadas, ele foi construido com nest.js',
  )
  .setVersion('1.0')
  .addBearerAuth()
  .build();
