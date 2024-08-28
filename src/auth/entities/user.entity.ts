import { IsBoolean, IsString } from "class-validator";
import { Product } from "../../products/entities";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(
        () => Product,
        ( product ) => product.user
    )
    product: Product;

    
    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }

}
