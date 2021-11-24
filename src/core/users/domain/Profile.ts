import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { User } from './User';


@Entity()
export class Profile {

  @PrimaryGeneratedColumn("increment", {name: "profile_id"})
  profile_id: number;

  @Column({ length: 40 })
  user_name: string;

  @Column({ length: 100 })
  user_password: string;

  @Column({ length: 150 })
  user_email: string;

  @Column({ length: 100 })
  user_address: string;

  @Column({ length: 200 })
  photo: string;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  updated_at: Date;

  @OneToOne(() => User, user => user.profile)
  user: User;
}