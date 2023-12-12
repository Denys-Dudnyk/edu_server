import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { CreateProductDto } from './dto/create-product.dto'
import { ProductModel } from './product.model'

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(ProductModel)
		private readonly productModel: ModelType<ProductModel> // private readonly movieService: MovieService
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
		return this.productModel
			.find(options)
			.select('-updatedAt -__v')
			.sort({
				createdAt: 'asc',
			})
			.exec()
	}
	async bySlug(slug: string) {
		const doc = await this.productModel.findOne({ slug }).exec()
		if (!doc) throw new NotFoundException('Product not found')
		return doc
	}

	async byId(_id: string) {
		const product = await this.productModel.findById(_id)

		if (!product) throw new NotFoundException('Genre not found')

		return product
	}

	async create() {
		const defaultValue: CreateProductDto = {
			title: '',
			slug: '',
			description: '',
			descriptionItem: '',
			price: '',
			oldPrice: '',
			image: '',
			titleUA: '',
			descriptionUA: '',
			descriptionItemUA: '',
			titleEN: '',
			descriptionEN: '',
			descriptionItemEN: '',
		}
		const product = await this.productModel.create(defaultValue)
		return product._id
	}

	async update(_id: string, dto: CreateProductDto) {
		const updateDoc = await this.productModel
			.findByIdAndUpdate(_id, dto, {
				new: true,
			})
			.exec()

		if (!updateDoc) throw new NotFoundException('Genre not found')

		return updateDoc
	}

	async delete(id: string) {
		const deleteDoc = await this.productModel.findByIdAndDelete(id).exec()

		if (!deleteDoc) throw new NotFoundException('Genre not found')

		return deleteDoc
	}
}
