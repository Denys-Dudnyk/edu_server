import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { IdValidationPipe } from 'src/pipes/id.validation.pipe'
import { CreatePfDto } from './dto/create-pf.dto'
import { PfService } from './pf.service'

@Controller('pf')
export class PfController {
	constructor(private readonly pfService: PfService) {}

	@Get('by-slug/:slug')
	async bySlug(@Param('slug') slug: string) {
		return this.pfService.bySlug(slug)
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.pfService.getAll(searchTerm)
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		return this.pfService.byId(id)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	async create() {
		return this.pfService.create()
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	async update(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: CreatePfDto
	) {
		return this.pfService.update(id, dto)
	}

	@Delete(':id')
	@HttpCode(200)
	async delete(@Param('id', IdValidationPipe) id: string) {
		return this.pfService.delete(id)
	}
}
