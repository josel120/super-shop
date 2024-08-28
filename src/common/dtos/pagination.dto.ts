import { Type } from "class-transformer";
import { IsOptional, Min } from "class-validator";

export class PaginationDto{
    @IsOptional()
    @Type( () => Number )
    limit?: number;

    @IsOptional()
    @Min(0)
    @Type( () => Number )
    offset?: number;
}