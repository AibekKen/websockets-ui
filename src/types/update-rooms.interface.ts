export type UpdateRoomsData = Room[]

export interface Room{
  roomId: number,
  roomUsers: RoomUser[]
}

interface RoomUser {
  name: string;
  index: number;
}