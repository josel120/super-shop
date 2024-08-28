import { IsBoolean, IsString } from "class-validator";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @IsString()
    @Column('text',{
        unique: true
    })
    email: string;

    @IsString()
    @Column('text', {
        select: false
    })
    password: string;

    @IsString()
    @Column('text')
    fullName: string;

    @IsBoolean()
    @Column('bool',{
        default: true
    })
    isActive: boolean;

    @IsString()
    @Column('text',{
        array: true,
        default: ['user']
    })
    roles: string[];

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }

}
