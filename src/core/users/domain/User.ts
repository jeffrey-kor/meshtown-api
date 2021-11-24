import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { Profile } from './Profile';
import { Post } from '../../Post/domain/Post';

@Entity()
export class User {

  @PrimaryGeneratedColumn("increment", {name: "user_id"})
  user_id: number;

  @Column({ length: 40 })
  user_name: string;

  @Column({ length: 100 })
  user_password: string;

  @Column({ length: 150 })
  user_email: string;

  @Column({ length: 100 })
  user_address: string;

  @Column({ length: 255, nullable: true })
  token: string;

  @Column({ length: 255, nullable: true })
  refreshToken: string;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  updated_at: Date;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Post, post => post.user)
  @JoinColumn()
  post: Post[];


}