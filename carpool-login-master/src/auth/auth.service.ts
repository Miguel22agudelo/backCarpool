import { Injectable } from '@nestjs/common';
import { UserService } from './../user/user.service';
import { compare } from 'bcryptjs';
import { UserEntity } from './../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail({ email });

    console.log(user);

    if (user && (await compare(pass, user.password))) {
      const {password, ...rest} = user; 
      return rest;
    }

    return null;
  }

  login(user: UserEntity) {
    const { id, ...rest } = user;
    const payload = {sub: id};

    return{
      user,
      accesToken: this.jwtService.sign(payload)
    }
  }
}
