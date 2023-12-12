import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { CreateProductDto } from './dto/create-review.dto'
import { ReviewModel } from './review.model'

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(ReviewModel)
		private readonly reviewModel: ModelType<ReviewModel> // private readonly movieService: MovieService
	) {}

	async getAll(searchTerm?: string) {
		let options = {}

		if (searchTerm)
			options = {
				$or: [
					{
						name: new RegExp(searchTerm, 'i'),
					},
					{
						slug: new RegExp(searchTerm, 'i'),
					},
					{
						description: new RegExp(searchTerm, 'i'),
					},
				],
			}
		return this.reviewModel
			.find(options)
			.select('-updatedAt -__v')
			.sort({
				createdAt: 'asc',
			})
			.exec()
	}
	async bySlug(slug: string) {
		const doc = await this.reviewModel.findOne({ slug }).exec()
		if (!doc) throw new NotFoundException('Review not found')
		return doc
	}

	async byId(_id: string) {
		const review = await this.reviewModel.findById(_id)

		if (!review) throw new NotFoundException('Genre not found')

		return review
	}

	async create() {
		const defaultValue: CreateProductDto = {
			name: '',
			specialty: '',
			description: '',
			image: '',
		}
		const review = await this.reviewModel.create(defaultValue)
		return review._id
	}

	async update(_id: string, dto: CreateProductDto) {
		const updateDoc = await this.reviewModel
			.findByIdAndUpdate(_id, dto, {
				new: true,
			})
			.exec()

		if (!updateDoc) throw new NotFoundException('Genre not found')

		return updateDoc
	}

	async delete(id: string) {
		const deleteDoc = await this.reviewModel.findByIdAndDelete(id).exec()

		if (!deleteDoc) throw new NotFoundException('Genre not found')

		return deleteDoc
	}
}
