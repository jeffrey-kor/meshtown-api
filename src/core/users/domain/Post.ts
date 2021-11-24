import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';

@Entity()
export class Post {

  post_id: string

  post_author: string;

  post_title: string;

  post_content: string;

  created_at: Date;

  updated_at: Date;

  @ManyToOne(() => User, user => user.post)
  @JoinColumn()
  user: User;


}
