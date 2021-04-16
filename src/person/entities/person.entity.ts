import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type PersonDocument = Person & mongoose.Document;

@ObjectType()
@Schema()
export class Person {
  @Field((type) => String, { description: 'MongoDBs internal ObjectId' })
  @Prop({ required: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Field((type) => Int, { description: 'Example field (placeholder)' })
  @Prop()
  exampleField: number;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
