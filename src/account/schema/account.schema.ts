import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { user } from "src/users/schema/user.schema";

export type accountDocument = HydratedDocument<account>;

@Schema()
export class account{
    @Prop({required: true})
    name: string;
    
    @Prop({required: true})
    initialBalance : number;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'user'})
    user : user;

    @Prop()
    notes : string;

}
export const accountSchema = SchemaFactory.createForClass(account);