import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'book' })
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;
}

// Entity map with database
//Entity Register in own module with TypeOrmModule
