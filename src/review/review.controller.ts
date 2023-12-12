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
import { CreateProductDto } from './dto/create-review.dto'
import { ReviewService } from './review.service'

@Controller('reviews')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Get('by-slug/:slug')
	async bySlug(@Param('slug') slug: string) {
		return this.reviewService.bySlug(slug)
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.reviewService.getAll(searchTerm)
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		return this.reviewService.byId(id)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	async create() {
		return this.reviewService.create()
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	async update(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: CreateProductDto
	) {
		return this.reviewService.update(id, dto)
	}

	@Delete(':id')
	@HttpCode(200)
	async delete(@Param('id', IdValidationPipe) id: string) {
		return this.reviewService.delete(id)
	}
}
