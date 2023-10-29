import { Document } from 'mongoose'; 
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';


//Las  entidades hacen referencia a como vamos a usar la informacion en la base de datos 
//Cada clase es una instancia de la base de datos

@Schema()
export class Pokemon extends Document{

    //id: string //mongo lo da
    @Prop({
        unique: true, 
        index: true
    })
    name: string; 

    @Prop({
        unique: true, 
        index: true
    })
    no: number; 
}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon ); 