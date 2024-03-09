import { Controller, Get, Post, Req, HttpCode, HttpStatus, Res, Header, Redirect, Param, Query, Headers } from "@nestjs/common";
import { Request, Response } from "express";


interface QType {
    id: number,
    name: string
}


@Controller('/users')
export class UserController {

    @Get('/videos')
    getVideos(@Headers() head: Record<string,any>) {
        console.log(head)
        return "Helllo Wasi"
    }

}