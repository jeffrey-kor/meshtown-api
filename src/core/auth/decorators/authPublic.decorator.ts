import { SetMetadata } from "@nestjs/common";

export const authPublic = () => SetMetadata("isPublic", true);
