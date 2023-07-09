export type UpdateRoomsData = UpdateRooms[]

interface UpdateRooms{
  roomId: number,
  roomUsers: Room[]
}

interface Room {
  name: string;
  index: number;
}