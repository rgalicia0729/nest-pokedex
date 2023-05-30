import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonsModule } from './pokemons/pokemons.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { AppConfig } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [AppConfig]
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    PokemonsModule,
    CommonModule,
    SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
