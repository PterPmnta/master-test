import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { PensamientoLogicoService } from "./pensamiento-logico.service";


@Controller('pensamiento-logico')
export class PensamientoLogicoController {
    constructor(private readonly pensamientoLogicoService: PensamientoLogicoService) { }

    @Get(':limite')
    getAllOddNumbers(@Param('limite', ParseIntPipe) limite: number) {
        return this.pensamientoLogicoService.getAllOddNumbers(limite);
    }

}
