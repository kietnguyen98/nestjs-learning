import { Injectable } from '@nestjs/common';

export interface IUser {
  id: string;
  name: string;
  birthDate: string;
  age: number;
  email: string;
  phoneNumber: string;
  country?: string;
}

@Injectable()
export class UserService {
  // mock data
  private users: Array<IUser> = [
    {
      id: '001',
      name: 'Nguyen Han Manh Kiet',
      birthDate: '1998-04-20',
      email: 'kietnguyen@nexondv.com',
      age: 26,
      phoneNumber: '+84766653542',
      country: 'Viet Nam'
    },
    {
      id: '002',
      name: 'Phan Cong Son',
      birthDate: '2000-05-01',
      email: 'son.phan@nexondv.com',
      age: 24,
      phoneNumber: '+84901877645',
      country: 'Viet Nam'
    },
    {
      id: '003',
      name: 'Nguyen Huu Chuong',
      birthDate: '1999-04-04',
      email: 'chuongnguyen4499@nexondv.com',
      age: 25,
      phoneNumber: '+84902750631',
      country: 'Viet Nam'
    }
  ];

  findUserById(id: string): IUser {
    return this.users.find(user => (user.id = id));
  }

  findUserByName(nameToBeMatched: string): IUser[] {
    if (!nameToBeMatched) return this.users;
    return this.users.filter(user => user.name.toLowerCase().includes(nameToBeMatched));
  }
}
