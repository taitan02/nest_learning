import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
        const file = await readFile("messages.json", "utf8")
        const messages = JSON.parse(file)

        return messages[id]
    }

    async findAll() {
        const file = await readFile("messages.json", "utf8")
        return JSON.parse(file)
    }

    async create(content: string) {
        const file = await readFile("messages.json", "utf8")
        const messages = JSON.parse(file)

        const id = Math.floor(Math.random() * 999)

        messages[id] = { id, content }

        await writeFile("messages.json", JSON.stringify(messages))
    }
}