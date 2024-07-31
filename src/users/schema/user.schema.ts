import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { account } from "src/account/schema/account.schema";

export type userDocument = HydratedDocument<user>;

@Schema({timestamps:true})
export class user{
    @Prop({required: true})
    fullname: string;
    
    @Prop({required: true})
    email : string;

    @Prop({required: true})
    password : string;

    @Prop({type:[{type: mongoose.Schema.Types.ObjectId, ref: 'account'}]})
    accounts : account[];
    
    @Prop({type:Boolean, default:false})
    hasCreatedAccount: boolean

    
}
export const userSchema = SchemaFactory.createForClass(user);