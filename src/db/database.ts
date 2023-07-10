import { LoginData } from '../types/login.interface.js'
import { Room } from '../types/update-rooms.interface.js'
import { WinnerData } from '../types/update-winners.js'

export class DataBase {
  private static _users: LoginData[] = []
  private static _winners: WinnerData[] = []
  private static _rooms: Room[] = []

  static getUsers() {
    return this._users
  }
  
  static addUser(user: LoginData) {
    this._users.push(user)
    return this._users.length - 1
  }

  static getWinner() {
    return this._winners
  }

  static getRooms() {
    return this._rooms
  }

  static createRoom(indexRoom: number) {
    
  }

  static clearRooms() {
    this._rooms = []
    return this._rooms
  }
}