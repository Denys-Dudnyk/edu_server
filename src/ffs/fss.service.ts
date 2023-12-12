import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { CreateFssDto } from './dto/create-fss.dto'
import { FssModel } from './fss.model'

@Injectable()
export class FssService {
	constructor(
		@InjectModel(FssModel)
		private readonly fssModel: ModelType<FssModel> // private readonly movieService: MovieService
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
		return this.fssModel
			.find(options)
			.select('-updatedAt -__v')
			.sort({
				createdAt: 'asc',
			})
			.exec()
	}
	async bySlug(slug: string) {
		const doc = await this.fssModel.findOne({ slug }).exec()
		if (!doc) throw new NotFoundException('Review not found')
		return doc
	}

	async byId(_id: string) {
		const review = await this.fssModel.findById(_id)

		if (!review) throw new NotFoundException('Genre not found')

		return review
	}

	async create() {
		const defaultValue: CreateFssDto = {
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
		const review = await this.fssModel.create(defaultValue)
		return review._id
	}

	async update(_id: string, dto: CreateFssDto) {
		const updateDoc = await this.fssModel
			.findByIdAndUpdate(_id, dto, {
				new: true,
			})
			.exec()

		if (!updateDoc) throw new NotFoundException('Genre not found')

		return updateDoc
	}

	async delete(id: string) {
		const deleteDoc = await this.fssModel.findByIdAndDelete(id).exec()

		if (!deleteDoc) throw new NotFoundException('Genre not found')

		return deleteDoc
	}
}
