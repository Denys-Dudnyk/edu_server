import { IsString } from 'class-validator'

export class CreateFpvaiDto {
	@IsString()
	name: string

	@IsString()
	length: string

	@IsString()
	language: string

	@IsString()
	deadline: string

	@IsString()
	description: string

	@IsString()
	nameUA: string
	@IsString()
	nameEN: string
	@IsString()
	lengthUA: string
	@IsString()
	lengthEN: string
	@IsString()
	languageUA: string
	@IsString()
	languageEN: string
	@IsString()
	descriptionUA: string
	@IsString()
	descriptionEN: string
}
