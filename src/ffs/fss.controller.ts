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
import { CreateFssDto } from './dto/create-fss.dto'
import { FssService } from './fss.service'

@Controller('fss')
export class FssController {
	constructor(private readonly fssService: FssService) {}

	@Get('by-slug/:slug')
	async bySlug(@Param('slug') slug: string) {
		return this.fssService.bySlug(slug)
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.fssService.getAll(searchTerm)
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		return this.fssService.byId(id)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	async create() {
		return this.fssService.create()
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	async update(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: CreateFssDto
	) {
		return this.fssService.update(id, dto)
	}

	@Delete(':id')
	@HttpCode(200)
	async delete(@Param('id', IdValidationPipe) id: string) {
		return this.fssService.delete(id)
	}
}
