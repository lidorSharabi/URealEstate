export class CreateUserRequest
{
    id: number;
    name: string;
    rooms: number;
    location: number;
    email: string;
    price: number;
    typeId: number;
    saved: boolean;
    disliked: boolean;
}