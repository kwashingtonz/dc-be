import { DataSource } from "typeorm";
import { EnvironmentConfiguration } from "./environment-configuration";
import { GenderCategoryEntity } from "../entity/gender-category-entity";
import { TypeEntity } from "../entity/type-entity";
import { ProductEntity } from "../entity/product-entity";
import { ImageEntity } from "../entity/image-entity";
import { UserEntity } from "../entity/user-entity";
import { HeroImageEntity } from "../entity/hero-image-entity";

const environmentConfiguration = new EnvironmentConfiguration();
const appConfig = environmentConfiguration.readAppConfiguration();

export const replaceWithPassword = (stringLink:string):string => {
  let dataString:string = stringLink;
  dataString = dataString.replace("<password>", appConfig.getPassword());
  return dataString
}

export const AppDataSource = new DataSource({
  // type: "mongodb",
  type: "mysql",
  host: appConfig.getHost(),
  port: appConfig.getDataBasePort(),
  username: appConfig.getUserName(),
  password: appConfig.getPassword(),
  database: appConfig.getDataBase(),
  // url: replaceWithPassword(appConfig.getUrl()),
  synchronize: true,
  entities: [
    GenderCategoryEntity,
    TypeEntity,
    ProductEntity,
    ImageEntity,
    UserEntity,
    HeroImageEntity
  ],
  logging: false,
  subscribers: [
    // subscriber
  ],
  cache : {
    type: "redis",
    options : {
      host: appConfig.getRedisHost(),
      port: appConfig.getRedisPort()
    },
    duration: 60000, // 60 seconds
  }
});

export const ConnectToDatabase = async () => {
  try {
    const connection = await AppDataSource.initialize();
    if (connection.isInitialized) {
      console.log("Database connected !");
    } else {
      console.log("Database Not connected !");
    }

  } catch (error) {
    console.log(error);
    console.log("Database connection Failed !");
  }
};
