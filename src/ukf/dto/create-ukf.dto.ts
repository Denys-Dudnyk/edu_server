import { IsObject, IsString } from 'class-validator'

export class Philosophical {
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
}

export class Pedagogical {
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
}

export class European {
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
}

export class Sciences_Health {
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
}

export class Sciences_Informatics {
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
}

export class CreateUkfFFDto {
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

	// @IsObject()
	// philosophical?: Philosophical

	// @IsObject()
	// pedagogical?: Pedagogical

	// @IsObject()
	// european?: European

	// @IsObject()
	// sciences_health?: Sciences_Health

	// @IsObject()
	// sciences_informatics?: Sciences_Informatics
}
