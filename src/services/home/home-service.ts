import { CommonResponse } from "../../common/dto/common-response";

export interface HomeService{
    getHomeObj(): Promise<CommonResponse>;
  }
  