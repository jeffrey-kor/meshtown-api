import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class OAuthAttribute {

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


}