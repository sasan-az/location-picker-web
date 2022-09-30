import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "features/users/entities/user.entity";

export enum LocationType {
  HOME = "home",
  BUSINESS = "business",
}

@Entity({
  orderBy: {
    id: "DESC",
  },
})
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  logo: string;

  @Column({
    type: "enum",
    enum: LocationType,
    default: LocationType.HOME,
  })
  locationType: LocationType;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;
}
