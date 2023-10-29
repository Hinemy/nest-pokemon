import { ValidationPipe } from "@nestjs/common";
import { IsString, MinLength, IsInt, IsPositive, Min } from "class-validator";

export class CreatePokemonDto {

    //isInt, isPositive,min
    @IsInt()
    @IsPositive()
    @Min(1)
    no:number; 


    //isString, Minlenth
    @IsString()
    @MinLength(2)
    name: string; 

}
