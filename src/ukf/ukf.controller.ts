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
import { CreateUkfFFDto } from './dto/create-ukf.dto'
import { UkfService } from './ukf.service'

@Controller('ukfs')
export class UkfController {
	constructor(private readonly ukfService: UkfService) {}

	@Get('by-slug/:slug')
	async bySlug(@Param('slug') slug: string) {
		return this.ukfService.bySlug(slug)
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.ukfService.getAll(searchTerm)
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		return this.ukfService.byId(id)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	async create() {
		return this.ukfService.create()
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	async update(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: CreateUkfFFDto
	) {
		return this.ukfService.update(id, dto)
	}

	@Delete(':id')
	@HttpCode(200)
	async delete(@Param('id', IdValidationPipe) id: string) {
		return this.ukfService.delete(id)
	}
}
