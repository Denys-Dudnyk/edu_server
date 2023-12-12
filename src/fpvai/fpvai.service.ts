import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { CreateFpvaiDto } from './dto/create-fpvai.dto'
import { FpvaiModel } from './fpvai.model'

@Injectable()
export class FpvaiService {
	constructor(
		@InjectModel(FpvaiModel)
		private readonly fpvaiModel: ModelType<FpvaiModel> // private readonly movieService: MovieService
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
		return this.fpvaiModel
			.find(options)
			.select('-updatedAt -__v')
			.sort({
				createdAt: 'asc',
			})
			.exec()
	}
	async bySlug(slug: string) {
		const doc = await this.fpvaiModel.findOne({ slug }).exec()
		if (!doc) throw new NotFoundException('Review not found')
		return doc
	}

	async byId(_id: string) {
		const review = await this.fpvaiModel.findById(_id)

		if (!review) throw new NotFoundException('Genre not found')

		return review
	}

	async create() {
		const defaultValue: CreateFpvaiDto = {
			name: '',
			deadline: '',
			description: '',
			language: '',
			length: '',
			nameUA: '',

			nameEN: '',

			lengthUA: '',

			lengthEN: '',

			languageUA: '',

			languageEN: '',

			descriptionUA: '',

			descriptionEN: '',
		}
		const review = await this.fpvaiModel.create(defaultValue)
		return review._id
	}

	async update(_id: string, dto: CreateFpvaiDto) {
		const updateDoc = await this.fpvaiModel
			.findByIdAndUpdate(_id, dto, {
				new: true,
			})
			.exec()

		if (!updateDoc) throw new NotFoundException('Genre not found')

		return updateDoc
	}

	async delete(id: string) {
		const deleteDoc = await this.fpvaiModel.findByIdAndDelete(id).exec()

		if (!deleteDoc) throw new NotFoundException('Genre not found')

		return deleteDoc
	}
}
