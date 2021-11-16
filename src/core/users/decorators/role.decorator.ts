import { SetMetadata } from "@nestjs/common";

export const Role = (type: string) => SetMetadata("role", type);