import { IsString } from 'class-validator'

export class CreateProductDto {
	@IsString()
	name: string

	@IsString()
	specialty: string

	@IsString()
	description: string

	@IsString()
	image: string
}
