import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { User } from '../../users/domain/User';

@Entity()
export class Post {

  @PrimaryGeneratedColumn("increment", {name: "post_id"})
  post_id: string;

  @Column({ length: 255, nullable: false })
  post_author: string;

  @Column({ length: 50, nullable: false })
  post_title: string;

  @Column({ length: 255, nullable: true })
  post_content: string;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  updated_at: Date;

  @ManyToOne(() => User, user => user.post)
  @JoinColumn()
  user: User;

}
