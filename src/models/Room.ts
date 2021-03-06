import mongoose, { Schema } from 'mongoose';
import { IRoomDocument, IRoom } from '../types';

const RoomSchema : Schema<IRoom> = new mongoose.Schema({
    maker : { type : 'ObjectId', ref : 'User', required : true },
    participants : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ],
    name : { type: String, required : false, default : '' },
    last_message : { type : String, required : false, default : '' },
    member_count : { type : Number, required : true },
    room_image : { type : String, required : false, default : '' },
    create_at : { type : Date, default : Date.now, required : true },
    update_at : { type : Date, default : Date.now, required : true }
});

const model = mongoose.model<IRoomDocument>('Room', RoomSchema);

export default model;