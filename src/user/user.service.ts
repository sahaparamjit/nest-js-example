import { Injectable, HttpService } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    constructor(private httpService:HttpService) {}

    async getAllUsers() : Promise<User> {
        const response = await this.httpService.get("https://reqres.in/api/users").toPromise();
        return response.data;
    }
}
