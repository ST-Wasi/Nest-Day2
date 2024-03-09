import { Controller, Get, Post, Req, HttpCode, HttpStatus, Res, Header, Redirect, Param, Query, Headers, Body, Inject, Put, Delete } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "./user.service";

interface createUserDTO {
    id: number
    name: string
}

let USERS = [
    {
        id: 1,
        name: "Wasiuddin"
    },
    {
        id: 2,
        name: "Shamim"
    }
]




@Controller('/users')
export class UserController {

    constructor(private userService: UserService) {}

    @Get('/allusers')
    getAllUsers(){
        this.userService.getUsers()
        return USERS;
    }

    @Get(':id')
    // @HttpCode(HttpStatus.OK)
    getUser(@Param('id') id: number){
        this.userService.getUser(+id)
        return {msg: "Here Are Your Users"}
    }

    @Post('/adduser')
    @HttpCode(201)
    addUser(@Body() bdy: createUserDTO){
        this.userService.addUser(bdy)
        return {msg: "User Added"}
    }

    @Put('/update/:id')
    updateUser(@Param() id: number, @Body() bdy: createUserDTO){
        this.userService.updateUser(id,bdy)
        return {msg: "User Updated"}
    }

    @Delete('/delete/:id')
    deleteUser(@Param() id: number){
        this.userService.deleteUser(id)
        return {msg: "User Deleted"}
    }
}