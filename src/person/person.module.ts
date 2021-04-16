import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';
import { Person, PersonSchema } from './entities/person.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
  ],
  providers: [PersonResolver, PersonService],
})
export class PersonModule {}
