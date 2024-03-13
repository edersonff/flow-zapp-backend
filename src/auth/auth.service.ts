import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { SignupUserDto } from './dto/signup.dto';
import { UpdateUserDto } from './dto/update.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  private async generateToken(payload: { sub: number; username: string }) {
    return await this.jwtService.signAsync(payload);
  }

  private async hashPassword(password: string) {
    return await bcrypt.hash(password.toString(), 10);
  }

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOne({
      email,
    });

    const correctPassword = await bcrypt.compare(
      password.toString(),
      user?.password.toString(),
    );

    if (!correctPassword) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    return {
      access_token: await this.generateToken(payload),
    };
  }

  async signUp(signInDto: SignupUserDto) {
    const user = await this.usersService.findOne({
      email: signInDto.email,
    });

    if (user) {
      throw new UnauthorizedException();
    }

    signInDto.password = await this.hashPassword(signInDto.password);

    await this.usersService.create(signInDto);

    const payload = {
      sub: user.id,
      username: user.username,
    };

    return {
      access_token: await this.generateToken(payload),
    };
  }

  async remove(id: number) {
    await this.usersService.remove(id);

    return {
      message: 'User removed successfully',
    };
  }

  async update(id: number, user: UpdateUserDto) {
    user.password = await this.hashPassword(user.password);

    await this.usersService.update(id, user);

    return {
      message: 'User updated successfully',
    };
  }
}
