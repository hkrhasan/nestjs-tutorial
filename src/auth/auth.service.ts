import { ForbiddenException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { SignupDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly db: DatabaseService) {}

  async signup(data: SignupDto) {
    try {
      const { email, password, username } = data;

      const user = await this.db.user.create({
        data: {
          email,
          password,
          firstName: username,
        },
      });

      return user;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('Email already exist!');
      }

      throw new ForbiddenException('something went wrong on creating user');
    }
  }
}
