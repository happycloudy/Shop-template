import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {userCreateDto} from "./dto/userCreate.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    getOne(@Param('id') id) {
        return this.usersService.getOne(id)
    }

    @Post('/create')
    create(@Body() user: userCreateDto) {
        return this.usersService.create(user)
    }
}
