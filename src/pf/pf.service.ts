import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { CreatePfDto } from './dto/create-pf.dto'
import { PfModel } from './pf.model'

@Injectable()
export class PfService {
	constructor(
		@InjectModel(PfModel)
		private readonly pfModel: ModelType<PfModel> // private readonly movieService: MovieService
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
		return this.pfModel
			.find(options)
			.select('-updatedAt -__v')
			.sort({
				createdAt: 'asc',
			})
			.exec()
	}
	async bySlug(slug: string) {
		const doc = await this.pfModel.findOne({ slug }).exec()
		if (!doc) throw new NotFoundException('Review not found')
		return doc
	}

	async byId(_id: string) {
		const review = await this.pfModel.findById(_id)

		if (!review) throw new NotFoundException('Genre not found')

		return review
	}

	async create() {
		const defaultValue: CreatePfDto = {
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
		const review = await this.pfModel.create(defaultValue)
		return review._id
	}

	async update(_id: string, dto: CreatePfDto) {
		const updateDoc = await this.pfModel
			.findByIdAndUpdate(_id, dto, {
				new: true,
			})
			.exec()

		if (!updateDoc) throw new NotFoundException('Genre not found')

		return updateDoc
	}

	async delete(id: string) {
		const deleteDoc = await this.pfModel.findByIdAndDelete(id).exec()

		if (!deleteDoc) throw new NotFoundException('Genre not found')

		return deleteDoc
	}
}
