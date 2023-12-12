import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { CreateUkfFFDto } from './dto/create-ukf.dto'
import { UkfModel } from './ukf.model'

@Injectable()
export class UkfService {
	constructor(
		@InjectModel(UkfModel)
		private readonly ukfModel: ModelType<UkfModel> // private readonly movieService: MovieService
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
		return this.ukfModel
			.find(options)
			.select('-updatedAt -__v')
			.sort({
				createdAt: 'asc',
			})
			.exec()
	}
	async bySlug(slug: string) {
		const doc = await this.ukfModel.findOne({ slug }).exec()
		if (!doc) throw new NotFoundException('Review not found')
		return doc
	}

	async byId(_id: string) {
		const review = await this.ukfModel.findById(_id)

		if (!review) throw new NotFoundException('Genre not found')

		return review
	}

	async create() {
		const defaultValue: CreateUkfFFDto = {
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
		const review = await this.ukfModel.create(defaultValue)
		return review._id
	}

	async update(_id: string, dto: CreateUkfFFDto) {
		const updateDoc = await this.ukfModel
			.findByIdAndUpdate(_id, dto, {
				new: true,
			})
			.exec()

		if (!updateDoc) throw new NotFoundException('Genre not found')

		return updateDoc
	}

	async delete(id: string) {
		const deleteDoc = await this.ukfModel.findByIdAndDelete(id).exec()

		if (!deleteDoc) throw new NotFoundException('Genre not found')

		return deleteDoc
	}
}
