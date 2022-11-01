import { OkPacket, Pool } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UserModel {
  private db: Pool;

  constructor(connection: Pool) {
    this.db = connection;
  }

  public async postUsers(user: User): Promise<number> {
    const [{ insertId }] = await this.db.execute<OkPacket>(
      `
      INSERT INTO Trybesmith.Users (username, classe, level, password) 
      VALUES (?, ?, ?, ?)
      `,
      [user.username, user.classe, user.level, user.password],
    );
    return insertId;
  }
}