import { Controller, Get, Param, Res } from "@nestjs/common";
import { Response } from "express";

@Controller("files")
export class FilesController {
  @Get("images/:path")
  getImages(@Param("path") path, @Res() res: Response) {
    return res.contentType("image/jpeg").sendFile(path, { root: "./images" });
  }
}
