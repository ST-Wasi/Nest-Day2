import { Controller, Get, Post, Req, HttpCode, HttpStatus, Res, Header, Redirect, Param, Query, Headers, Body } from "@nestjs/common";
import { Request, Response } from "express";


const USERS = [
    {
        id: 1,
        name: "Wasiuddin"
    }
]

interface createUserDTO {
    id: number
    name: string
}


@Controller('/users')
export class UserController {

    @Post('/adduser')
    @Redirect('/users/alluser')
    addUser(@Body() bdy: createUserDTO) {
       USERS.push(bdy)
        return "Pushed Successfully"
    }

    @Get('/alluser')
    getAllUser(){
        return USERS
    }

    @Get('/giveuser/:id')
    getSeparateUser(@Param('id') id: number){
        return USERS.find(user => user.id == id)
    }

}