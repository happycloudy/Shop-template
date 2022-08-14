import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../schemas/user.schema";
import {Model} from "mongoose";
import {userCreateDto} from "./dto/userCreate.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async getOne(id) {
        return this.userModel.findById(id)
    }

    async create(user: userCreateDto) {
        return this.userModel.create(user)
    }
}
