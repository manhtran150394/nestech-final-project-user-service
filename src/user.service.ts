import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  async testMicroservice() {
    return await firstValueFrom(
      this.userClient.send({ cmd: 'test_microservice' }, {}),
    );
  }
}
