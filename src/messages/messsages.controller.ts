import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create_message.dto';
import { MessagesServive } from './messages.service';

@Controller('messages')
export class MesssagesController {
    constructor(public messagesService: MessagesServive) {
    }
    @Get()
    list() {
        return this.messagesService.findAll()
    }

    @Post()
    create(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get("/:id")
    async getOne(@Param("id") id: string) {
        const message = await this.messagesService.findOne(id)
        if (!message) {
            throw new NotFoundException("message not found")
        }
        return message
    }
}
